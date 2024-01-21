import React from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Divider,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";

/* components */
import JobForm from "../modal/JobForm";

const JobTable = ({ tableView, tableName, candidate }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <TableContainer className="grid-table">
        <Table border={0} title="profile">
          <Tbody>
            <Tr>
              <Td textAlign="right" pt={2} pb={2}></Td>
            </Tr>
            <Tr>
              <Td textAlign="left">
                <Table border={0}>
                  <Tbody>
                    <Tr>
                      <Td textAlign="left">
                        <Table border={0}>
                          <TableCaption
                            placement={"top"}
                            pl={1}
                            pr={1}
                            pt={0}
                            pb={0}
                            mt={0}
                            mb={1}
                          >
                            <Flex
                              justifyContent={"space-between"}
                              alignItems={"center"}
                              pt={1}
                              pb={2}
                            >
                              <Box>
                                <Heading as={"h4"} fontSize={18}>
                                  Job Details
                                </Heading>
                              </Box>

                              <Button
                                onClick={onOpen}
                                minW={8}
                                h={8}
                                pl={1}
                                pr={1}
                                bg={"#2d43b3"}
                                color="#fff"
                              >
                                <EditIcon fontSize="14px" />
                              </Button>
                            </Flex>
                            <Divider orientation="horizontal" bg={"#a3a3a3"} />
                          </TableCaption>
                          <Tbody>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Desired Position Title
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Alternate Position Title
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Availability
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Or Date Available
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Term of Notice
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Desired Career Level
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Desired Salary
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Desired Wage
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Desired Location
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Desired Job Category
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Desired Job Type
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Desired Job Term
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Desired Work Type
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Willing to TeleCommute
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Willing To Commute
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Ideal Company Category
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Preferred Company Size
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Ideal Company Summary
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Industry Experience
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Shift
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Work Style
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Dress Code
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Travel Applicable
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Travel Frequency
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Travel Consideration
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Willing To Relocate
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Relocation Comments
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Preferred Language
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Commute
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Commute
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Commute Comments
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Additional Info
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                            <Tr>
                              <Td pb={2} w={"25%"}>
                                <Box>
                                  <Text
                                    as={"span"}
                                    fontSize={14}
                                    fontWeight={"500"}
                                  >
                                    Desired Position Title
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}></Text>
                                </Box>
                              </Td>
                            </Tr>
                          </Tbody>
                        </Table>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={"55rem"} p={[4, 8]}>
          <ModalCloseButton />
          <ModalBody mt={2}>
            <JobForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default JobTable;
