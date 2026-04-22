/**
 * Single source of truth for “which nav item is active”.
 * - `/` only matches the home item (not every path).
 * - `/about` matches `/about` and nested segments like `/about/team` if you add them later.
 */
export function isNavActive(pathname: string | null | undefined, href: string): boolean {
  const p = pathname?.replace(/\/$/, "") || "/";
  const h = href.replace(/\/$/, "") || "/";

  if (h === "/") {
    return p === "/" || p === "";
  }
  if (h === "/about") {
    return p === "/about" || p.startsWith("/about/");
  }
  if (h === "/submit-claim") {
    return p === "/submit-claim" || p.startsWith("/submit-claim/");
  }
  return p === h || p.startsWith(`${h}/`);
}
