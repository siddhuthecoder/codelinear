import Image from "next/image";
import { BankingBannerWave } from "./banking-banner-wave";

const STAR_SRC = "/phones/star.svg";

function BannerStar() {
  return (
    <Image
      src={STAR_SRC}
      alt=""
      width={48}
      height={48}
      className="banking-banner-star"
      aria-hidden
    />
  );
}

function BannerSequence({
  showLeadingStar = true,
}: {
  showLeadingStar?: boolean;
}) {
  return (
    <div className="banking-banner-sequence">
      {showLeadingStar ? <BannerStar /> : null}
      <span className="banking-banner-brand banking-banner-text">CB7</span>
      <BannerStar />
      <div className="banking-banner-phrase banking-banner-text">
        Say <span className="px-1"></span>
        <BankingBannerWave />
        <span className="px-1"></span> to the new way of banking
      </div>
      <BannerStar />
      <span className="banking-banner-brand banking-banner-text">N7</span>
      <BannerStar />
    </div>
  );
}

export function BankingBannerMarquee() {
  return (
    <div className="banking-banner-marquee">
      <p className="sr-only">
        N7 and CB7 — Say hello to the new way of banking
      </p>
      <div className="banking-banner-track" aria-hidden>
        {Array.from({ length: 4 }, (_, index) => (
          <BannerSequence key={index} showLeadingStar={index === 0} />
        ))}
      </div>
    </div>
  );
}
