"use client";

import { accounts } from "static";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { AllBankDetails, ContributionForm, CustomHero } from "components/Index";

export default function Page() {
  const handleContribute = (data) => {
    console.log(data);
  };

  return (
    <>
      <CustomHero
        imgc={
          "https://img.freepik.com/free-vector/flat-ramadan-charity-background-with-muslim-people-giving-money-food-hungry-homeless-illustration_1284-61988.jpg?w=1060&t=st=1703331433~exp=1703332033~hmac=8ea704eab3a7cd56ec2505e622550905cc5b47de62e41e87ddac2cae7f0a6a0f"
        }
      />
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
          Pay Your Zakat
        </Text>
        <Box p={8} bg="white" borderRadius="xl">
          <ContributionForm onContribute={handleContribute} dVal={"Zakat"}/>
          {/* Add a large text about zakat here */}
          <Text mt={4} textAlign="justify" lineHeight="1.6">
            <strong>Zakat:</strong> A Pillar of Compassion
            <br />
            In Islam, zakat is a sacred practice rooted in the principles of
            charity and compassion. It is one of the Five Pillars of Islam,
            representing an obligation for Muslims to support those in need.
            Zakat is not just a financial contribution; it is a way to purify
            ones wealth and foster a sense of community.
            <br />
            <br />
            When you contribute zakat, you are participating in a timeless act
            of social justice. This charitable giving not only addresses
            economic disparities but also promotes solidarity among
            believers. By fulfilling your zakat obligation, you play a crucial
            role in building a more equitable and caring society.
          </Text>
        </Box>
        <Flex mt={8} wrap={"wrap"} justify="space-between">
          <Button colorScheme="blue" size="lg" w={300}>
            Pay with PayPal
          </Button>
          <Button colorScheme="green" size="lg" w={300}>
            Pay with Stripe
          </Button>
        </Flex>
      </Box>
      <AllBankDetails accounts={accounts} />
    </>
  );
}
