import React, { useState } from "react";
import { Box, Flex, Accordion, Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const TextInputField = ({ label, type, placeholder, Required, id, name, value, handleInputChange}) => {

  return (
    <FormControl isRequired={Required} mb={5}>
      <FormLabel fontSize={"14px"}>{label}</FormLabel>
      <Input
        type={type}
        onChange={handleInputChange}
        placeholder={placeholder}
        fontSize={"14px"}
        id={id}
        name={name}
        value={value}
      />
    </FormControl>
  );
};

export default TextInputField;
