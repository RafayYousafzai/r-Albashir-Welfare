"uae client"
// Import necessary libraries
import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Badge,
  List,
  ListItem,
} from "@chakra-ui/react";

// Define the WhereWeWork component
const WhereWeWork = () => {
  const countries = ["Pakistan"];
  const emergencies = ["Pakistan emergency"];

  const getRandomColor = () => {
    const colors = [
      "teal",
      "green",
      "blue",
      "cyan",
      "purple",
      "pink",
      "orange",
      "red",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <Box p={8} m={"5%"} bg="gray.100" borderRadius="lg" boxShadow="md">
      <Heading mb={4} fontSize="2xl" fontWeight="bold" color="teal.600">
        Building a Brighter Pakistan: With and Without Your Donations
      </Heading>

      <Text fontSize="lg" lineHeight="tall" color="gray.700">
        Pakistan, a land of vibrant colors, rich history, and resilient people, faces significant challenges. Poverty, natural disasters, and social inequalities leave many communities struggling to meet their basic needs and build a brighter future. Here at [Your Organization Name], we are unwavering in our dedication to making a difference, hand in hand with the Pakistani people.
      </Text>

      <Stack mt={8} spacing={4}>
        {/* Donations Section */}
        <Box>
          <Text fontSize="lg" fontWeight="bold" color="teal.600">
            With Your Generous Donations:
          </Text>
          <List style={{ display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
            <ListItem>
              <Badge colorScheme={getRandomColor()}>Beacons of Hope</Badge>: We are on the ground first, delivering emergency relief during crises such as floods and earthquakes. Your contributions fuel our rapid response, ensuring no one is left behind.
            </ListItem>
            <ListItem>
              <Badge colorScheme={getRandomColor()}>Empowerment and Reconstruction</Badge>: We empower communities to rebuild stronger than before, providing tools and training for sustainable reconstruction.
            </ListItem>
            <ListItem>
              <Badge colorScheme={getRandomColor()}>Investment in Education</Badge>: We believe education is the bedrock of a thriving society, building and refurbishing schools, training teachers, and providing scholarships to unlock potential.
            </ListItem>
            <ListItem>
              <Badge colorScheme={getRandomColor()}>Nurturing Healthcare</Badge>: We equip clinics and hospitals, train healthcare professionals, and raise awareness about hygiene and sanitation for healthier communities.
            </ListItem>
            <ListItem>
              <Badge colorScheme={getRandomColor()}>Championing Womens Rights</Badge>: We empower women through economic opportunities, vocational training, and awareness campaigns, driving social progress.
            </ListItem>
          </List>
        </Box>

        {/* Without Donations Section */}
        <Box>
          <Text fontSize="lg" fontWeight="bold" color="teal.600">
            Even Without Your Financial Support, We Continue to Strive for a Better Pakistan:
          </Text>
          <List style={{ display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
            <ListItem>
              <Badge colorScheme={getRandomColor()}>Advocating for Change</Badge>: We raise awareness about pressing issues, engage with policymakers, and hold powerful stakeholders accountable.
            </ListItem>
            <ListItem>
              <Badge colorScheme={getRandomColor()}>Building Partnerships</Badge>: We collaborate with local communities, NGOs, and government agencies, leveraging combined strengths to maximize impact.
            </ListItem>
            <ListItem>
              <Badge colorScheme={getRandomColor()}>Sharing Knowledge and Expertise</Badge>: We conduct research, analyze data, and disseminate best practices, informing strategies for sustainable development.
            </ListItem>
          </List>
        </Box>
      </Stack>

      <Text mt={8} fontSize="lg" lineHeight="tall" color="gray.700">
        Making a difference in Pakistan is a collective effort. With your donations, you become a vital partner in our mission. But even without a financial contribution, your voice, your awareness, and your belief in a brighter Pakistan carry immense power. Together, we can build a future where every Pakistani has the opportunity to thrive, contribute, and dream of a better tomorrow.
      </Text>

      <Text mt={4} fontSize="lg" lineHeight="tall" color="gray.700">
        Join us. Lets make Pakistan a beacon of hope, resilience, and shared prosperity. Remember, no act of kindness is too small. Every contribution, every voice, every partnership makes a difference.
      </Text>
    </Box>
  );
};

export default WhereWeWork;
