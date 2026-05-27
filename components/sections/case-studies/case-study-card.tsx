import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { CaseStudyItem } from "./data";
import { caseStudyImage } from "./data";

type CaseStudyCardProps = {
  item: CaseStudyItem;
  isActive?: boolean;
};

export function CaseStudyCard({ item, isActive = true }: CaseStudyCardProps) {
  return (
    <article
      className={cn("case-study-card", !isActive && "case-study-card-inactive")}
      aria-hidden={!isActive}
      tabIndex={isActive ? 0 : -1}
    >
      <div className="case-study-card-media">
        <Image
          src={caseStudyImage}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover"
        />
      </div>

      <div className="case-study-card-body">
        <p className="case-study-tag">{item.category}</p>
        <h3 className="case-study-title">{item.title}</h3>

        <div className="case-study-logo-wrap">
          <Image
            src={item.logo.src}
            alt={item.logo.alt}
            width={item.logo.width}
            height={19}
            className="h-[30px] w-auto"
          />
        </div>

        <Link
          href={item.href}
          className="case-study-cta"
          tabIndex={isActive ? 0 : -1}
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
