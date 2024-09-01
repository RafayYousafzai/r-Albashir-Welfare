import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  rem,
  Button,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import classes from "./UserButton.module.css";
import Link from "next/link";

export default function UserButton({ user }) {
  return (
    <>
      <Link href="/Contribution">
        <UnstyledButton
          className={classes.user}
          // style={{ background: "#c1121f"   }}
        >
          <Group>
            <Avatar
              src="https://img.freepik.com/free-photo/medium-shot-expressive-kid-posing_23-2148860465.jpg?w=360&t=st=1703329906~exp=1703330506~hmac=3f4de0c4c10d1369499e598729b6f15cafbb561e2c37d8a612e63e1fb72fa0e9"
              radius="xl"
            />

            <div style={{ flex: 1 }}>
              <Text size="sm" fw={900} c={"#ef233c"}>
                Donate Now
              </Text>

              <Text c={"#d00000"} size="xs">
                Opposite of poverty is justice
              </Text>
            </div>

            <IconChevronRight
              style={{ width: rem(14), height: rem(14), color: "#ef233c" }}
              stroke={1.5}
            />
          </Group>
        </UnstyledButton>
      </Link>
    </>
  );
}
