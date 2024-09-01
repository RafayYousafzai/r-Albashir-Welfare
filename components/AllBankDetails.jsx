"use client";

import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { Center, Container } from "@mantine/core";

export default function AllBankDetails({ accounts }) {
  const [selectedBank, setSelectedBank] = useState(null);

  const handleBankClick = (bank) => {
    setSelectedBank(bank);
  };

  const styles = {
    bankSection: {
      border: "1px solid lightgray",
      borderRadius: "1rem",
      display: "flex",
      flexWrap: "wrap",
      width: "100%",
      justifyContent: "center",
      overflow: "hidden",
    },
    leftSection: {
      width: "30%",
      minWidth: "15rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    rightSection: {
      width: "70%",
      minWidth: "15rem",
      position: "relative",
      backgroundImage: `url(https://img.freepik.com/free-vector/isometric-money-saving-concept-background_52683-6820.jpg?w=826&t=st=1700769791~exp=1700770391~hmac=90e9e8a89c6e2805a13c0f718dd21255ef44445d28cb9cfe8bf133432a5d9077)`,
      backgroundSize: "cover",
    },
    button: {
      padding: ".8rem",
      color: "#000",
      cursor: "pointer",
      marginLeft: "1rem",
    },
    details: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      padding: "1rem",
      borderRadius: "1rem",
      color: "#fff",
      backdropFilter: "blur(10px)",
      width: "100%",
      minHeight: "20rem",
      height: "auto",
      display: "grid",
      gridTemplateColumns: "1fr 2fr", // 1 part for labels, 2 parts for values
      gap: "0.5rem", // Add gap between items
    },
  };

  return (
    <Container
      size={"lg"}
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "90vw",
        marginTop:'1rem'
      }}
    >
      <h1
        style={{
          borderLeft: "10px solid #1d3557",
          padding: "0 .5rem",
          fontWeight: 900,
          fontSize: "2rem",
          color: "#457b9d",
        }}
      >
        All Bank Details
      </h1>
      <p
        style={{
          color: "#343a40",
          maxWidth: "37rem",
          margin: ".5rem 0",
        }}
      >
        If You’re having trouble by paying donation or don’t want to put your
        details right above then we’ve mentioned our banking details running all
        across the globe. You can check what’s fits your need. Have a blessed
        life !{" "}
      </p>
      <div style={styles.bankSection}>
        <div style={styles.leftSection}>
          {accounts.map((acc) => (
            <div
              style={styles.button}
              key={acc.bank}
              width={"100%"}
              onClick={() => handleBankClick(acc)}
            >
              {acc.bank}
            </div>
          ))}
        </div>
        <div style={styles.rightSection}>
          {selectedBank && (
            <Center>
              <Box style={styles.details} mt={100}>
                <Text color="white" fontWeight="bold">
                  Bank:
                </Text>
                <Text>{selectedBank.bank}</Text>
                <Text fontWeight="bold">Title</Text>
                <Text>{selectedBank.title}</Text>
                <Text fontWeight="bold">Account Number</Text>
                <Text>{selectedBank.account_number}</Text>
                <Text fontWeight="bold">Branch Address</Text>
                <Text>{selectedBank.branch_address}</Text>
                <Text fontWeight="bold">IBAN</Text>
                <Text>{selectedBank.iban}</Text>
                <Text fontWeight="bold">Swift Code</Text>
                <Text>{selectedBank.swift_code}</Text>
              </Box>
            </Center>
          )}
        </div>
      </div>
    </Container>
  );
}
