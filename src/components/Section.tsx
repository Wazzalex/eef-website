import type { ReactNode } from "react";
import type { SectionHeading } from "@/content/site";
import { cx } from "@/lib/cx";
import { fr } from "@/lib/format";

interface SectionProps {
  /** Ancre de la section (voir `anchors` dans src/lib/links.ts). */
  id: string;
  /** Sur-titre, titre et introduction, tirés de site.ts. */
  heading: SectionHeading;
  className?: string;
  children: ReactNode;
}

/** Section de la page : marges verticales, conteneur centré et en-tête commun. */
export default function Section({ id, heading, className, children }: SectionProps) {
  return (
    <section id={id} className={cx("section", className)}>
      <div className="container">
        <div className="section-head">
          <span className="kicker">{heading.kicker}</span>
          <h2>{fr(heading.title)}</h2>
          <p className="lead">{fr(heading.intro)}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
