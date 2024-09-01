import {
  Categories,
  ContributionCard,
  Faq,
  FaqAcc,
  News,
  OurWorkPicCollage,
} from "components/Index";
import PageHeader from "components/PageHeader";

export default function page() {
  return (
    <section>
      <div>
        <PageHeader text="Our Causes" color="#edf6f9" />
        <Categories />
      </div>
      <OurWorkPicCollage />

      <News />
      <ContributionCard />

      <div>
        <FaqAcc />
        <Faq />
      </div>
    </section>
  );
}
