import { bureau, bureauSection } from "@/content/site";
import { asset } from "@/lib/assets";
import { fr } from "@/lib/format";
import styles from "./Bureau.module.css";

/** Les membres du bureau : photo, prénom, nom et rôle. */
export default function Bureau() {
  return (
    <section id="bureau" className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-head">
          <span className="kicker">{bureauSection.kicker}</span>
          <h2>{fr(bureauSection.title)}</h2>
          <p className="lead">{fr(bureauSection.intro)}</p>
        </div>

        <ul className={styles.grid} aria-label="Membres du bureau">
          {bureau.map((m) => (
            <li key={`${m.firstName}-${m.lastName}`} className={styles.member}>
              <img
                className={styles.photo}
                src={asset(m.photo)}
                alt={`Portrait de ${m.firstName} ${m.lastName}`}
                width={160}
                height={160}
                loading="lazy"
                decoding="async"
              />
              <p className={styles.name}>
                {m.firstName} <span className={styles.lastName}>{m.lastName}</span>
              </p>
              <p className={styles.role}>{fr(m.role)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
