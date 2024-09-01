"use client";

import { useState, useEffect } from "react";
import { getCollection, getDocById } from "../../api/firebase/functions/get"; // Assuming you have an api service for fetching data
import { Box, Button, Flex, Skeleton, Spinner, Text } from "@chakra-ui/react";
import {
  AllBankDetails,
  ContributionForm,
  CustomHero,
  CampaignDetails,
  PageHeader,
  AuthorCards,
  ContributionCard,
  News,
  OurWorkPicCollage,
  Categories,
} from "components/Index";
import { usePathname } from "next/navigation";
import { accounts } from "static";
import CheckoutSessions from "app/api/CheckoutSessions";

export default function Page() {
  const [invoice, setInvoice] = useState([]);
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState(null);
  const [amount, setAmount] = useState(0);

  const pathname = usePathname();
  const id = pathname.split("/").pop();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getDocById(id, "projects");
        setInvoice(res);
        const projectsData = await getCollection("projects");
        setProjects(projectsData);
      } catch (error) {
        console.error("Something went wrong:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleContribute = async ({ pay }) => {
    try {
      const checkoutSession = await CheckoutSessions(amount.amount);
      const { sessionId, url } = checkoutSession;
      console.log(url);

      window.location.href = url;
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  const { disc, img, vid, projectName } = invoice;
  const imgHero =
    "https://img.freepik.com/free-photo/person-holding-heart-shaped-object_23-2150703734.jpg?t=st=1701007515~exp=1701011115~hmac=644cb17674f44360f7c3fd9766f1368df2cb079c1671fb2040436e23c6e357ff&w=826";

  return (
    <>
      <CustomHero imgc={imgHero} />
      {loading ? (
        <Skeleton height="10rem" width="100%" />
      ) : (
        <CampaignDetails
          projectName={projectName}
          disc={disc}
          img={img}
          vid={vid}
        />
      )}
      <Box
        my={70}
        mx="auto"
        width="90%"
        p={6}
        bg="gray.100"
        borderRadius="xl"
        boxShadow="xl"
      >
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Pay This Amount
        </Text>
        <Box p={8} bg="white" borderRadius="xl">
          {projectName && projectName ? (
            <ContributionForm
              onContribute={(e) => setAmount(e)}
              dVal={"Cause"}
            />
          ) : (
            <Skeleton height="15rem" width="100%" />
          )}
        </Box>
        <Flex mt={8} wrap={"wrap"} justify="space-between">
          <Button
            colorScheme="green"
            onClick={handleContribute}
            size="lg"
            w={300}
          >
            Donate Now
          </Button>
        </Flex>
      </Box>

      <AuthorCards />

      <div>
        <PageHeader text="More Campaigns" />
        {projects ? <Categories /> : <Skeleton height="10rem" width="100%" />}
      </div>

      <OurWorkPicCollage />
      <ContributionCard />

      <News />
      <AllBankDetails accounts={accounts} />
    </>
  );
}
