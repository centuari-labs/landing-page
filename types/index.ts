export interface WaitlistEntry {
  id?: string;
  email: string;
  created_at?: string;
}

export interface ApiResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

declare global {
  interface Window {
    grecaptcha: any;
  }
}
