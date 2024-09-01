"use client";

import { Title, Text, Container, Overlay } from "@mantine/core";
import classes from "./Hero.module.css";

export default function CustomHero({ imgc }) {
  const img =
    "https://images.unsplash.com/photo-1571053748382-141b7de59b88?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div
      className={classes.wrapperC}
      style={{ padding: "200px 0" }}
    >
      <Overlay color="#000" opacity={0} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          من نفس عن مسلم كربة من كرب الدنيا نفس الله عنه كربة من كرب يوم
          القيامة
        </Title>

        <Container size={700}>
          <Text size="lg" className={classes.description}>
            Whoever relieves a Muslim of any worldly hardship, Allah will
            relieve them of a hardship on the Day of Judgement.
          </Text>
        </Container>
      </div>
    </div>
  );
}
