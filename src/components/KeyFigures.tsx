import { keyFigures } from "@/content/site";
import { cx } from "@/lib/cx";
import styles from "./KeyFigures.module.css";

export default function KeyFigures() {
  return (
    <section className={styles.band} aria-label="Chiffres-clés de l'association">
      <div className={cx("container", styles.grid)}>
        {keyFigures.map((f) => (
          <div key={f.label} className={styles.item}>
            <p className={styles.value}>
              {f.prefix ? <span className={styles.prefix}>{f.prefix}&nbsp;</span> : null}
              {f.value}
              <span className={styles.unit}>&nbsp;{f.unit}</span>
            </p>
            <p className={styles.label}>{f.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
