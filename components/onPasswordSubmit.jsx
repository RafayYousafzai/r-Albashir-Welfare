"use client";

// PasswordInput.js
import React, { useState } from "react";
import {
  Input,
  InputGroup,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
} from "@chakra-ui/react";

const PasswordInput = ({ onSuccess }) => {
  const [password, setPassword] = useState("");

  const handlePasswordSubmit = () => {
    if ((password === "admin")) {
      onSuccess(true); // Call the parent function with the result
      console.log("Password is correct");
    } else {
      console.log("Incorrect password. Try again.");
    }
  };

  return (
    <Modal isOpen={true} onClose={() => {}}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Password Required</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <InputGroup>
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={handlePasswordSubmit}>
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PasswordInput;
