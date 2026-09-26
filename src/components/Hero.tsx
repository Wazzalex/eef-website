import { hero } from "@/content/site";
import { cx } from "@/lib/cx";
import { fr } from "@/lib/format";
import { anchorHref, anchors } from "@/lib/links";
import HelpLink from "./HelpLink";
import Panorama from "./illustrations/Panorama";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id={anchors.top} className={styles.hero}>
      <div className={cx("container", styles.content)}>
        <span className="kicker">{hero.kicker}</span>
        <h1>{fr(hero.title)}</h1>
        <p className={styles.text}>{fr(hero.text)}</p>
        <div className={styles.ctas}>
          <HelpLink className="btn btn--sun" />
          <a className="btn btn--ghost" href={anchorHref("projects")}>
            {hero.secondaryCta}
          </a>
        </div>
      </div>
      <Panorama className={styles.panorama} />
    </section>
  );
}
