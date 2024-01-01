import React, { useState } from "react";
import { Box, Button, Flex, Text, Heading, Divider } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Country, State, City } from "country-state-city";
import multiFormFields from "../json/mltiFormFields.json";

// components
import TextInputField from "../helper/TextInputField";
import SelectInputField from "../helper/SelectInputField";
import TextAreaField from "../helper/TextAreaField";
import RadioInputField from "../helper/RadioInputField";
import CheckedField from "../helper/CheckedField";

const AllFormModal = ({ title, numValue, index }) => {
  let field_Name = multiFormFields[parseInt(numValue)].initialValues;
  const [input, setInput] = useState(field_Name);
  const onHandleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  let stateCode = State.getStatesOfCountry(input.country);
  let orgStateCode = State.getStatesOfCountry(input.Org_Country);

  let option_Item = [];
  let orgOption_state = [];

  if (stateCode.length > 0) {
    for (let i = 0; i < stateCode.length; i++) {
      option_Item.push({
        value: stateCode[i].isoCode,
        title: stateCode[i].name,
      });
    }
  } else {
    option_Item.push({ value: "", title: "" });
  }

  if (orgStateCode.length > 0) {
    for (let i = 0; i < orgStateCode.length; i++) {
      orgOption_state.push({
        value: orgStateCode[i].isoCode,
        title: orgStateCode[i].name,
      });
    }
  } else {
    orgOption_state.push({ value: "", title: "" });
  }

  console.log("====================================");
  console.log("input", input);
  console.log("====================================");
  return (
    <Box>
      {multiFormFields.length > 0
        ? multiFormFields.map((list, i) => {
            if (list.title.toLowerCase() == title) {
              return (
                <Box key={i + 1}>
                  <Box>
                    <Text as={"span"} color="red" fontSize={"12px"}>
                      * Indicates Mandatory Fields
                    </Text>
                  </Box>
                  {list.multi_field.length > 1 ? (
                    list.multi_field.map((item, i) => {
                      return (
                        <Box key={i + 1}>
                          <Box>
                            <Heading
                              as={"h4"}
                              fontSize={"20px"}
                              pt={2}
                              pb={2}
                              mt={1}
                              mb={2}
                            >
                              {item.heading}
                            </Heading>
                          </Box>
                          <Box>
                            {item.form_fields.length > 0
                              ? item.form_fields.map((inputFields, i) => {
                                  return (
                                    <>
                                      {inputFields.field === "select" ? (
                                        <Box key={i + 1}>
                                          <SelectInputField
                                            label={inputFields.label}
                                            name={inputFields.name}
                                            id={inputFields.id}
                                            value={input.name}
                                            placeholder={
                                              inputFields.placeholder
                                            }
                                            Required={inputFields.required}
                                            option={
                                              inputFields.list == "state"
                                                ? option_Item
                                                : inputFields.list ==
                                                  "org_state"
                                                ? orgOption_state
                                                : inputFields.select_option
                                            }
                                            handleInputChange={(e) =>
                                              onHandleChange(e)
                                            }
                                          />
                                        </Box>
                                      ) : inputFields.field === "input" ? (
                                        <Box key={i + 1}>
                                          <TextInputField
                                            type={inputFields.type}
                                            name={inputFields.name}
                                            id={inputFields.id}
                                            value={input.name}
                                            label={inputFields.label}
                                            placeholder={
                                              inputFields.placeholder
                                            }
                                            Required={inputFields.required}
                                            handleInputChange={(e) =>
                                              onHandleChange(e)
                                            }
                                          />
                                        </Box>
                                      ) : inputFields.field === "radio" ? (
                                        <Box key={i + 1}>
                                          <RadioInputField
                                            type={inputFields.type}
                                            name={inputFields.name}
                                            id={inputFields.id}
                                            Required={false}
                                            value={input.name}
                                            handleInputChange={(e) =>
                                              onHandleChange(e)
                                            }
                                            label={inputFields.label}
                                          />
                                        </Box>
                                      ) : inputFields.field === "checked" ? (
                                        <Box key={i + 1}>Checked</Box>
                                      ) : inputFields.field === "textarea" ? (
                                        <Box key={i + 1}>
                                          <TextAreaField
                                            name={inputFields.name}
                                            id={inputFields.id}
                                            value={input.name}
                                            label={inputFields.label}
                                            placeholder={
                                              inputFields.placeholder
                                            }
                                            handleInputChange={(e) =>
                                              onHandleChange(e)
                                            }
                                          />
                                        </Box>
                                      ) : null}
                                    </>
                                  );
                                })
                              : null}
                          </Box>
                        </Box>
                      );
                    })
                  ) : (
                    <Box>
                      <Box>
                        <Heading
                          as={"h4"}
                          fontSize={"20px"}
                          pt={2}
                          pb={2}
                          mt={1}
                          mb={2}
                        >
                          {list.multi_field[0].heading}
                        </Heading>
                      </Box>
                      <Box>
                        {list.multi_field[0].form_fields.length > 0
                          ? list.multi_field[0].form_fields.map(
                              (inputFields, i) => {
                                return (
                                  <>
                                    {inputFields.field === "select" ? (
                                      <Box key={i + 1}>
                                        <SelectInputField
                                          label={inputFields.label}
                                          name={inputFields.name}
                                          id={inputFields.id}
                                          value={input.name}
                                          placeholder={inputFields.placeholder}
                                          Required={inputFields.required}
                                          option={
                                            inputFields.list == "state"
                                              ? option_Item
                                              : inputFields.select_option
                                          }
                                          handleInputChange={(e) =>
                                            onHandleChange(e)
                                          }
                                        />
                                      </Box>
                                    ) : inputFields.field === "input" ? (
                                      <Box key={i + 1}>
                                        <TextInputField
                                          type={inputFields.type}
                                          name={inputFields.name}
                                          id={inputFields.id}
                                          value={input.name}
                                          label={inputFields.label}
                                          placeholder={inputFields.placeholder}
                                          Required={inputFields.required}
                                          handleInputChange={(e) =>
                                            onHandleChange(e)
                                          }
                                        />
                                      </Box>
                                    ) : inputFields.field === "radio" ? (
                                      <Box key={i + 1}>
                                        <RadioInputField
                                          type={inputFields.type}
                                          name={inputFields.name}
                                          id={inputFields.id}
                                          Required={false}
                                          value={input.name}
                                          handleInputChange={(e) =>
                                            onHandleChange(e)
                                          }
                                          label={inputFields.label}
                                        />
                                      </Box>
                                    ) : inputFields.field === "checked" ? (
                                      <Box key={i + 1}>Checked</Box>
                                    ) : inputFields.field === "textarea" ? (
                                      <Box key={i + 1}>
                                        <TextAreaField
                                          name={inputFields.name}
                                          id={inputFields.id}
                                          value={input.name}
                                          label={inputFields.label}
                                          placeholder={inputFields.placeholder}
                                          Required={inputFields.required}
                                          handleInputChange={(e) =>
                                            onHandleChange(e)
                                          }
                                        />
                                      </Box>
                                    ) : null}
                                  </>
                                );
                              }
                            )
                          : null}
                      </Box>
                    </Box>
                  )}
                </Box>
              );
            }
          })
        : null}
      <Box>
        <Divider orientation="horizontal" mt={4} mb={4} />
        <Box>
          <Flex justifyContent={"flex-start"} alignItems={"center"} gap={4}>
            <Box>
              <Button fontSize={"14px"} color="white" colorScheme="blue">
                Save
              </Button>
            </Box>
            <Box>
              <Button fontSize={"14px"} color="white" colorScheme="teal">
                Clear
              </Button>
            </Box>
            <Box>
              <Button fontSize={"14px"} color="white" colorScheme="blackAlpha">
                Cancel
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default AllFormModal;
