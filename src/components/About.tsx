import { about } from "@/content/site";
import { fr } from "@/lib/format";
import styles from "./About.module.css";

const icons = [
  /* membre */
  <svg key="a" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
    <path d="M17.5 3.5 19 5l3-3" />
  </svg>,
  /* boucle événements → projets */
  <svg key="b" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 12a8 8 0 1 1-2.3-5.7" />
    <path d="M20 4v5h-5" />
    <path d="M9 12l2 2 4-4" />
  </svg>,
  /* montagne */
  <svg key="c" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 20 10 8l4 6 2-3 5 9Z" />
    <circle cx="18" cy="6" r="2" />
  </svg>,
];

export default function About() {
  return (
    <section id="association" className="section">
      <div className="container">
        <div className="section-head">
          <span className="kicker">{about.kicker}</span>
          <h2>{fr(about.title)}</h2>
          <p className="lead">{fr(about.intro)}</p>
        </div>
        <div className={styles.grid}>
          {about.cards.map((card, i) => (
            <article key={card.title} className={`card ${styles.card}`}>
              <div className={styles.icon}>{icons[i]}</div>
              <h3>{fr(card.title)}</h3>
              <p>{fr(card.text)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
