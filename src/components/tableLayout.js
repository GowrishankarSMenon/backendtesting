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
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import FormModal from "../modal/formModal";

const TableLayout = ({ tableView, tableName, details }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <TableContainer className="grid-table">
        <Table border={0} title={tableName}>
          <Tbody>
            <Tr>
              <Td textAlign="right" pt={2} pb={2}>
                <Button onClick={onOpen}>
                  <EditIcon fontSize="12px" />
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td textAlign="left">
                <Table border={0}>
                  <Tbody>
                    {tableView === "profile" ? (
                      <Tr>
                        <Td textAlign="left">
                          <Table border={0}>
                            <Tbody>
                              <Tr>
                                <Td>
                                  This candidate was last updated on 4/6/2022
                                  5:02:36 AM
                                </Td>
                              </Tr>
                            </Tbody>
                          </Table>
                        </Td>
                      </Tr>
                    ) : null}
                    {details.length > 0
                      ? details.map((item, i) => {
                          return (
                            <Tr key={i + 1}>
                              <Td textAlign="left">
                                <Table border={0}>
                                  <TableCaption
                                    placement={"top"}
                                    textAlign={"left"}
                                    fontSize={"20px"}
                                    pl={1}
                                    mt={0}
                                  >
                                    <Box>
                                      <Heading as={"h4"} fontSize={18}>
                                        {item.title}
                                      </Heading>
                                    </Box>
                                  </TableCaption>
                                  <Tbody>
                                    {item.data.length > 0
                                      ? item.data.map((list, num) => {
                                          return (
                                            <Tr key={num + 1}>
                                              <Td pb={1}>
                                                <Box>
                                                  <Text
                                                    as={"span"}
                                                    fontSize={14}
                                                    fontWeight={"500"}
                                                  >
                                                    {list.formField} :{" "}
                                                  </Text>
                                                </Box>
                                              </Td>
                                              <Td pb={1}>
                                                <Box>
                                                  <Text
                                                    as={"span"}
                                                    ontSize={14}
                                                  >
                                                    {list.value}
                                                  </Text>
                                                </Box>
                                              </Td>
                                            </Tr>
                                          );
                                        })
                                      : null}
                                  </Tbody>
                                </Table>
                              </Td>
                            </Tr>
                          );
                        })
                      : null}
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
          {tableView === "profile" ? (
            <Box>
              <Text>* Indicates Mandatory Fields</Text>
              <ModalHeader>Personal Info (Optional)</ModalHeader>
              <Box>
                <Text as={"span"}>Last Modified Date</Text>
                <Text as={"span"}>4/6/2022 5:02:36 AM</Text>
              </Box>
            </Box>
          ) : null}

          <ModalCloseButton />
          <ModalBody mt={2}>
            {tableView === "profile" ? <FormModal /> : null}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TableLayout;
