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
      <Checkbox colorScheme="blue" defaultChecked fontSize={'14px'}>
        {checkText}
      </Checkbox>
    </Box>
  );
};

export default CheckedField;
