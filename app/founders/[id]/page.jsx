"use client";

import { useState, useEffect } from "react";
import { getCollection, getDocById } from "../../api/firebase/functions/get"; // Assuming you have an api service for fetching data
import { Box, Button, Flex, Skeleton, Spinner, Text } from "@chakra-ui/react";
import {
  AllBankDetails,
  AuthorCards,
  ContributionCard,
  ContributionForm,
  CustomHero,
  FounderDetails,
  News,
  OurWorkPicCollage,
  PageHeader,
} from "components/Index";
import { usePathname } from "next/navigation";
import { accounts } from "static";

export default function Page() {
  const [invoice, setInvoice] = useState([]);
  const [founders, setFounders] = useState(null);
  const [loading, setLoading] = useState(true);

  const pathname = usePathname();
  const id = pathname.split("/").pop();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getDocById(id, "founders");
        setInvoice(res);

        const foundersData = await getCollection("founders");
        setFounders(foundersData);
      } catch (error) {
        console.error("Something went wrong:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleContribute = () => {
    // Implement your contribute logic here
  };

  const { bio, img, vid, authorName } = invoice;
  const imgHero =
    "https://img.freepik.com/free-photo/person-holding-heart-shaped-object_23-2150703734.jpg?t=st=1701007515~exp=1701011115~hmac=644cb17674f44360f7c3fd9766f1368df2cb079c1671fb2040436e23c6e357ff&w=826";

  return (
    <>
      {/* <CustomHero imgc={imgHero} /> */}
      {loading ? (
        <Spinner size="xs" />
      ) : (
        <FounderDetails authorName={authorName} bio={bio} img={img} vid={vid} />
      )}
      <AuthorCards />

      <div>
        <PageHeader text="Explore More Founders" />
        {founders ? (
          <AuthorCards data={founders} />
        ) : (
          <Skeleton height="10rem" width="100%" />
        )}
      </div>

      <News />

      <ContributionCard />

      <OurWorkPicCollage />
    </>
  );
}
