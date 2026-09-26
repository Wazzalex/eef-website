import Header from "@/components/Header";
import Hero from "@/components/Hero";
import KeyFigures from "@/components/KeyFigures";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <Header />
      <main id="contenu">
        <Hero />
        <KeyFigures />
        <About />
        <Projects />
        <Timeline />
      </main>
      <Footer />
    </>
  );
}
