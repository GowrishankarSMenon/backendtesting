import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
} from "@chakra-ui/react";

const TextAreaField = ({ label, placeholder, id, name, value }) => {
  return (
    <FormControl isRequired mb={4}>
      <FormLabel fontSize={"14px"}>{label}</FormLabel>
      <Textarea
        placeholder={placeholder}
        fontSize={"14px"}
        id={id}
        name={name}
        value={value}
      />
    </FormControl>
  );
};

export default TextAreaField;
