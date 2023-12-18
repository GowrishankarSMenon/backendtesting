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
  Divider
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";

/* components */
import FormModal from "../modal/formModal";
import JobForm from "../modal/JobForm";
import ObjectForm from "../modal/ObjectForm";

const TableLayout = ({ tableView, tableName, details }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <TableContainer className="grid-table">
        <Table border={0} title={tableName}>
          <Tbody>
            <Tr>
              <Td textAlign="right" pt={2} pb={2}></Td>
            </Tr>
            <Tr>
              <Td textAlign="left">
                <Table border={0}>
                  <Tbody>
                    {details.length > 0
                      ? details.map((item, i) => {
                          return (
                            <Tr key={i + 1}>
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
                                          {item.title}
                                        </Heading>
                                      </Box>
                                      {i == 0 ? (
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
                                      ) : null}
                                    </Flex>
                                    <Divider orientation='horizontal' bg={'#a3a3a3'}/>
                                  </TableCaption>
                                  <Tbody>
                                    {item.data.length > 0
                                      ? item.data.map((list, num) => {
                                          return (
                                            <Tr key={num + 1}>
                                              <Td pb={2} w={"25%"}>
                                                <Box>
                                                  <Text
                                                    as={"span"}
                                                    fontSize={14}
                                                    fontWeight={"500"}
                                                  >
                                                    {list.formField}
                                                  </Text>
                                                </Box>
                                              </Td>
                                              <Td w={"10%"} pb={2}>
                                                <Box>:</Box>
                                              </Td>
                                              <Td pb={2}>
                                                <Box>
                                                  <Text
                                                    as={"span"}
                                                    fontSize={14}
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
          <ModalCloseButton />
          <ModalBody mt={2}>
            {tableView === "profile" ? (
              <FormModal />
            ) : tableView === "job-profile" ? (
              <JobForm />
            ) : (
              <ObjectForm />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TableLayout;
