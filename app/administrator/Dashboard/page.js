"use client";

// Import necessary components from Chakra UI
import { Box, Text, IconButton, Flex } from "@chakra-ui/react";
import { BarChart, People } from "@mui/icons-material";
import { StatsGrid } from "components/Index";
import PasswordInput from "components/onPasswordSubmit";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const [passwordVerified, setPasswordVerified] = useState(false);

  const redirectToCampaignManagement = () => {
    router.push("/administrator/CampaignManagement");
  };

  const redirectToFounderManagement = () => {
    router.push("/administrator/FounderManagement");
  };

  return (
    <>
      {!passwordVerified ? (
        // Password input component
        <PasswordInput onSuccess={() => setPasswordVerified(true)} />
      ) : (
        <>
            <StatsGrid />
          {/* Dashboard content */}
          <Box p={4}>
            {/* Dashboard Title */}
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Dashboard
            </Text>

            {/* StatsGrid component */}

            {/* Action buttons in big cards */}
            <Flex mt={6} flexWrap={"wrap"} gap={5}>
              {/* Campaign Management card */}
              <Box
                bg="blue.100"
                p={8}
                borderRadius="md"
                flex="1"
                mr={4}
                onClick={redirectToCampaignManagement}
                _hover={{ cursor: "pointer", bg: "blue.200" }}
              >
                <IconButton
                  colorScheme="blue"
                  aria-label="Campaign Management"
                  icon={<BarChart />}
                  fontSize="2xl"
                />
                <Text mt={2} fontWeight="bold">
                  Campaign Management
                </Text>
                <Text mt={1} fontSize="sm">
                  Manage your campaigns here.
                </Text>
              </Box>

              {/* Founder Management card */}
              <Box
                bg="green.100"
                p={8}
                borderRadius="md"
                flex="1"
                onClick={redirectToFounderManagement}
                _hover={{ cursor: "pointer", bg: "green.200" }}
              >
                <IconButton
                  colorScheme="green"
                  aria-label="Founder Management"
                  icon={<People />}
                  fontSize="2xl"
                />
                <Text mt={2} fontWeight="bold">
                  Founder Management
                </Text>
                <Text mt={1} fontSize="sm">
                  Manage founders and stakeholders.
                </Text>
              </Box>
            </Flex>
          </Box>
        </>
      )}
    </>
  );
}
