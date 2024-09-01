"use client";
import { Box, Image, Text, Flex, Skeleton } from "@chakra-ui/react";
import PageHeader from "./PageHeader";

import { useEffect, useState } from "react";

export default function FounderDetails({ authorName, bio, img, vid }) {
  return (
    <>
      <PageHeader text="Work He Do" />
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexWrap: "wrap",
          gap: "20",
          margin: "3rem 0rem",
        }}
      >
        {vid.map((vid, index) => (
          <Box key={index} m={3} w={350}>
            <Box borderRadius="lg" overflow="hidden">
              <iframe
                style={{ borderRadius: "1rem" }}
                width="100%"
                height="250"
                src={`https://www.youtube.com/embed/${vid.vi}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Box>
          </Box>
        ))}
        <Box
          mt={8}
          mx={3}
          p={3}
          textAlign="left"
          style={{ borderLeft: ".5rem solid #0077b6" }}
          pl={3}
        >
          <Text fontSize="2xl" fz="lg" fw={500} fontWeight="bold" style={{}}>
            {authorName}
          </Text>
          <Text mt={4} fontSize="lg">
            {bio}
          </Text>
        </Box>

        {img.map((img, index) => (
          <Box key={index} m={3} w={350}>
            <Box borderRadius="lg" overflow="hidden">
              <Image
                alt="Images"
                style={{ borderRadius: "1rem", objectFit: "cover" }}
                width="100%"
                height="250"
                src={img.im}
              />
            </Box>
          </Box>
        ))}
      </section>
    </>
  );
}
