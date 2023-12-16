import React from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  Heading,
  Checkbox,
  Radio,
  FormLabel,
  RadioGroup,
  Stack,
  Divider,
} from "@chakra-ui/react";
import TextInputField from "../helper/TextInputField";
import SelectInputField from "../helper/SelectInputField";
import TextAreaField from "../helper/TextAreaField";
import RadioInputField from "../helper/RadioInputField";
import CheckedField from "../helper/CheckedField";

const JobForm = () => {
  return (
    <Box>
      <Box>
        <Box>
          <Text as={"span"}></Text>
        </Box>
        <Heading as={"h3"}></Heading>
        <Box>
          <Text as={"span"}></Text>
        </Box>
      </Box>
      <TextInputField
        type="text"
        label="Profile Name"
        placeholder="Profile Name"
        Required={true}
      />
      <TextInputField
        type="text"
        label="Salutation"
        placeholder="Salutation"
        Required={true}
      />
    </Box>
  );
};

export default JobForm;
