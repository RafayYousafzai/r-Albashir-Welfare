"use client";

import React from "react";
import {
  SimpleGrid,
  Container,
  Stack,
  useMantineTheme,
  px,
  Title,
} from "@mantine/core";
import { Image, Text } from "@chakra-ui/react";

const BASE_HEIGHT = 360;

export default function OurWorkPicCollage() {
  const theme = useMantineTheme();

  return (
    <Container
      size="lg"
      my="md"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Title order={2} mt="sm" style={{ margin: "auto" }}>
        Real Faces, Real Impact
      </Title>
      <Text py={10} align="center" mt="sm">
        Explore the smiles and stories of the individuals whose lives have been
        touched by your generous donations.
      </Text>
      <SimpleGrid cols={{ base: 1, xs: 4 }}>
        <Image
          src="https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/homepage/%20(1).jpg"
          alt="Work Image 1"
          style={{
            width: "100%",
            objectFit: "cover",
            height: BASE_HEIGHT,
            borderRadius: "1rem",
          }}
        />
        <Stack>
          <Image
            src="https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/homepage/%20(2).jpg"
            alt="Work Image 2"
            style={{
              width: "100%",
              borderRadius: "1rem",
              objectFit: "cover",
              height: BASE_HEIGHT / 2 - Number(px(theme.spacing.md)),
            }}
          />
          <Image
            src="https://github.com/RafayKhan177/Raw-Images/blob/main/sda.jpg?raw=true"
            alt="Work Image 3"
            style={{
              width: "100%",
              borderRadius: "1rem",
              objectFit: "cover",
              height: BASE_HEIGHT / 2 - Number(px(theme.spacing.md)),
            }}
          />
        </Stack>
        <Stack>
          <Image
            src="https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/homepage/%20(5).jpg"
            alt="Work Image 4"
            style={{
              width: "100%",
              borderRadius: "1rem",
              objectFit: "cover",
              height: BASE_HEIGHT / 2 - Number(px(theme.spacing.md)),
            }}
          />
          <Image
            src="https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/WhatsApp%20Image%202023-12-27%20at%2016.55.59_cfe31cfd.jpg"
            alt="Work Image 5"
            style={{
              width: "100%",
              borderRadius: "1rem",
              objectFit: "cover",
              height: BASE_HEIGHT / 2 - Number(px(theme.spacing.md)),
            }}
          />
        </Stack>
        <Image
          src="https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/homepage/%20(3).jpg"
          alt="Work Image 7"
          style={{
            width: "100%",
            objectFit: "cover",
            height: BASE_HEIGHT,
            borderRadius: "1rem",
          }}
        />
      </SimpleGrid>
    </Container>
  );
}
