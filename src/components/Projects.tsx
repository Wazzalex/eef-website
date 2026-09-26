import {
  SCHOOL_YEAR,
  lastYear,
  partnerProjects,
  projects,
  projectsSection,
  seasons,
  type Project,
} from "@/content/site";
import { cx } from "@/lib/cx";
import { formatEuro, fr } from "@/lib/format";
import { anchors } from "@/lib/links";
import { countsInYearBudget, floorToHundred, fundraisingProgress, percentOf, projectsBudget } from "@/lib/stats";
import Gauge from "./Gauge";
import IconBadge from "./IconBadge";
import Section from "./Section";
import styles from "./Projects.module.css";

export default function Projects() {
  const budget = projectsBudget(projects);

  return (
    <Section id={anchors.projects} heading={projectsSection} className={styles.section}>
      <YearFunding budgetTotal={budget.total} classesCount={budget.classesCount} />

      <ul className={styles.grid} aria-label="Projets financés">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            budgetTotal={budget.total}
            maxAmount={budget.maxAmount}
          />
        ))}
      </ul>

      <p className={styles.partners}>{fr(partnerProjects)}</p>
    </Section>
  );
}

/** Jauge de l'année : montant récolté au fil des événements, rapporté au budget des projets. */
function YearFunding({ budgetTotal, classesCount }: { budgetTotal: number; classesCount: number }) {
  const { raised, nextEvent } = fundraisingProgress(seasons);

  return (
    <div className={styles.yearCard}>
      <div className={styles.yearHead}>
        <div>
          <p className={cx("overline", styles.yearKicker)}>
            {projectsSection.gaugeTitle} · {SCHOOL_YEAR}
          </p>
          <p className={styles.yearAmount}>
            <strong>{formatEuro(budgetTotal)}</strong> de projets pour {classesCount} classes
          </p>
        </div>
        <p className={styles.yearRaised}>
          <strong>{formatEuro(raised)}</strong> récoltés à ce jour
        </p>
      </div>
      <Gauge
        percent={percentOf(raised, budgetTotal)}
        tone="sun"
        size="lg"
        label={`${formatEuro(raised)} récoltés sur ${formatEuro(budgetTotal)}`}
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
          l'association a consacré plus de {formatEuro(floorToHundred(lastYear.donation + lastYear.extras))} aux enfants.
        </p>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  budgetTotal: number;
  /** Montant du plus gros projet : sert d'échelle aux barres. */
  maxAmount: number;
}

/** Carte d'un projet : description, classes, montant et part du budget de l'année. */
function ProjectCard({ project, budgetTotal, maxAmount }: ProjectCardProps) {
  const inYearBudget = countsInYearBudget(project);

  return (
    <li className={cx("card", styles.project, !inYearBudget && styles.previous)}>
      <div className={styles.projectHead}>
        <IconBadge name={project.icon} />
        <h3>{fr(project.title)}</h3>
      </div>
      <p className={styles.projectText}>{fr(project.description)}</p>
      <ul className={styles.classes} aria-label="Classes concernées">
        {project.classes.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <div className={styles.amountRow}>
        <span className={styles.amount}>{formatEuro(project.amount)}</span>
        <span className={styles.share}>
          {inYearBudget
            ? `${Math.round(percentOf(project.amount, budgetTotal))} % du budget de l'année`
            : "budget précédent"}
        </span>
      </div>
      <Gauge
        percent={percentOf(project.amount, maxAmount)}
        label={`${project.title} : ${formatEuro(project.amount)} financés par l'association`}
      />
      {project.note ? <p className={styles.note}>{fr(project.note)}</p> : null}
    </li>
  );
}
