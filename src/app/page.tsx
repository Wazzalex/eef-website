import Header from "@/components/Header";
import Hero from "@/components/Hero";
import KeyFigures from "@/components/KeyFigures";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import { anchorHref, anchors } from "@/lib/links";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href={anchorHref("content")}>
        Aller au contenu
      </a>
      <Header />
      <main id={anchors.content}>
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
