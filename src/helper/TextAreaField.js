import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
} from "@chakra-ui/react";

const TextAreaField = ({ label, placeholder }) => {
  return (
    <FormControl isRequired mb={4}>
      <FormLabel>{label}</FormLabel>
      <Textarea placeholder={placeholder} />
    </FormControl>
  );
};

export default TextAreaField;
