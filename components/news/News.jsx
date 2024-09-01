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
import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react";
import classes from "./news.module.css";

const mockdata = [
  {
    title: "Empowering Communities",
    description:
      "Our recent donations have empowered communities, providing essential resources and support where it's needed the most.",
    icon: IconGauge,
  },
  {
    title: "Impactful Outreach",
    description:
      "The privacy-focused nature of our welfare initiatives ensures that every contribution makes a meaningful impact on the lives of those in need.",
    icon: IconUser,
  },
  {
    title: "Transparency and Trust",
    description:
      "We believe in a transparent process. No third parties are involved, ensuring that every donation reaches its intended recipients.",
    icon: IconCookie,
  },
];

export default function News() {
  const features = mockdata.map((feature, index) => (
    <Card
      key={feature.title + index}
      shadow="md"
      radius="md"
      className={`${classes.card} ${
        index % 2 === 0 ? classes.evenCard : classes.oddCard
      }`}
      padding="xl"
    >
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={"#a8dadc"}
      />
      <Text
        fz="lg"
        c={"#f1faee"}
        fw={500}
        className={classes.cardTitle}
        mt="md"
      >
        {feature.title}
      </Text>
      <Text fz="sm" c="#000" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg" color="teal">
          Latest News
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Strengthening our Impact
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Discover the latest achievements and milestones in our ongoing mission
        to make a positive difference in the lives of the underprivileged.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
