import { digitalBankingPhoneImage } from "./data";
import { DigitalBankingPhoneStage } from "./digital-banking-phone-stage";

export function DigitalBankingPhone() {
  return (
    <DigitalBankingPhoneStage
      phoneImage={digitalBankingPhoneImage}
      phoneAlt="N7 mobile banking app on smartphone"
    />
  );
}
