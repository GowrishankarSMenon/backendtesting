import React from "react";
import {
  Box,
  Flex,
  Accordion,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";

const SelectInputField = ({ label, placeholder, id, name, value, option, handleInputChange }) => {
  return (
    <FormControl isRequired mb={5}>
      {label != "" ? <FormLabel fontSize={"14px"}>{label}</FormLabel> : null}
      <Select
        placeholder={placeholder}
        fontSize={"14px"}
        id={id}
        name={name}
        value={value}
        onChange={handleInputChange}
      >
        {option.map((option, i) => {
          return <option key={i+1} value={option.value}>{option.title}</option>;
        })}
      </Select>
    </FormControl>
  );
};

export default SelectInputField;
