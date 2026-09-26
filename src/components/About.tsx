import { about } from "@/content/site";
import { cx } from "@/lib/cx";
import { fr } from "@/lib/format";
import { anchors } from "@/lib/links";
import IconBadge from "./IconBadge";
import Section from "./Section";
import styles from "./About.module.css";

export default function About() {
  return (
    <Section id={anchors.about} heading={about}>
      <div className={styles.grid}>
        {about.cards.map((card) => (
          <article key={card.title} className={cx("card", styles.card)}>
            <IconBadge name={card.icon} size="lg" />
            <h3>{fr(card.title)}</h3>
            <p>{fr(card.text)}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
