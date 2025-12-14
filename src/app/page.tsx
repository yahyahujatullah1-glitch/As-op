import Hero from "@/components/Hero";
import About from "@/components/About";
import ServerInfo from "@/components/ServerInfo";
import Offerings from "@/components/Offerings";
import Links from "@/components/Links";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-neon selection:text-white">
      <Hero />
      <About />
      <ServerInfo />
      <Offerings />
      <Links />
      <Footer />
    </main>
  );
}
