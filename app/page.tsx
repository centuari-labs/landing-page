import { BackgroundBeams } from "@/components/ui/background-beams";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 flex flex-col items-center justify-center h-full relative z-10">
        <Badge className="mb-8" variant={"colorful"}>
          🎉 | Coming Soon
        </Badge>
        <div>
          <h1 className="relative z-10 text-3xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400  text-center font-sans font-bold">
            Centuari
          </h1>
        </div>
        <p></p>
        <p className="text-neutral-200 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          A DeFi platform revolutionizing CLOB for borrowers and lenders.
        </p>
        <div className="flex flex-col items-center w-full gap-3 mt-8 md:flex-row">
          <Input placeholder="Join waitlist" />
          <Button variant="colorful" className="cursor-pointer">
            Join Waitlist
          </Button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
