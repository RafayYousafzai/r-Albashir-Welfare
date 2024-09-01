"use client";
import DoubleArrowRoundedIcon from "@mui/icons-material/DoubleArrowRounded";
import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  Popover,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconBook,
  IconChartPie3,
  IconCoin,
  IconChevronDown,
  IconChevronRight,
} from "@tabler/icons-react";
import classes from "./HeaderMenu.module.css";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconPhone,
} from "@tabler/icons-react";

import Link from "next/link";
import { useState } from "react";
import UserButton from "../userButton/UserButton";
import { Flex, Heading } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
const mockdata = [
  {
    icon: IconCoin,
    title: "Dashboard",
    description:
      "Get a comprehensive overview of your activities and performance. ",
    link: "/administrator/Dashboard",
  },
  // {
  //   icon: IconChartPie3,
  //   title: "Analytics",
  //   description: "Analyze and visualize data for informed decision-making. ",
  //   link: "/administrator/FinancialReporting",
  // },
  {
    icon: IconBook,
    title: "Projects",
    description: "Manage and organize your campaigns with this powerful tool. ",
    link: "/administrator/CampaignManagement",
  },
  {
    icon: IconNotification,
    title: "Founders",
    description: "Manage and organize your campaigns with this powerful tool. ",
    link: "/administrator/FounderManagement",
  },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/Campaigns", label: "Campaigns" },
  { href: "/Zakat", label: "Zakat" },
  { href: "/Contact", label: "Contact" },
  { href: "/founders", label: "Founders" },
  { href: "/About", label: "About" },
  { href: "/waysToDonate", label: "Ways To Donate" },
];

const about = [
  { href: "/About", label: "About" },
  { href: "/OurWork", label: "Our Work" },
  { href: "/WhereWeWork", label: "Where We Work" },
  { href: "/WhoAreWe", label: "Who Are We" },
  { href: "/waysToDonate", label: "Ways To Donate" },
];

