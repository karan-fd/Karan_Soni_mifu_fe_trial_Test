"use client";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from "@chakra-ui/react";
import React from "react";

import { InfluencerCampaignForm, getCampaignForm } from "@lib/api";
import { useQuery } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  custom_field_1: string;
  custom_field_2: string;
  custom_field_3: string;
  email: string;
  instagram: string;
  name: string;
  phone: string;
  tiktok: string;
  twitter: string;
};

export const PageForm: React.FC = () => {
  const { handleSubmit, register } = useForm<FormData>();
  const {
    isPending,
    error,
    data: formData,
  } = useQuery({
    queryKey: ["formData"],
    queryFn: () => getCampaignForm("campaignId") as Promise<InfluencerCampaignForm>,
  });

  const inputGroupStyles = {
    display: "flex",
    alignItems: "center",
    position: "relative",
  };
  const inputStyles = {
    color: "#000000",
    border: "1px solid #eaeaea",
    borderRadius: 10,
    minHeight: "48px",
    height: "48px",
    width: "100%",
    padding: "0 20px",
  };
  const labelStyles = {
    color: "#2D3260",
    fontWeight: 500,
    margin: 0,
    fontSize: "16px",
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
  };

  if (isPending) return <Heading mt={16}>Loading...</Heading>;
  if (error) return <Heading mt={16}>Error</Heading>;

  return (
    <Box as="form" maxW="820px" mx="auto" mt={16} gap={0} onSubmit={handleSubmit(onSubmit)}>
      <Flex padding={6} rounded={20} gap={8} flexDirection="column" boxShadow="0 0 30px -7px rgba(0, 0, 0, 0.2)">
        <Heading color="#232859" fontSize={20} fontWeight={600} as={"h5"}>
          Apply Now
        </Heading>
        {formData?.default_fields && (
          <Flex gap={5} flexDirection="column">
            {formData.default_fields.map((item, idx) => {
              return (
                <Flex flexDirection="column" gap={3} as="p" key={idx}>
                  <FormLabel sx={labelStyles}>{item.charAt(0).toUpperCase() + item.slice(1)}</FormLabel>
                  {item.toLowerCase() === "email" ? (
                    <Input
                      {...register(item.toLowerCase() as keyof FormData)}
                      type="email"
                      sx={inputStyles}
                      placeholder={`Your ${item.charAt(0).toUpperCase() + item.slice(1)}`}
                    ></Input>
                  ) : (
                    <Input
                      {...register(item.toLowerCase() as keyof FormData)}
                      sx={inputStyles}
                      placeholder={`Your ${item.charAt(0).toUpperCase() + item.slice(1)}`}
                    ></Input>
                  )}
                </Flex>
              );
            })}
          </Flex>
        )}
        {formData?.socials && (
          <Stack gap={4}>
            <Heading as="h5" sx={labelStyles}>
              Your Socials
            </Heading>
            <Flex gap={5} flexDirection="column">
              {formData.socials.map((item, idx) => {
                return (
                  <InputGroup sx={inputGroupStyles} as="p" key={idx}>
                    <Flex as="span" width={12} height={12} mr={3} gap={0}>
                      <Image
                        width="100%"
                        height="100%"
                        src={`/images/${item.toLowerCase()}.png`}
                        alt={item.toLowerCase() + "-icon"}
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </Flex>
                    <InputLeftAddon
                      background="none"
                      border="none"
                      padding={0}
                      position="absolute"
                      top="50%"
                      left="70px"
                      transform="translateY(-50%)"
                      height="auto"
                      lineHeight={1}
                      fontWeight={600}
                      fontSize={18}
                      as="span"
                    >
                      @
                    </InputLeftAddon>
                    <Input
                      {...register(item.toLowerCase() as keyof FormData)}
                      sx={inputStyles}
                      pl="48px !important"
                      placeholder={`${item.charAt(0).toUpperCase() + item.slice(1)} Username`}
                    ></Input>
                  </InputGroup>
                );
              })}
            </Flex>
          </Stack>
        )}
        {formData?.custom_fields && (
          <Flex gap={5} flexDirection="column">
            {formData.custom_fields.map((item, idx) => {
              return (
                <Flex flexDirection="column" gap={3} as="p" key={idx}>
                  <FormLabel sx={labelStyles} width="100%">
                    {item.question}
                  </FormLabel>
                  <Input
                    {...register(item.name.toLowerCase() as keyof FormData)}
                    sx={inputStyles}
                    required={item.is_required}
                    placeholder="Your Answer"
                  ></Input>
                </Flex>
              );
            })}
          </Flex>
        )}
      </Flex>
      <Flex align={"center"} justify={"flex-end"} mt={6}>
        <Button
          background="#5957D5"
          color="#ffffff"
          padding="0 25px"
          minW="125px"
          textAlign="center"
          minH="52px"
          rounded={15}
          _hover={{
            background: "#1E1C74",
            color: "#ffffff",
          }}
          type="submit"
        >
          Submit
        </Button>
      </Flex>
    </Box>
  );
};
