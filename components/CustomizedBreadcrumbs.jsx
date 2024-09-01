import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function CustomizedBreadcrumbs({ link, name, link2, name2 }) {
  return (
    <Breadcrumb>
      <Link
        style={{
          textDecoration: "none",
          backgroundColor: "#a8dadc",
          borderRadius: ".5rem",
          Padding: "0 1rem ",
        }}
        href={link || "#"}
      >
        <BreadcrumbItem>
          <BreadcrumbLink>{name}</BreadcrumbLink>
        </BreadcrumbItem>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          backgroundColor: "#a8dadc",
          borderRadius: ".5rem",
          Padding: "0 1rem ",
        }}
        href={link2 || "#"}
      >
        <BreadcrumbItem>
          <BreadcrumbLink>{name2}</BreadcrumbLink>
        </BreadcrumbItem>
      </Link>
    </Breadcrumb>
  );
}
