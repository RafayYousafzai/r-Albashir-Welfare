import { Heading } from "@chakra-ui/react";
import { rem } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

export default function PageHeader({ h, text, size, color }) {
  return (
    <Link href={"/Contribution"}>
      <div
        style={{
          margin: ".5rem auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 0",
          textTransform: "uppercase",
          borderLeft: "6px solid #ffb703",
        }}
      >
        <Heading
          style={{
            height: h,
            display: "flex",
            alignSelf: "center",
            fontSize: "1.5rem",
          }}
          // as="h1"
          size={600}
          p={2}
          // mb={6}
          noOfLines={1}
          color={"#ffb703"}
        >
          {text || "No Heading"}
        </Heading>

        <IconChevronRight
          style={{ width: rem(14), height: rem(14), color: "#fff" }}
          stroke={3.5}
        />
      </div>
    </Link>
  );
}
