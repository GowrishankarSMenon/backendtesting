import React from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  Checkbox,
  FormLabel,
} from "@chakra-ui/react";

const CheckedField = () => {
  return (
    <Box>
      <Checkbox colorScheme="red" defaultChecked>
        Permanent Contact Details Same As Above
      </Checkbox>
    </Box>
  );
};

export default CheckedField;
