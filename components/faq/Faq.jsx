import { ContactIconsList } from "./ContactIcons";
import { Title, Text, Container } from "@mantine/core";
import classes from "./Faq.module.css";

export default function Faq() {
  return (
    <Container className={classes.wrapper} size="lg">
      <div className={classes.header} style={{ margin: "2rem 0" }}>
        <div>
          <Title className={classes.title}>Contact Us</Title>
          <Title className={classes.titleOverlay} role="presentation">
            CONTACT US
          </Title>
        </div>

        <div className={classes.contact}>
          <Text size="xl" fw={500} className={classes.contactTitle}>
            Contact us
          </Text>

          <ContactIconsList />
        </div>
      </div>
    </Container>
  );
}
