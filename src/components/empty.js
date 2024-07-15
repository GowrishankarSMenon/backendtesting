import React from 'react'

const empty = () => {
  return (
    multiFormFields.map((list, i) => {
        if (list.title.toLowerCase() == title) {
          if (list.multi_field.length > 1) {
          } else {
            return (
              <Box key={i + 1}>
                <Box>
                  <Box>
                    <Text as={"span"} color="red" fontSize={"12px"}>
                      * Indicates Mandatory Fields
                    </Text>
                  </Box>
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
                  {list.form_fields.length > 0
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
                                    option={inputFields.select_option}
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
                                <Box key={i + 1}>radio</Box>
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
                <Divider orientation="horizontal" mt={4} mb={4} />
                <Box>
                  <Flex
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    gap={4}
                  >
                    <Box>
                      <Button
                        fontSize={"14px"}
                        color="white"
                        colorScheme="blue"
                      >
                        Save
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        fontSize={"14px"}
                        color="white"
                        colorScheme="red"
                      >
                        Clear
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        fontSize={"14px"}
                        color="white"
                        colorScheme="blackAlpha"
                      >
                        Back
                      </Button>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            );
          }
        }
      })
  )
}

export default empty