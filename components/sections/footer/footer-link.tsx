import Image from "next/image";
import Link from "next/link";

type FooterLinkProps = {
  label: string;
  href: string;
};

export function FooterLinkRow({ label, href }: FooterLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      className="footer-link group flex items-center justify-between gap-4 py-1"
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className="text-sm leading-snug text-text-secondary transition-colors group-hover:text-foreground">
        {label}
      </span>
      <Image
        src="/icons/arrow.svg"
        alt=""
        width={14}
        height={15}
        className="shrink-0 opacity-90 transition-opacity group-hover:opacity-100"
        aria-hidden
      />
    </Link>
  );
}
