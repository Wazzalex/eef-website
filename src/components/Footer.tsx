import { CONTACT_EMAIL, association, contactSection } from "@/content/site";
import { fr } from "@/lib/format";
import { asset } from "@/lib/assets";
import ContactForm from "./ContactForm";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.contact}>
          <span className={`kicker ${styles.kicker}`}>{contactSection.kicker}</span>
          <h2>{fr(contactSection.title)}</h2>
          <p className={styles.text}>{fr(contactSection.text)}</p>
          <ContactForm />
          <p className={styles.email}>
            Ou directement par e-mail : <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </div>

        <div className={styles.brand}>
          <img src={asset("/logo-blanc.svg")} alt="École en Fête — Les Adrets en Belledonne" width={180} height={137} />
          <p className={styles.tagline}>{association.tagline}</p>
          <p className={styles.member}>
            Chaque parent d'élève est automatiquement membre de l'association.
          </p>
        </div>
      </div>

      <div className={`container ${styles.legal}`}>
        <p>
          © {year} {association.name} · {association.village}
        </p>
        <p>Site réalisé par des parents bénévoles.</p>
      </div>
    </footer>
  );
}
