import React from "react";
import { Box, Button, Flex, Text, Checkbox, FormLabel } from "@chakra-ui/react";

const CheckedField = ({ checkText, id, name, value, handleInputChange }) => {
  return (
    <Box pt={2} pb={2} mb={4}>
      <Checkbox
        colorScheme="blue"
        isChecked={value}
        id={id}
        name={name}
        value={value}
        onChange={handleInputChange}
      >
        <Text pl={1} fontSize={"14px"}>
          {checkText}
        </Text>
      </Checkbox>
    </Box>
  );
};

export default CheckedField;
