import { PageHeader } from "./partials/page-header";
import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { PageForm } from "./partials/page-form";

export default function Home() {
  return (
    <>
      <PageHeader />
      <Box as="section" padding="60px 0" background="#FEFEFE">
        <Container maxW="920px">
          <Stack textAlign="center" color="#000000" gap={7} lineHeight={1.4}>
            <Heading lineHeight={1.2}>
              Become an Influencer For
              <br />
              Breakaway x Mifu
            </Heading>
            <Stack gap={4} fontSize={18}>
              <Text>
                Whether you&apos;re the person with the most likes or followers on campus, or a hard-worker looking to
                build your network and gain marketing experience, we want to HEAR from you.
              </Text>
              <Text>
                Becoming a part of the Breakaway Influencer and Ambassador team is pretty simple. Just apply by
                selecting your preferred market below. Complete your application and attach your Instagram handle for a
                chance to be considered!
              </Text>
            </Stack>
          </Stack>
          <PageForm />
        </Container>
      </Box>
    </>
  );
}
