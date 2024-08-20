import Hero from "@/components/hero";
import performanceImg from "public/performance.jpg";

export default function PerfomancePage() {
  return (
    <Hero
      imgData={performanceImg}
      imgAlt="Welding"
      title="We serve high performance applications"
    />
  );
}
