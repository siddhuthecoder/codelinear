"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { CaseStudyCard } from "./case-study-card";
import { caseStudies } from "./data";

function getSlideOffset(index: number, activeIndex: number, total: number) {
  let offset = index - activeIndex;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

const caseStudyNavIcon = "/icons/case_study_right.svg";

export function CaseStudiesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index: number) => {
    setActiveIndex((index + caseStudies.length) % caseStudies.length);
  };

  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  return (
    <div className="case-studies-carousel">
      <div
        className="case-studies-stage"
        aria-roledescription="carousel"
        aria-label="Case studies"
      >
        {caseStudies.map((item, index) => {
          const offset = getSlideOffset(index, activeIndex, caseStudies.length);
          const isActive = offset === 0;

          return (
            <div
              key={item.id}
              className={cn(
                "case-studies-slide",
                offset === 0 && "case-studies-slide-active",
                offset === -1 && "case-studies-slide-behind-left",
                offset === 1 && "case-studies-slide-behind-right",
                Math.abs(offset) > 1 && "case-studies-slide-hidden",
              )}
              aria-hidden={!isActive}
            >
              <CaseStudyCard item={item} isActive={isActive} />
            </div>
          );
        })}
      </div>

      <div className="page-container case-studies-footer" style={{ maxWidth: '1000px' }}>
        <div className="case-studies-controls">
          <button
            type="button"
            className="case-studies-nav-btn"
            onClick={goPrev}
            aria-label="Previous case study"
          >
            <Image
              src={caseStudyNavIcon}
              alt=""
              width={21}
              height={23}
              className="case-studies-nav-icon -scale-x-100"
              aria-hidden
            />
          </button>

          <div
            className="case-studies-pagination"
            role="tablist"
            aria-label="Case study slides"
          >
            {caseStudies.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Go to case study ${index + 1}`}
                  className={cn(
                    "case-studies-dot",
                    isActive && "case-studies-dot-active",
                  )}
                  onClick={() => goTo(index)}
                />
              );
            })} 
          </div>

          <button
            type="button"
            className="case-studies-nav-btn"
            onClick={goNext}
            aria-label="Next case study"
          >
            <Image
              src={caseStudyNavIcon}
              alt=""
              width={21}
              height={23}
              className="case-studies-nav-icon"
              aria-hidden
            />
          </button>
        </div>

        <Link href="#case-studies" className="case-studies-view-all">
          <span>
            <span className="case-studies-view-all-underline">View</span> All
          </span>
          <Image
            src="/icons/arrow.svg"
            alt=""
            width={14}
            height={15}
            aria-hidden
          />
        </Link>
      </div>
    </div>
  );
}
