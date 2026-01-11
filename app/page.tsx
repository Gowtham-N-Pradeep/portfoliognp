import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { HeroSection2 } from "@/components/ui/hero-section-2";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Continuous Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Base gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white to-purple-50/60 dark:from-blue-950/20 dark:via-gray-900 dark:to-purple-950/20"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50/40 via-transparent to-pink-50/40 dark:from-cyan-950/15 dark:to-pink-950/15"></div>

        {/* Continuous gradient orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-bl from-purple-400/15 to-pink-400/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/6 w-72 h-72 bg-gradient-to-tr from-indigo-400/12 to-blue-400/12 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 right-1/3 w-64 h-64 bg-gradient-to-bl from-emerald-400/12 to-teal-400/12 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-gradient-to-tr from-orange-400/12 to-yellow-400/12 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/6 w-72 h-72 bg-gradient-to-bl from-green-400/12 to-cyan-400/12 rounded-full blur-3xl"></div>

        {/* Very subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='%239C92AC' fill-opacity='0.05'%3e%3ccircle cx='40' cy='40' r='1'/%3e%3c/g%3e%3c/svg%3e")`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <HeroSection2 />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
