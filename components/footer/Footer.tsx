"use client"

import { Text, Container, ActionIcon, Group, rem } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandFacebook,
} from "@tabler/icons-react";
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";


const data = [
  {
    title: "About",
    links: [
      { link: "/About", label: "About" },
      { link: "/OurWork", label: "Our Work" },
      { link: "/WhoAreWe", label: "Who Are We" },
    ],
  },
  {
    title: "Donate",
    links: [
      { link: "/Campaigns", label: "Campaigns" },
      { link: "/Zakat", label: "Zakat" },
      { link: "/founders", label: "Founders" },
    ],
  },
  {
    title: "More",
    links: [
      { link: "/Contact", label: "Contact" },
      { link: "/WhereWeWork", label: "Where We Work" },
      { link: "/waysToDonate", label: "Ways To Donate" },
    ],
  },
];

export default function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Link
        key={index}
        className={classes.link}
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Link>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          {/* <MantineLogo size={30} /> */}
          <Image src="/logo.png" alt="logo" width={170} height={170} />
          <Text size="xs" c="dimmed" className={classes.description}>
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2020 albashirwelfare.org All rights reserved.
        </Text>

        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <Link href={"https://www.facebook.com/albashirwelfare"}>
              <IconBrandFacebook
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </Link>
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <Link href={"https://www.instagram.com/albashirwelfare/?hl=en"}>
              <IconBrandInstagram
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </Link>
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
