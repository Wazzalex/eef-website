import {
  SCHOOL_YEAR,
  lastYear,
  partnerProjects,
  projects,
  projectsSection,
  seasons,
} from "@/content/site";
import { formatEuro, fr } from "@/lib/format";
import Gauge from "./Gauge";
import ProjectIcon from "./illustrations/ProjectIcon";
import styles from "./Projects.module.css";

export default function Projects() {
  const counted = projects.filter((p) => p.countsInTotal !== false);
  const total = counted.reduce((sum, p) => sum + p.amount, 0);
  const maxAmount = Math.max(...counted.map((p) => p.amount));
  const classesCount = new Set(counted.flatMap((p) => p.classes)).size;

  const allEvents = seasons.flatMap((s) => s.events);
  const raisedThisYear = allEvents.reduce((sum, e) => sum + (e.raisedThisYear ?? 0), 0);
  const nextEvent = allEvents.find((e) => e.kind === "event" && e.raisedThisYear == null);
  const yearPercent = total > 0 ? (raisedThisYear / total) * 100 : 0;
  const lastYearForChildren = lastYear.donation + lastYear.extras;

  return (
    <section id="projets" className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-head">
          <span className="kicker">{projectsSection.kicker}</span>
          <h2>{fr(projectsSection.title)}</h2>
          <p className="lead">{fr(projectsSection.intro)}</p>
        </div>

        {/* Jauge de l'année */}
        <div className={styles.yearCard}>
          <div className={styles.yearHead}>
            <div>
              <p className={styles.yearKicker}>
                {projectsSection.gaugeTitle} · {SCHOOL_YEAR}
              </p>
              <p className={styles.yearAmount}>
                <strong>{formatEuro(total)}</strong> de projets pour {classesCount} classes
              </p>
            </div>
            <p className={styles.yearRaised}>
              <strong>{formatEuro(raisedThisYear)}</strong> récoltés à ce jour
            </p>
          </div>
          <Gauge
            percent={yearPercent}
            tone="sun"
            size="lg"
            label={`${formatEuro(raisedThisYear)} récoltés sur ${formatEuro(total)}`}
          />
          <div className={styles.yearFoot}>
            <p>{fr(projectsSection.gaugeText)}</p>
            <p className={styles.yearRef}>
              {nextEvent ? (
                <>
                  Prochain rendez-vous : <strong>{nextEvent.title}</strong> ({nextEvent.month.toLowerCase()}).{" "}
                </>
              ) : null}
              L'an dernier ({lastYear.label}), les événements ont rapporté {formatEuro(lastYear.eventsProfit)} et
              l'association a consacré plus de {formatEuro(Math.floor(lastYearForChildren / 100) * 100)} aux enfants.
            </p>
          </div>
        </div>

        {/* Projets */}
        <ul className={styles.grid} aria-label="Projets financés">
          {projects.map((p) => {
            const share = p.countsInTotal === false ? null : (p.amount / total) * 100;
            const barPercent = (p.amount / maxAmount) * 100;
            return (
              <li key={p.id} className={`card ${styles.project} ${p.countsInTotal === false ? styles.previous : ""}`}>
                <div className={styles.projectHead}>
                  <span className={styles.projectIcon}>
                    <ProjectIcon name={p.icon} />
                  </span>
                  <h3>{fr(p.title)}</h3>
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
                    {share == null ? "budget précédent" : `${Math.round(share)} % du budget de l'année`}
                  </span>
                </div>
                <Gauge
                  percent={barPercent}
                  label={`${p.title} : ${formatEuro(p.amount)} financés par l'association`}
                />
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
