import React from "react";
import { Card, Text, Group, useMantineTheme, Image } from "@mantine/core";
import classes from "./authorCards.module.css";
import { Box } from "@chakra-ui/react";

export default function AuthorCards({ data }) {
  console.log(data);

  return (
    <section
      size="lg"
      style={{
        margin: "3rem 0",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "row-reverse", // Set flexDirection to "row-reverse"
        gap: 20,
      }}
    >
      {data &&
        data.map((authorData, index) => {
          const { img, authorName, bio } = authorData;
          console.log(img.im);
          return (
            <Box
              key={index}
              borderRadius="md"
            >
              <Card
                w={310}
                p="lg"
                shadow="lg"
                className={classes.card}
                radius="md"
                component="a"
                href={`/founders/${authorData.id}`}
              >
                <div
                  className={classes.image}
                  style={{
                    backgroundImage: `url(${img[0].im})`,
                  }}
                />

                <div className={classes.overlay} />

                <div className={classes.content}>
                  <div>
                    <Text size="lg" className={classes.title} fw={500}>
                      {authorName}
                    </Text>

                    <Group justify="space-between" gap="xs">
                      <Text size="sm" className={classes.author}>
                        {bio && bio.length > 140
                          ? `${bio.slice(0, 140)}...`
                          : bio}
                      </Text>
                    </Group>
                  </div>
                </div>
              </Card>
            </Box>
          );
        })}
    </section>
  );
}
