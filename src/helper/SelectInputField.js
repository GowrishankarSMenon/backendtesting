import React from "react";
import {
  Box,
  Flex,
  Accordion,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";

const SelectInputField = ({ label, placeholder, id, name, value }) => {
  return (
    <FormControl isRequired mb={4}>
      {label != "" ? <FormLabel fontSize={"14px"}>{label}</FormLabel> : null}
      <Select
        placeholder={placeholder}
        fontSize={"14px"}
        id={id}
        name={name}
        value={value}
      >
        <option>United Arab Emirates</option>
        <option>Nigeria</option>
      </Select>
    </FormControl>
  );
};

export default SelectInputField;
