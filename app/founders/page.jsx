"use client";

import { Skeleton } from "@chakra-ui/react";

import { getCollection } from "../api/firebase/functions/get";
import { useEffect, useState } from "react";
import PageHeader from "components/PageHeader";
import {
  AuthorCards,
  ContributionCard,
  Faq,
  FaqAcc,
  News,
  OurWorkPicCollage,
} from "components/Index";

export default function Page() {
  const [founders, setFounders] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const foundersData = await getCollection("founders");
        setFounders(foundersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the function to fetch data
  }, []);
  return (
    <section>
      <div>
        <PageHeader text="Our Founders" color="#edf6f9" />
        {founders ? (
          <AuthorCards data={founders} />
        ) : (
          <Skeleton height="10rem" width="100%" />
        )}
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
