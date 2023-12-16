import React from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  Checkbox,
  FormLabel,
} from "@chakra-ui/react";

const CheckedField = ({checkText}) => {
  return (
    <Box pt={2} pb={2}>
      <Checkbox colorScheme="blue" defaultChecked>
        <Text pl={1} fontSize={'14px'}>{checkText}</Text>
      </Checkbox>
    </Box>
  );
};

export default CheckedField;
