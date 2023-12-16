import React from "react";
import {
  Box,
  Flex,
  Accordion,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";

const SelectInputField = ({ label, placeholder }) => {
  return (
    <FormControl isRequired mb={4}>
      {label != "" ? <FormLabel>{label}</FormLabel> : null}
      <Select placeholder={placeholder}>
        <option>United Arab Emirates</option>
        <option>Nigeria</option>
      </Select>
    </FormControl>
  );
};

export default SelectInputField;
