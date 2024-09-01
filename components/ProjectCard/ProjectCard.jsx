"use client";

import { Card, Image, Text, Group, Badge, Button } from "@mantine/core";

import classes from "./ProjectCard.module.css";
import { useRouter } from "next/navigation";
// import { projectsData } from "static";

const ProjectCard = ({ data, index }) => {
  const { projectName, disc, vid, id } = data;
  const nav = useRouter();
  console.log(vid[0].vi);
  return (
    <div style={{ width: "22rem", marginLeft: "10px" }}>
      <Card withBorder radius="md" p="md" className={classes.card}>
        <Card.Section>
          <iframe
            width="100%"
            height="250"
            src={`https://www.youtube.com/embed/${vid[0].vi}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Card.Section>

        <Card.Section className={classes.section} mt="md">
          <Group justify="apart">
            <Text fz="lg" fw={500}>
              {projectName}
            </Text>
          </Group>
          <Text fz="sm" mt="xs">
            {disc && disc.length > 40 ? `${disc.slice(0, 40)}...` : disc}
          </Text>
        </Card.Section>

        <Group mt="xs">
          <Button
            radius="md"
            onClick={() => nav.push(`/Projects/${id}`)}
            style={{ flex: 1 }}
            color="#ffb703"
          >
            Show details
          </Button>
        </Group>
      </Card>
    </div>
  );
};

export default function ProjectCards({ data }) {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <div
        style={{
          width: "90vw",
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          marginLeft: 0,
        }}
      >
        {data &&
          data.map((data, index) => (
            <ProjectCard key={index} data={data} index={index} />
          ))}
      </div>
    </section>
  );
}
