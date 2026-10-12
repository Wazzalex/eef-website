"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./StackedBar.module.css";

export interface Segment {
  label: string;
  amount: number;
  color: string;
}

/** Barre empilée (répartition d'un total) qui se déploie quand elle entre à l'écran. */
export default function StackedBar({ segments, label }: { segments: Segment[]; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const total = segments.reduce((sum, s) => sum + s.amount, 0);

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
    <div ref={ref} className={styles.bar} role="img" aria-label={label}>
      {segments.map((s, i) => (
        <div
          key={s.label}
          className={styles.segment}
          style={{
            width: visible ? `${(s.amount / total) * 100}%` : "0%",
            background: s.color,
            transitionDelay: `${i * 120}ms`,
          }}
          title={s.label}
        />
      ))}
    </div>
  );
}
