import Image from "next/image";
import Link from "next/link";
import type { InsightItem } from "./data";
import { insightImage } from "./data";

type InsightCardProps = {
  insight: InsightItem;
};

function InsightMeta({ author, date }: { author: string; date: string }) {
  return (
    <p className="insight-meta">
      {author} {date}
    </p>
  );
}

function InsightReadMore({ href }: { href: string }) {
  return (
    <Link href={href} className="insight-cta">
      Read More
    </Link>
  );
}

export function InsightCardFeatured({ insight }: InsightCardProps) {
  return (
    <article className="insight-card insight-card-featured">
      <div className="insight-card-media">
        <Image
          src={insightImage}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="insight-card-image object-cover"
        />
      </div>

      <div className="insight-card-body">
        <div className="insight-card-copy">
          <p className="insight-tag">{insight.category}</p>
          <h3 className="insight-title">{insight.title}</h3>
          <InsightMeta author={insight.author} date={insight.date} />
        </div>
        <InsightReadMore href={insight.href} />
      </div>
    </article>
  );
}

export function InsightCardCompact({ insight }: InsightCardProps) {
  return (
    <article className="insight-card insight-card-compact">
      <div className="insight-card-body">
        <div className="insight-card-copy">
          <p className="insight-tag">{insight.category}</p>
          <h3 className="insight-title">{insight.title}</h3>
          <InsightMeta author={insight.author} date={insight.date} />
        </div>
        <InsightReadMore href={insight.href} />
      </div>
    </article>
  );
}
