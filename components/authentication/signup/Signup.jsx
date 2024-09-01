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
} from "@mantine/core";
import Link from "next/link";
import classes from "./Signup.module.css";

export default function Signup({ onSubmit }) {
  const [registrationInfo, setRegistrationInfo] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    bio: "",
    keepLoggedIn: true,
  });

  const handleInputChange = (field, value) => {
    setRegistrationInfo((prevInfo) => ({
      ...prevInfo,
      [field]: value,
    }));
  };

  const handleCheckboxChange = () => {
    setRegistrationInfo((prevInfo) => ({
      ...prevInfo,
      keepLoggedIn: !prevInfo.keepLoggedIn,
    }));
  };

  const handleRegisterClick = () => {
    onSubmit(registrationInfo);
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30} mt={0}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome to us!
        </Title>

        <TextInput
          label="Full Name"
          placeholder="John Doe"
          size="md"
          onChange={(event) =>
            handleInputChange("fullName", event.target.value)
          }
        />
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
        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm your password"
          mt="md"
          size="md"
          onChange={(event) =>
            handleInputChange("confirmPassword", event.target.value)
          }
        />
        <TextInput
          label="Bio"
          placeholder="Tell us about yourself"
          multiline
          rows={3}
          mt="md"
          size="md"
          onChange={(event) => handleInputChange("bio", event.target.value)}
        />
        <Checkbox
          label="Keep me logged in"
          mt="xl"
          size="md"
          checked={registrationInfo.keepLoggedIn}
          onChange={handleCheckboxChange}
        />
        <Button fullWidth mt="xl" size="md" onClick={handleRegisterClick}>
          Register
        </Button>

        <Text ta="center" mt="md">
          Already have an account? <Link href="/auth/Signin">Login</Link>
        </Text>
      </Paper>
    </div>
  );
}
