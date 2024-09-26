import About from "@/components/about";
import Contact from "@/components/contacts";
import Experience from "@/components/experience";
import Intro from "@/components/info";
import Projects from "@/components/projects";
import SectionDevider from "@/components/section-devider";
import Stack from "@/components/stack";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Analytics />
      <Intro />
      <SectionDevider />
      <About />
      <Projects />
      <Stack />
      <Experience />
      <Contact />
    </main>
  );
}
