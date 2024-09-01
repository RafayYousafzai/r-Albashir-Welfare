import {
  Box,
  Heading,
  Text,
  Link,
  VStack,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";

const DonatePage = () => {
  return (
    <Box p={8}>
      <Heading mb={6} textAlign="center">
        Ways to Donate
      </Heading>

      <SimpleGrid columns={[1, 2, 3]} gap={8}>
        {/* Direct Transfer to Bank Card */}
        <Center>
          <Box
            p={6}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="lg"
            bg="blue.400"
            color="white"
            textAlign="center"
          >
            <Text fontWeight="bold" mb={4}>
              We also accept donations securely Direct Transfer to Bank
            </Text>
          </Box>
        </Center>

        {/* Stripe Card */}
        <Center>
          <Box
            p={6}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="lg"
            bg="green.400"
            color="white"
            textAlign="center"
          >
            <Text fontWeight="bold" mb={4}>
              2. Stripe
            </Text>
            <Text>
              We also accept donations securely through Stripe. Click the
              following link to donate via Stripe:
              <br />
              <Link href="[Your Stripe Donation Link]" isExternal color="white">
                Donate with Stripe
              </Link>
            </Text>
          </Box>
        </Center>

        {/* PayPal Card */}
        <Center>
          <Box
            p={6}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="lg"
            bg="purple.400"
            color="white"
            textAlign="center"
          >
            <Text fontWeight="bold" mb={4}>
              3. PayPal
            </Text>
            <Text>
              You can donate using PayPal. Click the following link to donate
              via PayPal:
              <br />
              <Link href="[Your PayPal Donation Link]" isExternal color="white">
                Donate with PayPal
              </Link>
            </Text>
          </Box>
        </Center>
      </SimpleGrid>
    </Box>
  );
};

export default DonatePage;
