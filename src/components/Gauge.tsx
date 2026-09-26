"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Gauge.module.css";

interface GaugeProps {
  /** Pourcentage de remplissage, entre 0 et 100. */
  percent: number;
  /** Texte lu par les lecteurs d'écran. */
  label: string;
  /** "sun" (accent) ou "blue" (action). */
  tone?: "sun" | "blue";
  size?: "sm" | "lg";
}

/** Barre de progression qui se remplit quand elle entre à l'écran. */
export default function Gauge({ percent, label, tone = "blue", size = "sm" }: GaugeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const value = Math.max(0, Math.min(100, Math.round(percent)));

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.track} ${styles[size]} ${styles[tone]}`}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      aria-label={label}
    >
      <div className={styles.fill} style={{ width: visible ? `${value}%` : "0%" }} />
    </div>
  );
}
