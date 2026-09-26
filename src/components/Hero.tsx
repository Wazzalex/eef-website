import { FORM_URL, hero } from "@/content/site";
import { fr, helpLink } from "@/lib/format";
import Panorama from "./illustrations/Panorama";
import styles from "./Hero.module.css";

export default function Hero() {
  const help = helpLink(FORM_URL);

  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <span className="kicker">{hero.kicker}</span>
        <h1>{fr(hero.title)}</h1>
        <p className={styles.text}>{fr(hero.text)}</p>
        <div className={styles.ctas}>
          <a
            className="btn btn--sun"
            href={help.href}
            target={help.external ? "_blank" : undefined}
            rel={help.external ? "noopener" : undefined}
          >
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
