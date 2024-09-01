"use client";

import React, { useState } from "react";
import {
  Box,
  Heading,
  Button,
  VStack,
  Input,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";

const MyProfile = ({ user, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(user);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // onSave(userData);
  };

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setUserData((prevUserData) => ({
    //   ...prevUserData,
    //   [name]: value,
    // }));
  };

  return (
    <Box
      py={5}
      px={10}
      maxW="md"
      mx="auto"
      borderRadius="lg"
      boxShadow="lg"
      bg="#f1faee"
      my={10}
    >
      <Heading mb={5}>My Account</Heading>
      <VStack spacing={4} align="start">
        <FormControl>
          <FormLabel>Full Name</FormLabel>
          <Input
            variant="outline"
            colorScheme="whiteAlpha"
            size="md"
            placeholder="Full Name"
            name="fullName"
            value={"Soon"}
            onChange={handleChange}
            isReadOnly={!isEditing}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            variant="outline"
            colorScheme="whiteAlpha"
            size="md"
            placeholder="Email"
            name="email"
            value={"Soon"}
            isReadOnly={true}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Bio</FormLabel>
          <Textarea
            variant="outline"
            colorScheme="whiteAlpha"
            size="md"
            placeholder="Bio"
            name="bio"
            value={"Soon"}
            onChange={handleChange}
            isReadOnly={!isEditing}
          />
        </FormControl>
      </VStack>
      <Button mt={4} onClick={isEditing ? handleSaveClick : handleEditClick}>
        {isEditing ? "Save" : "Edit"}
      </Button>
    </Box>
  );
};

export default MyProfile;
