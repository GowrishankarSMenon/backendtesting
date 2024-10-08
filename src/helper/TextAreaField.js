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
  Required 
}) => {
  return (
    <FormControl isRequired={Required} mb={5}>
      <FormLabel htmlFor={id} fontSize={"14px"}>{label}</FormLabel>
      <Textarea
        maxBlockSize={2}
        placeholder={placeholder}
        fontSize={"14px"}
        id={id}
        name={name}
        value={value}
        onChange={handleInputChange}
      />
      {label != "Address" ? (
        <Text fontSize={"12px"} mt={1}>
          (Maximum limit is 1000 characters)
        </Text>
      ) : null}
    </FormControl>
  );
};

export default TextAreaField;
