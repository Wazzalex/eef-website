import { hero } from "@/content/site";
import { fr } from "@/lib/format";
import Panorama from "./illustrations/Panorama";
import styles from "./Hero.module.css";

/** Découpe le texte pour surligner le passage demandé (s'il est trouvé). */
function Highlighted({ text, highlight }: { text: string; highlight?: string }) {
  if (!highlight || !text.includes(highlight)) return <>{fr(text)}</>;
  const [before, after] = text.split(highlight);
  return (
    <>
      {fr(before)}
      <mark className={styles.mark}>{fr(highlight)}</mark>
      {fr(after)}
    </>
  );
}

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <span className="kicker">{hero.kicker}</span>
        <h1>{fr(hero.title)}</h1>
        <p className={styles.text}>
          <Highlighted text={hero.text} highlight={hero.highlight} />
        </p>
        <div className={styles.ctas}>
          <a className="btn btn--sun" href="#agenda">
            {hero.primaryCta}
          </a>
          <a className="btn btn--ghost" href="#projets">
            {hero.secondaryCta}
          </a>
        </div>
      </div>
      <Panorama className={styles.panorama} />
    </section>
  );
}
