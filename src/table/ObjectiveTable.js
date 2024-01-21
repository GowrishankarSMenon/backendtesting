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
import ObjectForm from "../modal/ObjectForm";

const ObjectiveTable = ({ tableView, tableName, candidate }) => {
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
                                <Heading as={"h4"} fontSize={18}></Heading>
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
                                    Career Objective
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}>
                                    Test
                                  </Text>
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
                                    Career Summary
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  <Text as={"span"} fontSize={14}>
                                    Test
                                  </Text>
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
            <ObjectForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ObjectiveTable;
