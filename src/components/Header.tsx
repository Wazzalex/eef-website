"use client";

import { useState } from "react";
import { association, nav } from "@/content/site";
import { asset } from "@/lib/assets";
import { cx } from "@/lib/cx";
import { anchorHref } from "@/lib/links";
import HelpLink from "./HelpLink";
import styles from "./Header.module.css";

const MENU_ID = "menu-mobile";
const navItems = Object.entries(nav) as Array<[keyof typeof nav, string]>;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={cx("container", styles.inner)}>
        <a href={anchorHref("top")} className={styles.brand} aria-label={`${association.name} — retour en haut de page`}>
          <img src={asset("/logo.svg")} alt="" width={120} height={91} fetchPriority="high" />
        </a>

        <nav id={MENU_ID} className={cx(styles.nav, open && styles.navOpen)} aria-label="Navigation principale">
          <ul>
            {navItems.map(([anchor, label]) => (
              <li key={anchor}>
                <a href={anchorHref(anchor)} onClick={() => setOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <HelpLink className="btn btn--sun btn--small" />
          <button
            type="button"
            className={styles.burger}
            aria-expanded={open}
            aria-controls={MENU_ID}
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
