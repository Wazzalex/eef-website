import { cx } from "@/lib/cx";
import Icon, { type IconName } from "./illustrations/Icon";
import styles from "./IconBadge.module.css";

interface IconBadgeProps {
  name: IconName;
  /** "md" : cartes projets · "lg" : cartes de l'association. */
  size?: "md" | "lg";
}

/** Pastille aux angles arrondis contenant une icône. */
export default function IconBadge({ name, size = "md" }: IconBadgeProps) {
  return (
    <span className={cx(styles.badge, styles[size])}>
      <Icon name={name} />
    </span>
  );
}
