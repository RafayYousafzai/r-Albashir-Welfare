"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Faq,
  Categories,
  Hero,
  EmailBanner,
  PageHeader,
  About,
  ProjectCard,
  AuthorCards,
  ContributionCard,
  Grids,
  News,
  OurWorkPicCollage,
  FaqAcc,
} from "components/Index";
import { getCollection } from "./api/firebase/functions/get";
import { Skeleton } from "@chakra-ui/react";
import { Button, Divider } from "@mantine/core";
import Link from "next/link";
// import {  } from "components/faq/FaqAcc";

export default function Page() {
  const [founders, setFounders] = useState(null);
  const [projects, setProjects] = useState(null);

  console.log(founders, projects);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const foundersData = await getCollection("founders");
        const projectsData = await getCollection("projects");
        setFounders(foundersData);
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the function to fetch data
  }, []); // Empty dependency array ensures the effect runs only once, equivalent to componentDidMount

  return (
    <motion.div
      style={{ overflow: "hidden" }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Divider />
      <Hero />
      <div style={{ position: "relative" }}>
        <Link href={"/Contribution"}>
          <Button
            bg={"red"}
            color={"#fff"}
            variant="light"
            size="lg"
            style={{
              zIndex: 999,
              position: "absolute",
              bottom: "10px",
              boxShadow: "100 10px 16px rgba(0, 0, 0, 0.9)",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            Donate Now
          </Button>
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <PageHeader text="Our Causes" />
        {projects ? <Categories /> : <Skeleton height="10rem" width="100%" />}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <PageHeader text="Opposite Of Poverty Is Justice" />
      </motion.div>

      <Grids />

      <div>
        <PageHeader text="Our Projects Founders" />
        {founders ? (
          <AuthorCards data={founders} />
        ) : (
          <Skeleton height="10rem" width="100%" />
        )}
      </div>
      <div style={{ marginTop: 10 }}>
        <About />
      </div>

      <News />

      <ContributionCard />

      <OurWorkPicCollage />

      <div>
        <FaqAcc />
        <Faq />
      </div>

      <div>
        <EmailBanner />
      </div>
    </motion.div>
  );
}
