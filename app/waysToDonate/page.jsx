import {
  AllBankDetails,
  ContributionCard,
  Faq,
  FaqAcc,
  News,
  OurWorkPicCollage,
  WaysToDonate,
} from "components/Index";
import { accounts } from "static";

export default function page() {
  return (
    <div>
      <WaysToDonate />
      <AllBankDetails accounts={accounts} />
      <OurWorkPicCollage />
      <ContributionCard />

      <News />
      <FaqAcc />
      <ContributionCard />
      <Faq />
    </div>
  );
}
