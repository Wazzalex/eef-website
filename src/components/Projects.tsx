import { lastYear, projectsSection } from "@/content/site";
import { formatEuro, fr } from "@/lib/format";
import Gauge from "./Gauge";
import StackedBar from "./StackedBar";
import ProjectIcon from "./illustrations/ProjectIcon";
import styles from "./Projects.module.css";

/** Couleurs de la charte, une par poste (barre empilée, icône et jauge de la carte). */
const SEGMENT_COLORS = [
  { bg: "#2A6496", ink: "#FFFFFF" },
  { bg: "#F5C451", ink: "#1B2733" },
  { bg: "#E2643F", ink: "#FFFFFF" },
  { bg: "#7A9EC0", ink: "#1B2733" },
  { bg: "#1B2733", ink: "#FFFFFF" },
];

/**
 * Bloc « Ce que l'EEF finance » : uniquement l'année passée.
 * 1. le total versé aux enfants et sa répartition (barre empilée)
 * 2. une carte par poste, avec une jauge = sa part dans ce total
 */
export default function Projects() {
  const fundings = lastYear.fundings.map((f, i) => ({
    ...f,
    color: SEGMENT_COLORS[i % SEGMENT_COLORS.length].bg,
    ink: SEGMENT_COLORS[i % SEGMENT_COLORS.length].ink,
  }));
  const givenTotal = fundings.reduce((sum, f) => sum + f.amount, 0);
  const segments = fundings.map((f) => ({ label: f.title, amount: f.amount, color: f.color }));

  return (
    <section id="projets" className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-head">
          <span className="kicker">{projectsSection.kicker}</span>
          <h2>{fr(projectsSection.title)}</h2>
          <p className="lead">{fr(projectsSection.intro)}</p>
        </div>

        {/* Total de l'an dernier et sa répartition */}
        <div className={styles.impactCard}>
          <p className={styles.impactKicker}>Bilan {lastYear.label}</p>
          <p className={styles.impactHeadline}>
            <strong>{formatEuro(givenTotal)}</strong> {fr(projectsSection.impactTitle)}
          </p>
          <StackedBar
            segments={segments}
            label={`Répartition des ${formatEuro(givenTotal)} consacrés aux enfants en ${lastYear.label}`}
          />
          <ul className={styles.legend}>
            {fundings.map((f) => (
              <li key={f.id}>
                <span className={styles.swatch} style={{ background: f.color }} aria-hidden="true" />
                <span className={styles.legendLabel}>{fr(f.title)}</span>
                <span className={styles.legendAmount}>{formatEuro(f.amount)}</span>
              </li>
            ))}
          </ul>
          <p className={styles.impactNote}>
            <strong>{formatEuro(lastYear.eventsProfit)}</strong> {fr(projectsSection.impactText)}
          </p>
        </div>

        {/* Le détail, poste par poste */}
        <div className={styles.projectsHead}>
          <h3>
            {fr(projectsSection.detailTitle)} <span className={styles.year}>· {lastYear.label}</span>
          </h3>
          <p>
            {fr(projectsSection.detailText)} {lastYear.label}.
          </p>
        </div>

        <ul className={styles.grid} aria-label={`Ce que l'EEF a financé en ${lastYear.label}`}>
          {fundings.map((f) => {
            const share = Math.round((f.amount / givenTotal) * 100);
            return (
              <li key={f.id} className={`card ${styles.project}`}>
                <div className={styles.projectHead}>
                  <span className={styles.projectIcon} style={{ background: f.color, color: f.ink }}>
                    <ProjectIcon name={f.icon} />
                  </span>
                  <h4>{fr(f.title)}</h4>
                </div>
                <p className={styles.projectText}>{fr(f.description)}</p>
                {f.who ? (
                  <ul className={styles.classes} aria-label="Pour qui">
                    <li>{fr(f.who)}</li>
                  </ul>
                ) : null}
                <div className={styles.amountRow}>
                  <span className={styles.amount}>{formatEuro(f.amount)}</span>
                  <span className={styles.share}>
                    <strong>{share}&nbsp;%</strong> du total {lastYear.label}
                  </span>
                </div>
                <Gauge
                  percent={share}
                  color={f.color}
                  label={`${f.title} : ${formatEuro(f.amount)}, soit ${share} % de ce que l'EEF a versé en ${lastYear.label}`}
                />
                {f.note ? <p className={styles.note}>{fr(f.note)}</p> : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
