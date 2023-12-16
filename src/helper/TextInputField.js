import React, { useState } from "react";
import { Box, Flex, Accordion, Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const TextInputField = ({label, type, placeholder, Required}) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  return (
    <FormControl isRequired={Required} mb={4}>
      <FormLabel fontSize={'14px'}>{label}</FormLabel>
      <Input type={type} value={input} onChange={handleInputChange} placeholder={placeholder} fontSize={'14px'}/>
    </FormControl>
  );
};

export default TextInputField;
