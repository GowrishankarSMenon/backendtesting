import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
  Text,
} from "@chakra-ui/react";

const TextAreaField = ({
  label,
  placeholder,
  id,
  name,
  value,
  handleInputChange,
}) => {
  return (
    <FormControl isRequired mb={5}>
      <FormLabel fontSize={"14px"}>{label}</FormLabel>
      <Textarea
        placeholder={placeholder}
        fontSize={"14px"}
        id={id}
        name={name}
        value={value}
        onChange={handleInputChange}
      />
      {label != "Address" ? (
        <Text fontSize={"12px"} mt={0}>
          (Maximum limit is 1000 characters)
        </Text>
      ) : null}
    </FormControl>
  );
};

export default TextAreaField;
