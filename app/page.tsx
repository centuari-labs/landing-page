import { BackgroundBeams } from "@/components/ui/background-beams";
import { Badge } from "@/components/ui/badge";
import WaitlistForm from "@/components/waitlist-form";

export default function Home() {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="p-4 flex flex-col w-full items-center justify-center h-full relative z-10">
        <Badge variant={"colorful"}>🎉 | Coming Soon</Badge>
        <div>
          <h1 className="relative z-10 text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 text-center font-sans font-bold mt-4 uppercase">
            Centuari
          </h1>
        </div>
        <p></p>
        <p className="text-neutral-200 max-w-2xl mx-auto my-2 text-sm md:text-xl text-center relative z-10">
          Reinventing DeFi Lending With CLOB, Fixed Rates, Curated Vaults, and
          Real-World Integration
        </p>
        <WaitlistForm />
      </div>
      <BackgroundBeams />
    </div>
  );
}
