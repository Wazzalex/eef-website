"use client";

import { useEffect, useState, type FormEvent } from "react";
import { CONTACT_EMAIL, contactSection, seasons } from "@/content/site";
import { fr } from "@/lib/format";
import styles from "./ContactForm.module.css";

/** Liste des événements proposés dans le menu déroulant (hors moments offerts). */
const eventOptions = seasons.flatMap((s) => s.events).filter((e) => e.kind !== "gift").map((e) => e.title);

/**
 * Formulaire de contact d'un site statique : il ouvre l'application e-mail
 * du visiteur avec un message prérempli à destination de l'association.
 * Les boutons « Je veux aider » de la timeline (attribut data-event)
 * présélectionnent l'événement concerné.
 */
export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [event, setEvent] = useState("");
  const [message, setMessage] = useState("");
  const [mailto, setMailto] = useState<string | null>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const link = (e.target as HTMLElement | null)?.closest<HTMLAnchorElement>("a[data-event]");
      if (!link) return;
      const title = link.dataset.event ?? "";
      if (eventOptions.includes(title)) {
        setEvent(title);
        setMailto(null);
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const who = `${firstName} ${lastName}`.trim();
    const subject = event ? `Je veux aider — ${event}` : "Je veux aider — École en Fête";
    const lines = [
      `Bonjour,`,
      ``,
      message.trim(),
      ``,
      event ? `Événement : ${event}` : `Événement : ${contactSection.eventAny}`,
      who ? `Nom : ${who}` : "",
      email ? `E-mail : ${email}` : "",
      ``,
      who || "Un parent de l'école",
    ].filter((l, i, arr) => !(l === "" && arr[i - 1] === ""));

    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setMailto(href);
    window.location.href = href;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label className={styles.field}>
          <span>Prénom</span>
          <input
            type="text"
            name="prenom"
            autoComplete="given-name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label className={styles.field}>
          <span>Nom</span>
          <input
            type="text"
            name="nom"
            autoComplete="family-name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
      </div>

      <label className={styles.field}>
        <span>E-mail</span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          placeholder="pour qu'on puisse vous répondre"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label className={styles.field}>
        <span>{fr(contactSection.eventLabel)}</span>
        <select name="evenement" value={event} onChange={(e) => setEvent(e.target.value)}>
          <option value="">{contactSection.eventAny}</option>
          {eventOptions.map((title) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span>Votre message</span>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Ce que vous aimeriez faire, vos disponibilités, une idée…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>

      <div className={styles.actions}>
        <button type="submit" className="btn btn--sun">
          {contactSection.cta}
        </button>
        <p className={styles.hint} aria-live="polite">
          {mailto ? (
            <>
              {fr("Votre application e-mail s'est ouverte avec le message : vérifiez-le et cliquez sur « Envoyer ». Merci !")}{" "}
              <a className={styles.fallbackLink} href={mailto}>
                {fr("Rien ne s'est ouvert ? Cliquez ici.")}
              </a>
            </>
          ) : (
            fr(contactSection.hint)
          )}
        </p>
      </div>
    </form>
  );
}
