"use client";

import { useState } from "react";
import { FORM_URL, hero } from "@/content/site";
import { helpLink } from "@/lib/format";
import { asset } from "@/lib/assets";
import styles from "./Header.module.css";

const links = [
  { href: "#association", label: "L'association" },
  { href: "#projets", label: "Les projets" },
  { href: "#agenda", label: "L'année" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const help = helpLink(FORM_URL);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand} aria-label="École en Fête — retour en haut de page">
          <img src={asset("/logo.svg")} alt="" width={120} height={91} fetchPriority="high" />
        </a>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`} aria-label="Navigation principale">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a
            className="btn btn--sun btn--small"
            href={help.href}
            target={help.external ? "_blank" : undefined}
            rel={help.external ? "noopener" : undefined}
          >
            {hero.primaryCta}
          </a>
          <button
            type="button"
            className={styles.burger}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
