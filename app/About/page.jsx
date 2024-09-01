import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import {
  About,
  ContributionCard,
  OurWork,
  WhereWeWork,
  WhoAreWe,
} from "components/Index";

export default function Page() {
  return (
    <>
      <About /> <br />
      <br />
      <Box>
        <Tabs
          p={{ base: "0", sm: "0", md: "5%", lg: "5%" }}
          isFitted
          variant="enclosed"
          colorScheme="teal"
        >
          <h1 style={{ marginLeft: "2rem" }}>More About Us</h1>

          <TabList m={"6%"} mb="1em">
            <Tab>Who Are We</Tab>
            <Tab>Where We Work</Tab>
            <Tab>Our Work</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <WhoAreWe />
            </TabPanel>
            <TabPanel>
              <WhereWeWork />
            </TabPanel>
            <TabPanel>
              <OurWork />
            </TabPanel>
            {/* Add more TabPanels corresponding to the tabs above */}
          </TabPanels>
        </Tabs>
      </Box>
      <ContributionCard />
    </>
  );
}
