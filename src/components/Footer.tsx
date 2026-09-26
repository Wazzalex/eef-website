import { CONTACT_EMAIL, association, contactSection, footer } from "@/content/site";
import { asset } from "@/lib/assets";
import { cx } from "@/lib/cx";
import { fr } from "@/lib/format";
import { anchors, isHelpFormReady } from "@/lib/links";
import HelpLink from "./HelpLink";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id={anchors.contact} className={styles.footer}>
      <div className={cx("container", styles.inner)}>
        <div className={styles.contact}>
          <span className={cx("kicker", styles.kicker)}>{contactSection.kicker}</span>
          <h2>{fr(contactSection.title)}</h2>
          <p className={styles.text}>{fr(contactSection.text)}</p>
          {isHelpFormReady ? (
            <HelpLink className="btn btn--sun">{contactSection.cta}</HelpLink>
          ) : (
            <p className={styles.fallback}>{fr(contactSection.fallback)}</p>
          )}
          {CONTACT_EMAIL ? (
            <p className={styles.email}>
              {fr(contactSection.emailLabel)} <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          ) : null}
        </div>

        <div className={styles.brand}>
          <img
            src={asset("/logo-blanc.svg")}
            alt={`${association.name} — ${association.village}`}
            width={180}
            height={137}
          />
          <p className={styles.tagline}>{association.tagline}</p>
          <p className={styles.member}>{footer.member}</p>
        </div>
      </div>

      <div className={cx("container", styles.legal)}>
        <p>
          © {year} {association.name} · {association.village}
        </p>
        <p>{footer.credits}</p>
      </div>
    </footer>
  );
}
