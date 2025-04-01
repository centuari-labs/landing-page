import { BackgroundBeams } from "@/components/ui/background-beams";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[10px] row-start-2 items-center">
        <Badge variant={"colorful"}>Coming Soon</Badge>
        <div className="relative mt-10">
          <h1 className="text-4xl md:text-8xl">Centuari Labs</h1>
          <Badge
            className="absolute -top-1 -right-8 text-xs md:text-sm"
            variant={"colorful"}
          >
            v1
          </Badge>
        </div>
        <p className="text-sm md:text-lg text-center">
          A DeFi platform revolutionizing CLOB for borrowers and lenders.
        </p>
        <Button
          variant={"colorful"}
          className="rounded-full mt-5 font-semibold"
        >
          Join Waitlist
        </Button>
      </main>
      <BackgroundBeams />
    </div>
  );
}
