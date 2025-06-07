# Step 1: Install dependencies and build the app
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package-lock.json ./
COPY package.json ./
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the Next.js app
RUN npm build

# Step 2: Run the app using a smaller image
FROM node:18-alpine AS runner

WORKDIR /app

# Copy necessary files from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.ts ./next.config.ts

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "start"]