import { Box, Container, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const PageHeader: React.FC = () => {
  return (
    <Stack
      padding={{ base: "20px 0" }}
      as="header"
      filter="drop-shadow(0 0 10px rgba(0,0,0,0.05))"
      background="#ffffff"
    >
      <Container>
        <Flex align="center" gap={{ base: "3", sm: "5", md: "6", lg: "7" }} justify="center">
          <Image
            src="/images/breakaway_logo.png"
            width="auto"
            height={{ base: "20px", sm: "28px", md: "42px", lg: "50px" }}
            objectFit="scale-down"
            objectPosition="center"
            alt="breakaway_logo"
          ></Image>
          <Text fontWeight="600" fontSize={{ base: "14px", sm: "16px", md: "18px", lg: "20px" }}>
            x
          </Text>
          <Image
            src="/images/mifu_logo.png"
            width="auto"
            height={{ base: "20px", sm: "28px", md: "42px", lg: "50px" }}
            objectFit="scale-down"
            objectPosition="center"
            alt="mifu_logo"
          ></Image>
        </Flex>
      </Container>
    </Stack>
  );
};
