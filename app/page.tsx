import { BackgroundBeams } from "@/components/ui/background-beams";
import { Badge } from "@/components/ui/badge";
import WaitlistForm from "@/components/waitlist-form";

export default function Home() {
  return (
    <div className="relative h-screen w-full rounded-md bg-neutral-950 flex flex-col items-center justify-center antialiased">
      <div className="hidden dark:block absolute w-[300px] bottom-0 right-0 h-[200px] rounded-full bg-blue-900 blur-[200px]"></div>
      <div className="hidden dark:block absolute w-1/3 left-0 top-0 h-1/3 transform translate-x-0.5 translate-y-0.5 rounded-full bg-blue-950 blur-[200px]"></div>
      <div className="p-4 flex flex-col w-full items-center justify-center h-full relative z-10">
        <Badge variant={"colorful"} className="h-10 px-5 text-lg font-light">
          Join Genesis Waitlist
        </Badge>
        <div>
          <h1 className="relative z-10 text-5xl tracking-widest md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-[#0C63BA] to-[#1084AB] text-center font-sans font-bold mt-4 uppercase">
            COMING SOON
          </h1>
        </div>
        <p></p>
        <p className="text-neutral-200 max-w-2xl mx-auto mt-5 text-sm md:text-xl text-center relative z-10">
          Fixed-Rate Order Book Lending with Curated Vaults and Trust-Based
          Uncollateralized Borrowing
        </p>
        <WaitlistForm />
      </div>
      <BackgroundBeams />
    </div>
  );
}
