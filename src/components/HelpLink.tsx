import type { AnchorHTMLAttributes } from "react";
import { FORM_URL, HELP_CTA } from "@/content/site";
import { anchorHref, isHelpFormReady } from "@/lib/links";

type HelpLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target" | "rel">;

/**
 * Lien « Je veux aider » : ouvre le Google Form dans un nouvel onglet,
 * ou renvoie vers la section contact tant que le formulaire n'est pas branché.
 */
export default function HelpLink({ children = HELP_CTA, ...props }: HelpLinkProps) {
  return isHelpFormReady ? (
    <a {...props} href={FORM_URL} target="_blank" rel="noopener">
      {children}
    </a>
  ) : (
    <a {...props} href={anchorHref("contact")}>
      {children}
    </a>
  );
}
