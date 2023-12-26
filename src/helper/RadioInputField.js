import React from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  Heading,
  Radio,
  FormLabel,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

const RadioInputField = ({
  id,
  name,
  value,
  label,
  type,
  Placeholder,
  handleInputChange,
  Required,
}) => {
  // console.log("====================================");
  // console.log(id, name, value, label);
  // console.log("====================================");
  return (
    <Box mb={5}>
      <FormLabel fontSize={"14px"}>{label}</FormLabel>

      {/* <Stack direction="row">
          <Radio value="yes" name={name} id={id} onChange={handleInputChange}>
            <Text fontSize={"14px"}>Yes</Text>
          </Radio>
          <Radio value="no" name={name} id={id} onChange={handleInputChange}>
            <Text fontSize={"14px"}>No</Text>
          </Radio>
        </Stack> */}
      <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"}>
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          <input
            type="radio"
            value="yes"
            name={name}
            id="yes"
            onChange={handleInputChange}
          />
          <label
            for="yes"
            style={{
              fontSize: "14px",
              marginLeft: "5px",
              paddingBottom: "2px",
            }}
          >
            Yes
          </label>
        </Box>
        <Box
          ml={5}
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          <input
            type="radio"
            value="no"
            name={name}
            id="no"
            onChange={handleInputChange}
          />
          <label
            for="no"
            style={{
              fontSize: "14px",
              marginLeft: "5px",
              paddingBottom: "2px",
            }}
          >
            No
          </label>
        </Box>
      </Box>
    </Box>
  );
};

export default RadioInputField;
