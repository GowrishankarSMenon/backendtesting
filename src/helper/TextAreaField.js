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
      <FormLabel fontSize={'14px'}>{label}</FormLabel>
      <Textarea placeholder={placeholder} fontSize={'14px'}/>
    </FormControl>
  );
};

export default TextAreaField;
