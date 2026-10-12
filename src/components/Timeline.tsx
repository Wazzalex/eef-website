import { seasons, timelineSection } from "@/content/site";
import { formatEuro, fr, joinNames } from "@/lib/format";
import styles from "./Timeline.module.css";

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
                    <li key={ev.id} className={`${styles.item} ${styles[ev.kind]}`}>
                      <span className={styles.dot} aria-hidden="true" />
                      <article className={styles.card}>
                        <div className={styles.meta}>
                          <span className={styles.month}>{showDate}</span>
                          {toConfirm ? <span className={styles.toConfirm}>{timelineSection.toConfirm}</span> : null}
                          <span className={styles.badge}>{kindLabel[ev.kind]}</span>
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
                          {ev.kind !== "gift" ? (
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
