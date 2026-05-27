import Image from "next/image";
import { MotionFooter } from "@/components/motion";
import { footerCopyright, footerLinkColumns, footerLocations } from "./data";
import { FooterLinkRow } from "./footer-link";

function FooterColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-archivo text-base font-medium leading-tight text-foreground">
      {children}
    </h3>
  );
}

export function FooterSection() {
  return (
    <MotionFooter
      className="footer-section surface-dark relative overflow-x-clip section-padding-lg"
      style={{ paddingBottom: "20px" }}
      aria-label="Site footer"
    >
      <div className="footer-glow" aria-hidden />

      <div className="page-container relative z-10">
        <div className="footer-layout">
          <div className="footer-logo-wrap">
            <Image
              src="/icons/footer_logo.svg"
              alt="N7"
              width={440}
              height={233}
              className="footer-logo h-auto w-full"
              priority={false}
            />
          </div>

          <div className="footer-content">
            <div className="footer-locations">
              {footerLocations.map((location) => (
                <div key={location.id}>
                  <FooterColumnHeading>{location.title}</FooterColumnHeading>
                  <p className="mt-3 text-sm leading-relaxed font-normal text-text-muted">
                    {location.address}
                  </p>
                </div>
              ))}
            </div>

            <div className="footer-links">
              {footerLinkColumns.map((column) => (
                <div key={column.title}>
                  <FooterColumnHeading>{column.title}</FooterColumnHeading>
                  <ul className="mt-4 flex flex-col gap-1 max-w-[165px]">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <FooterLinkRow label={link.label} href={link.href} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="footer-copyright text-xs leading-relaxed font-normal text-text-muted">
              {footerCopyright}
            </p>
          </div>
        </div>
      </div>
    </MotionFooter>
  );
}
