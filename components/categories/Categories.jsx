"use client";

import {
  Container,
  Text,
  UnstyledButton,
  Overlay,
  SimpleGrid,
} from "@mantine/core";
import classes from "./Categories.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCollection } from "app/api/firebase/functions/get";
import { Box, Button } from "@chakra-ui/react";

export default function Categories() {
  const [campaigns, setCampaigns] = useState([]);
  const router = useRouter();

  const nav = (id) => {
    router.push(`/Contribution/${id}`);
  };

  useEffect(() => {
    const getCampaigns = async () => {
      const res = await getCollection("projects");
      console.log(res);
      setCampaigns(res);
    };
    getCampaigns();
  }, []);

  const items =
    campaigns &&
    campaigns.map((item) => (
      <Box
        key={item.label}
        display="flex"
        flexDirection="column"
        borderRadius="1rem"
        boxShadow="lg" // Add box shadow
        mb={4} // Adjust margin as needed
      >
        <iframe
          style={{ borderRadius: "1rem" }}
          width="100%"
          height="202"
          src={`https://www.youtube.com/embed/${item.vid && item.vid[0].vi}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <Box p={4}>
          <Text
            size="xl"
            ta="center"
            fw={700}
            c={"#000"}
            className={classes.categoryLabel}
          >
            {item.projectName}
          </Text>
          <Text mt={2}>
            {item.disc.length > 110
              ? `${item.disc.substring(0, 110)}...`
              : item.disc}
          </Text>

          <Button
            onClick={() => nav(item.id)}
            bgColor={"#ffb703"}
            size="sm"
            mt={2}
          >
            Watch More
          </Button>
        </Box>
      </Box>
    ));

  return (
    <Container className={classes.wrapper} size="lg">
      <SimpleGrid cols={{ base: 1, sm: 3 }}>{items}</SimpleGrid>
    </Container>
  );
}
