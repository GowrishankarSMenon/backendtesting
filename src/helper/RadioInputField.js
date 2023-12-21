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

const RadioInputField = ({id, name, value, label, type, Placeholder, handleInputChange}) => {
  return (
    <RadioGroup value="" mb={5}>
      <FormLabel fontSize={"14px"}>Security Clearance</FormLabel>
      <Stack direction="row">
        <Radio value="yes">
          <Text fontSize={"14px"}>Yes</Text>
        </Radio>
        <Radio value="no">
          <Text fontSize={"14px"}>No</Text>
        </Radio>
      </Stack>
    </RadioGroup>
  );
};

export default RadioInputField;
