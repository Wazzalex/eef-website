import { announcement } from "@/content/site";
import { fr } from "@/lib/format";
import styles from "./Announcement.module.css";

/**
 * Bandeau d'annonce tout en haut du site (prochain événement, appel aux bénévoles…).
 * Se désactive avec `announcement.enabled = false` dans site.ts.
 */
export default function Announcement() {
  if (!announcement.enabled) return null;

  return (
    <div className={styles.bar} role="region" aria-label="Annonce">
      <div className={`container ${styles.inner}`}>
        <p className={styles.text}>
          <span className={styles.emoji} aria-hidden="true">
            {announcement.emoji}
          </span>
          <strong>{fr(announcement.text)}</strong>
          <span className={styles.detail}> {fr(announcement.detail)}</span>
        </p>
        <a
          className={`btn btn--sun btn--small ${styles.cta}`}
          href={announcement.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${announcement.cta} (nouvel onglet)`}
        >
          {announcement.cta}
        </a>
      </div>
    </div>
  );
}
