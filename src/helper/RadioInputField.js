import React from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  Heading,
  Radio,
  FormLabel,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

const RadioInputField = () => {
  return (
    <RadioGroup value="">
      <FormLabel>Security Clearance</FormLabel>
      <Stack direction="row">
        <Radio value="1">Yes</Radio>
        <Radio value="2">No</Radio>
      </Stack>
    </RadioGroup>
  );
};

export default RadioInputField;
