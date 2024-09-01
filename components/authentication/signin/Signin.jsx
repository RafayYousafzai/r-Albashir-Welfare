"use client";

import React, { useState } from "react";
import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
} from "@mantine/core";
import Link from "next/link";
import classes from "./Signin.module.css";

export default function Signin({ onSubmit }) {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    keepLoggedIn: true,
  });

  const handleInputChange = (field, value) => {
    setLoginInfo((prevInfo) => ({
      ...prevInfo,
      [field]: value,
    }));
  };

  const handleCheckboxChange = () => {
    setLoginInfo((prevInfo) => ({
      ...prevInfo,
      keepLoggedIn: !prevInfo.keepLoggedIn,
    }));
  };

  const handleLoginClick = () => {
    onSubmit(loginInfo);
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30} mt={0}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome back to us!
        </Title>

        <TextInput
          label="Email address"
          placeholder="hello@gmail.com"
          size="md"
          onChange={(event) => handleInputChange("email", event.target.value)}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
        <Checkbox
          label="Keep me logged in"
          mt="xl"
          size="md"
          checked={loginInfo.keepLoggedIn}
          onChange={handleCheckboxChange}
        />
        <Button fullWidth mt="xl" size="md" onClick={handleLoginClick}>
          Login
        </Button>

        <Text ta="center" mt="md">
          Don&apos;t have an account? <Link href="/auth/Signup">Register</Link>
        </Text>
      </Paper>
    </div>
  );
}
