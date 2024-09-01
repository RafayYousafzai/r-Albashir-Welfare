"use client";

import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
} from "@mantine/core";
import classes from "./About.module.css";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import GroupsIcon from "@mui/icons-material/Groups";
const mockdata = [
  {
    title: "DONATOR",
    description:
      "Become a vital part of our mission by becoming a valued donor, empowering positive change through your generosity",
    icon: AccountBalanceIcon,
  },
  {
    title: "FUNRISING",
    description:
      "Embark on a journey of joyful giving and enthusiastic fundraising with Funrising, where every contribution becomes a celebration of making a meaningful impact",
    icon: LocalAtmIcon,
  },
  {
    title: "VOLUNTEER",
    description:
      "Embark on a fulfilling journey of compassion and community engagement by joining our volunteer team, where your time and skills make a meaningful difference.",
    icon: GroupsIcon,
  },
];

export default function About() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.blue[6]}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container className={classes.card} size="1500" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        HOW CAN YOU HELP US?
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Join hands with us in creating impact by donating, volunteering, or
        spreading awareness to support our noble cause.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
