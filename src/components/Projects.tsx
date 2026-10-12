import { SCHOOL_YEAR, lastYear, partnerProjects, projects, projectsSection } from "@/content/site";
import { formatEuro, fr } from "@/lib/format";
import Gauge from "./Gauge";
import StackedBar from "./StackedBar";
import ProjectIcon from "./illustrations/ProjectIcon";
import styles from "./Projects.module.css";

/** Couleurs de la charte pour la répartition du bilan. */
const SEGMENT_COLORS = ["#2A6496", "#F5C451", "#E2643F", "#7A9EC0", "#1B2733"];

export default function Projects() {
  /* --- bilan de l'an dernier --- */
  const contributions = lastYear.contributions.map((c, i) => ({
    ...c,
    color: SEGMENT_COLORS[i % SEGMENT_COLORS.length],
  }));
  const givenTotal = contributions.reduce((sum, c) => sum + c.amount, 0);

  /* --- projets de l'année --- */
  const counted = projects.filter((p) => p.countsInTotal !== false);
  const total = counted.reduce((sum, p) => sum + p.amount, 0);
  const classesCount = new Set(counted.flatMap((p) => p.classes)).size;

  return (
    <section id="projets" className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-head">
          <span className="kicker">{projectsSection.kicker}</span>
          <h2>{fr(projectsSection.title)}</h2>
          <p className="lead">{fr(projectsSection.intro)}</p>
        </div>

        {/* Bilan de l'an dernier */}
        <div className={styles.impactCard}>
          <p className={styles.impactKicker}>Bilan {lastYear.label}</p>
          <p className={styles.impactHeadline}>
            <strong>{formatEuro(givenTotal)}</strong> {fr(projectsSection.impactTitle)}
          </p>
          <StackedBar
            segments={contributions}
            label={`Répartition des ${formatEuro(givenTotal)} consacrés aux enfants en ${lastYear.label}`}
          />
          <ul className={styles.legend}>
            {contributions.map((c) => (
              <li key={c.label}>
                <span className={styles.swatch} style={{ background: c.color }} aria-hidden="true" />
                <span className={styles.legendLabel}>{fr(c.label)}</span>
                <span className={styles.legendAmount}>{formatEuro(c.amount)}</span>
              </li>
            ))}
          </ul>
          <p className={styles.impactNote}>
            <strong>{formatEuro(lastYear.eventsProfit)}</strong> {fr(projectsSection.impactText)}
          </p>
        </div>

        {/* Projets de l'année */}
        <div className={styles.projectsHead}>
          <h3>
            {fr(projectsSection.projectsTitle)} <span className={styles.year}>· {SCHOOL_YEAR}</span>
          </h3>
          <p>
            <strong>{formatEuro(total)}</strong> engagés pour {classesCount} classes. {fr(projectsSection.projectsText)}
          </p>
        </div>

        <ul className={styles.grid} aria-label="Projets financés">
          {projects.map((p) => {
            const budget = p.totalBudget ?? p.amount;
            const share = Math.round((p.amount / budget) * 100);
            return (
              <li key={p.id} className={`card ${styles.project} ${p.countsInTotal === false ? styles.previous : ""}`}>
                <div className={styles.projectHead}>
                  <span className={styles.projectIcon}>
                    <ProjectIcon name={p.icon} />
                  </span>
                  <h4>{fr(p.title)}</h4>
                </div>
                <p className={styles.projectText}>{fr(p.description)}</p>
                <ul className={styles.classes} aria-label="Classes concernées">
                  {p.classes.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
                <div className={styles.amountRow}>
                  <span className={styles.amount}>{formatEuro(p.amount)}</span>
                  <span className={styles.share}>
                    financé à <strong>{share}&nbsp;%</strong> par l'EEF
                  </span>
                </div>
                <Gauge
                  percent={share}
                  label={`${p.title} : ${formatEuro(p.amount)} financés par l'EEF, soit ${share} % du budget`}
                />
                {p.coFunding ? (
                  <p className={styles.note}>
                    Complément apporté par {fr(p.coFunding)}
                    {p.totalBudget ? ` (budget total : ${formatEuro(p.totalBudget)})` : ""}.
                  </p>
                ) : null}
                {p.note ? <p className={styles.note}>{fr(p.note)}</p> : null}
              </li>
            );
          })}
        </ul>

        <p className={styles.partners}>{fr(partnerProjects)}</p>
      </div>
    </section>
  );
}
