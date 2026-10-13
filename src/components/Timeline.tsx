import { seasons, timelineSection } from "@/content/site";
import { formatEuro, fr, joinNames } from "@/lib/format";
import styles from "./Timeline.module.css";

/** Petite flèche « lien externe » affichée dans le bouton d'inscription. */
function ExternalIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      style={{ marginLeft: 8 }}
    >
      <path d="M14 4h6v6" />
      <path d="M20 4 10 14" />
      <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
    </svg>
  );
}

const kindLabel = {
  event: "Événement",
  meeting: "Réunion",
  gift: "Offert aux enfants",
} as const;

export default function Timeline() {
  return (
    <section id="agenda" className="section">
      <div className="container">
        <div className="section-head">
          <span className="kicker">{timelineSection.kicker}</span>
          <h2>{fr(timelineSection.title)}</h2>
          <p className="lead">{fr(timelineSection.intro)}</p>
        </div>

        <div className={styles.timeline}>
          {seasons.map((season) => (
            <section key={season.name} className={styles.season} aria-labelledby={`saison-${season.name}`}>
              <h3 id={`saison-${season.name}`} className={styles.seasonTitle}>
                {season.name}
              </h3>
              <ol className={styles.list}>
                {season.events.map((ev) => {
                  const showDate = ev.date ?? ev.month;
                  const toConfirm = ev.kind !== "gift" && ev.dateConfirmed === false;
                  return (
                    <li
                      key={ev.id}
                      className={`${styles.item} ${styles[ev.kind]} ${ev.featured ? styles.featured : ""}`}
                    >
                      <span className={styles.dot} aria-hidden="true" />
                      <article className={styles.card}>
                        <div className={styles.meta}>
                          <span className={styles.month}>{showDate}</span>
                          {toConfirm ? <span className={styles.toConfirm}>{timelineSection.toConfirm}</span> : null}
                          {ev.featured ? (
                            <span className={styles.featuredBadge}>{timelineSection.featuredBadge}</span>
                          ) : (
                            <span className={styles.badge}>{kindLabel[ev.kind]}</span>
                          )}
                          {ev.signupUrl ? <span className={styles.openBadge}>{timelineSection.signupOpen}</span> : null}
                        </div>
                        <h4 className={styles.title}>{fr(ev.title)}</h4>
                        <p className={styles.text}>{fr(ev.description)}</p>

                        {ev.help ? (
                          <p className={styles.help}>
                            <strong>{timelineSection.helpLabel}</strong> {fr(ev.help)}
                          </p>
                        ) : null}

                        {ev.leads && ev.leads.length > 0 ? (
                          <p className={styles.leads}>
                            <strong>{timelineSection.leadsLabel}</strong> {joinNames(ev.leads)}
                          </p>
                        ) : null}
                        {ev.leadWanted ? <p className={styles.leadWanted}>{fr(timelineSection.leadWanted)}</p> : null}

                        <div className={styles.foot}>
                          {ev.raised ? (
                            <p className={styles.raised}>
                              <span className={styles.raisedLabel}>{timelineSection.raisedLabel}</span>
                              <span className={styles.raisedValue}>{formatEuro(ev.raised)} pour les enfants</span>
                            </p>
                          ) : (
                            <span />
                          )}
                          {ev.signupUrl ? (
                            <a
                              className="btn btn--sun"
                              href={ev.signupUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${timelineSection.signupCta} — ${ev.title} (nouvel onglet)`}
                            >
                              {timelineSection.signupCta}
                              <ExternalIcon />
                            </a>
                          ) : ev.kind !== "gift" ? (
                            <a
                              className="btn btn--primary btn--small"
                              href="#contact"
                              data-event={ev.title}
                              aria-label={`${timelineSection.cta} — ${ev.title}`}
                            >
                              {timelineSection.cta}
                            </a>
                          ) : null}
                        </div>
                        {ev.signupUrl && ev.signupNote ? <p className={styles.signupNote}>{fr(ev.signupNote)}</p> : null}
                      </article>
                    </li>
                  );
                })}
              </ol>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
