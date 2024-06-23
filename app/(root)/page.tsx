import HeroAppliction from "@/components/sections/Hero";
import Quesitions from "@/components/sections/Quesitions";
import Feature from "@/components/sections/feature";

export default function Home() {
  return (
    <main className=" mt-[77px]">
      <HeroAppliction />
      <Feature />
      <Quesitions />

    </main>
  );
}
