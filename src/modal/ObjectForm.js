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
import TextEditor from "../helper/TextEditor";

const ObjectForm = () => {
  return (
    <Box>
      <Box>
        <Box>
          <Text as={"span"} color="red" fontSize={"12px"}>
            * Indicates Mandatory Fields
          </Text>
        </Box>
        <Heading as={"h4"} fontSize={"20px"} pt={2} pb={2}>
          Objectives And Summaries (Optional)
        </Heading>
      </Box>
      <TextInputField
        type="text"
        label="Career Objective"
        placeholder="Profile Name"
        Required={true}
      />
      <TextInputField
        type="text"
        label="Career Summary"
        placeholder="Salutation"
        Required={true}
      />
      <TextEditor />
    </Box>
  );
};

export default ObjectForm;
