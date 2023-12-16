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
      <FormLabel fontSize={'14px'}>Security Clearance</FormLabel>
      <Stack direction="row">
        <Radio fontSize={'14px'}  value="1">Yes</Radio>
        <Radio fontSize={'14px'} value="2">No</Radio>
      </Stack>
    </RadioGroup>
  );
};

export default RadioInputField;
