// Import necessary libraries
import React from "react";
import { Box, Heading, Text, Image, Stack } from "@chakra-ui/react";

// Define the WhoAreWe component
const WhoAreWe = () => {
  return (
    <Box p={"5%"} m={"5%"} bg="gray.100" borderRadius="lg" boxShadow="md">
      <Heading mb={4} fontSize="2xl" fontWeight="bold" color="teal.600">
        Who We Are
      </Heading>

      {/* About Us Section */}
      <Box mb={8}>
        <Text fontSize="lg" lineHeight="tall" color="gray.700">
          The World Food Programme is the world’s largest humanitarian
          organization saving lives in emergencies and using food assistance to
          build a pathway to peace, stability, and prosperity, for people
          recovering from conflict, disasters, and the impact of climate change.
        </Text>
      </Box>

      {/* In a world of plenty Section */}
      <Box mb={8}>
        <Text fontSize="xl" fontWeight="bold" color="teal.600">
          About Us
        </Text>
        <Text fontSize="lg" lineHeight="tall" color="gray.700">
          In a world of plenty, where enough food is produced to feed everyone
          on the planet, hunger should be a thing of the past. However,
          conflict, climate change, disasters, inequality, and – most recently –
          the COVID-19 pandemic mean one in ten people globally are still going
          to bed hungry and famine looms for millions.
        </Text>
      </Box>

      {/* Powered by the passion... Section */}
      <Box mb={8}>
        <Text fontSize="lg" lineHeight="tall" color="gray.700">
          Powered by the passion, dedication, and professionalism of over 23,000
          staff worldwide, the World Food Programme (WFP) has a presence in over
          120 countries and territories to bring life-saving food to people
          displaced by conflict and made destitute by disasters, and help
          individuals and communities find life-changing solutions to the
          multiple challenges they face in building better futures.
        </Text>
      </Box>

      {/* We work to enhance... Section */}
      <Box mb={8}>
        <Text fontSize="lg" lineHeight="tall" color="gray.700">
          We work to enhance nutrition in women and children, support
          smallholder farmers in improving productivity and reducing losses,
          help countries and communities prepare for and cope with
          climate-related shocks, and boost human capital through school feeding
          programs.
        </Text>
      </Box>

      {/* We make the difference... Section */}
      <Box mb={8}>
        <Text fontSize="lg" lineHeight="tall" color="gray.700">
          For millions of people worldwide, WFP assistance is what makes the
          difference between life and death. Our timely intervention at times of
          heightened crisis has helped pull people back from the brink of
          starvation. Our work to build resilience, adapt to a changing climate,
          promote good nutrition, and improve food systems is helping lay the
          foundations for a more prosperous future for millions.
        </Text>
      </Box>

      {/* Smallholder farmer image Section */}
      <Image
        src="/children-of-war.jpg"
        alt="Smallholder Farmer"
        mb={8}
        borderRadius="md"
        boxShadow="lg"
      />

      {/* Mission, Corporate strategy, Governance and leadership, History Section */}
      <Stack spacing={4} mb={8}>
        <Text fontSize="xl" fontWeight="bold" color="teal.600">
          Mission
        </Text>
        <Text>Corporate strategy</Text>
        <Text>Governance and leadership</Text>
        <Text>History</Text>
      </Stack>

      {/* We are completely reliant... Section */}
      <Box mb={8}>
        <Text fontSize="lg" lineHeight="tall" color="gray.700">
          Feeding millions of the world’s hungriest people and helping millions
          more cope with the effects of conflict, climate change, and entrenched
          poverty requires billions of dollars every year – our funding
          requirement for 2023 stands at US$25.1 billion to reach 171.5 million
          people.
        </Text>
      </Box>

      {/* Discover how we are funded Section */}
      <Text fontSize="lg" fontWeight="bold" color="teal.600">
        Discover how we are funded
      </Text>

      {/* We are working in partnership with others Section */}
      <Stack spacing={4} mb={8}>
        <Text fontSize="xl" fontWeight="bold" color="teal.600">
          We are working in partnership with others
        </Text>
        <Text lineHeight="tall" color="gray.700">
          Agenda 2030 clearly states that sustainable development will only be
          possible through effective partnerships. True to its spirit, WFP works
          with governments, other UN agencies, NGOs, private companies, and
          others to mobilize resources, find innovative solutions, and reach
          vulnerable communities with the assistance they need, when they need
          it.
        </Text>
      </Stack>

      {/* Staff from different humanitarian agencies image Section */}
      <Image
        src="/align-fingers.jpg"
        alt="Humanitarian Agencies Staff"
        mb={8}
        borderRadius="md"
        boxShadow="lg"
      />

      {/* Governments, NGOs, Private sector, UN agencies, Clusters, Academia, Goodwill ambassadors image Section */}
      <Stack spacing={4} mb={8}>
        <Text fontSize="xl" fontWeight="bold" color="teal.600">
          Governments
        </Text>
        <Text>Non-governmental organizations</Text>
        <Text>Private sector</Text>
        <Text>UN agencies and international institutions</Text>
        <Text>Clusters and multistakeholder partnerships</Text>
        <Text>Academia and think tanks</Text>
        <Text>Goodwill ambassadors, advocates, and high-level supporters</Text>
      </Stack>

      {/* We are committed to accountability and transparency Section */}
      <Box mb={8}>
        <Text fontSize="lg" lineHeight="tall" color="gray.700">
          WFP holds itself and its staff to the highest standards of integrity
          and behavior. We are committed to full transparency and accountability
          to the people we serve and to the donors who generously fund our
          operations.
        </Text>
      </Box>

      {/* Staff from ECHO and WFP image Section */}
      <Image
        src="/daily-life-activities.jpg"
        alt="ECHO and WFP Staff"
        mb={8}
        borderRadius="md"
        boxShadow="lg"
      />
    </Box>
  );
};

export default WhoAreWe;
