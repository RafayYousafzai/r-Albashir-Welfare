"use client";

import React from "react";
import { Container, Title, Accordion } from "@mantine/core";
import classes from "./FaqAcc.module.css";

const faqContent = {
  subscribeNewsletter:
    "You can subscribe to our monthly newsletter by navigating to the 'Newsletter' section in your account settings.",
  secureCreditCard:
    "Yes, we take the security of your credit card information seriously. All credit card data is stored securely and encrypted.",
  paymentSystems:
    "We work with various payment systems, including credit cards, PayPal, and bank transfers. You can choose the most convenient option during checkout.",
};

export default function FaqAcc() {
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
        Frequently Asked Questions
      </Title>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>
            How can I subscribe to the monthly newsletter?
          </Accordion.Control>
          <Accordion.Panel>{faqContent.subscribeNewsletter}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control>
            Do you store credit card information securely?
          </Accordion.Control>
          <Accordion.Panel>{faqContent.secureCreditCard}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="payment">
          <Accordion.Control>
            What payment systems do you work with?
          </Accordion.Control>
          <Accordion.Panel>{faqContent.paymentSystems}</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