export default function HeaderMenu() {
  const nav = useRouter();
  const [user, setUser] = useState("admin");

  const push = (url) => {
    nav.push(url);
  };

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <Link style={{ textDecoration: "none" }} href={item.link} key={item.title}>
      <UnstyledButton className={classes.subLink}>
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon
              style={{ width: rem(22), height: rem(22) }}
              color={theme.colors.blue[6]}
            />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    </Link>
  ));

  return (
    <Box style={{ overflow: "hidden", position: "relative" }}>
      <Flex
        bg="#023e8a"
        alignItems="center"
        justifyContent="space-between"
        m={0}
        p={0}
        textTransform="uppercase"
      >
        {/* Social Media Icons */}
        <Flex alignItems="center" px={1}>
          <Link
            href="https://www.facebook.com/albashirwelfare"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ textDecoration: "none" }}
          >
            <IconBrandFacebook
              size={20}
              // style={{ padding: "2px" }}
              color="#3b5998"
            />
          </Link>
          <Link
            href="https://www.instagram.com/albashirwelfare/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            ml="1rem"
            _hover={{ textDecoration: "none" }}
          >
            <IconBrandInstagram
              size={25}
              style={{ padding: "2px" }}
              color="#e4405f"
            />
          </Link>
          <Link
            href="mailto:your.email@gmail.com"
            rel="noopener noreferrer"
            ml="1rem"
            _hover={{ textDecoration: "none" }}
            style={{
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: ".8rem",
            }}
          >
            <MailRoundedIcon
              style={{
                color: "#fff",
                fontSize: "20px",
                marginRight: "1rem",
              }}
              color="#fff"
            />{" "}
            albashirwelfare@gmail.com
          </Link>
        </Flex>

        {/* Phone Icon */}
        <Flex
          alignItems="center"
          px={1}
          style={{ backgroundColor: "lightgray", height: "2rem" }}
        >
          <IconPhone
            size={22}
            style={{ padding: "2px", color: "#fff" }}
            color="#000"
          />
          {/* Uncomment the following lines if you want to add a phone link */}
          <Link
            href="tel:+92 333 5593694"
            style={{ color: "#000", fontSize: ".7rem" }}
            ml="0.5rem"
          >
            +92 333 5593694
          </Link>
        </Flex>
      </Flex>
      <Link href={"/Contribution"}>
        <div
          style={{
            // zIndex: ,
            backgroundColor: "#fff",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            padding: "0 0",
            textTransform: "uppercase",
            paddingRight: 30,
          }}
        >
          <Heading
            style={{ display: "flex", alignSelf: "center" }}
            as="h1"
            size={34}
            p={2}
            noOfLines={1}
            color={"#fff"}
          >
            {/* OPPOSITE Of POVERTY is JUSTICE! */}
          </Heading>
        </div>
      </Link>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          {/* <MantineLogo size={30} /> */}
          <Link href="/">
            <Image
              src="/logo.png"
              width={900}
              height={900}
              alt="logo"
              style={{
                zIndex: 999,
                position: "absolute",
                top: 45,
                width: "auto",
                height: "3.8rem",
              }}
            />
          </Link>

          <Group h="100%" gap={0} visibleFrom="sm">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href} className={classes.link2}>
                {link.label}
              </Link>
            ))}

            <Popover width={200} position="bottom" withArrow shadow="md">
              <Popover.Target>
                <Link className={classes.link2} href={"#"}>
                  About Us
                </Link>
              </Popover.Target>
              <Popover.Dropdown>
                {about.map((link) => (
                  <Button
                    w={"100%"}
                    mt={10}
                    style={{ position: "a" }}
                    key={link}
                    onClick={() => push(link.href)}
                  >
                    {link.label}
                  </Button>
                ))}
              </Popover.Dropdown>
            </Popover>

            {/* {user === "admin" ? (
              <HoverCard
                width={600}
                position="bottom"
                radius="md"
                shadow="md"
                withinPortal
              >
                <HoverCard.Target>
                  <Center inline>
                    <Box className={classes.link2} component="span" mx={5}>
                      Manage
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </HoverCard.Target>

                <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                  <Group justify="space-between" px="md">
                    <Text fw={500}>Features</Text>
                    <Anchor fz="xs">View all</Anchor>
                  </Group>

                  <Divider my="sm" />

                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>

                  <div className={classes.dropdownFooter}>
                    <Group justify="space-between">
                      <div>
                        <Text fw={500} fz="sm">
                          Wellcome Back
                        </Text>
                        <Text size="xs" c="dimmed">
                          You are logged in as Administrater
                        </Text>
                      </div>
                      <Button variant="default">Go Dashboard</Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
            ) : null} */}
          </Group>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link href={"/Contribution"}>
              <VolunteerActivismRoundedIcon
                style={{ color: "#000", marginRight: 30, marginTop: "5" }}
              />
            </Link>
            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="sm"
              color={"#000"}
            />
          </div>
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="ALBASHIR"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(90vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          {navLinks.map((link, index) => (
            <Link key={index} href={link.href} className={classes.link}>
              {link.label}
            </Link>
          ))}
          {about.map((link, index) => (
            <Link key={index} href={link.href} className={classes.link}>
              {link.label}
            </Link>
          ))}
          {/* {user === "admin" ? (
            <>
              <UnstyledButton className={classes.link} onClick={toggleLinks}>
                <Center inline>
                  <Box component="span" mr={5}>
                    Manage
                  </Box>
                  <IconChevronDown
                    style={{ width: rem(16), height: rem(16) }}
                    color={theme.colors.blue[6]}
                  />
                </Center>
              </UnstyledButton>
              <Collapse in={linksOpened}>{links}</Collapse>
            </>
          ) : null} */}
        </ScrollArea>
        <Divider my="sm" />
        <Group justify="center" grow pb="xl" px="md">
          <UserButton user={user} />
        </Group>
      </Drawer>
      <Flex alignItems="center" justifyContent={"center"} p={1} bgColor={"red"}>
        <Link
          href="/Contribution"
          // target="_blank"
          rel="noopener noreferrer"
          _hover={{ textDecoration: "none" }}
          style={{ fontWeight: "900", color: "#fff" }}
        >
          Donate Now
        </Link>
      </Flex>
    </Box>
  );
}
