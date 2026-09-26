import { HELP_CTA, seasons, timelineSection, type SeasonEvent } from "@/content/site";
import { cx } from "@/lib/cx";
import { formatEuro, fr } from "@/lib/format";
import { anchors } from "@/lib/links";
import HelpLink from "./HelpLink";
import Section from "./Section";
import styles from "./Timeline.module.css";

export default function Timeline() {
  return (
    <Section id={anchors.agenda} heading={timelineSection}>
      <div className={styles.timeline}>
        {seasons.map((season) => (
          <section key={season.name} className={styles.season} aria-labelledby={`saison-${season.name}`}>
            <h3 id={`saison-${season.name}`} className={styles.seasonTitle}>
              {season.name}
            </h3>
            <ol className={styles.list}>
              {season.events.map((event) => (
                <li key={event.id} className={cx(styles.item, styles[event.kind])}>
                  <span className={styles.dot} aria-hidden="true" />
                  <EventCard event={event} />
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </Section>
  );
}

/** Carte d'un rendez-vous : date, type, description, besoins en bénévoles et bouton d'aide. */
function EventCard({ event }: { event: SeasonEvent }) {
  return (
    <article className={cx("card", styles.card)}>
      <div className={styles.meta}>
        <span className="overline">{event.date ?? event.month}</span>
        <span className={styles.badge}>{timelineSection.kindLabels[event.kind]}</span>
      </div>
      <h4 className={styles.title}>{fr(event.title)}</h4>
      <p className={styles.text}>{fr(event.description)}</p>

      {event.help ? (
        <p className={styles.help}>
          <strong>{timelineSection.helpLabel}</strong> {fr(event.help)}
        </p>
      ) : null}

      <div className={styles.foot}>
        {event.raised ? (
          <p className={styles.raised}>
            <span className={styles.raisedLabel}>{timelineSection.raisedLabel}</span>
            <span className={styles.raisedValue}>{formatEuro(event.raised)} pour les enfants</span>
          </p>
        ) : (
          // garde le bouton calé à droite quand il n'y a pas de montant
          <span />
        )}
        {event.kind !== "gift" ? (
          <HelpLink className="btn btn--primary btn--small" aria-label={`${HELP_CTA} — ${event.title}`} />
        ) : null}
      </div>
    </article>
  );
}
