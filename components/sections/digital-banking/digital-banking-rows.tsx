"use client";

import { MotionItem, MotionStagger } from "@/components/motion";
import { DigitalBankingFeatureRow } from "./digital-banking-feature-row";
import { digitalBankingFeatureRows } from "./data";

export function DigitalBankingRows() {
  return (
    <MotionStagger className="digital-banking-feature-rows-list">
      {digitalBankingFeatureRows.map((row) => (
        <MotionItem key={row.title}>
          <DigitalBankingFeatureRow {...row} />
        </MotionItem>
      ))}
    </MotionStagger>
  );
}
