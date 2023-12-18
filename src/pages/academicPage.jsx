import React from "react";
import { Link, useParams } from "react-router-dom";
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
// json
import multiGrid from "../json/multiGridData.json";

const AcademicPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const params = useParams();
  const nav_title = params.title;
  return (
    <Box className="academic_Container">
      <Box className="page-width">
        <Box>
          <Box>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Box>
          <Box>
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
          </Box>
        </Box>
        <>
          {multiGrid.length > 0
            ? multiGrid.map((view, i) => {
                return view.table_title === nav_title ? (
                  <TableContainer pl={2} pr={2} key={i + 1}>
                    <Table variant="simple">
                      <Thead>
                        <Tr>
                          {view.table_head.length > 0
                            ? view.table_head.map((head, i) => {
                                return (
                                  <Th key={i + 1}>
                                    <Box>
                                      <Text as={"span"}>{head.thead}</Text>
                                    </Box>
                                  </Th>
                                );
                              })
                            : null}
                        </Tr>
                      </Thead>
                      <Tbody>
                        {view.table_body.length > 0
                          ? view.table_body.map((body, i) => {
                              if (i < 2) {
                                return (
                                  <Tr key={i + 1}>
                                    {body.tbody.length > 0
                                      ? body.tbody.map((items, i) => {
                                          return (
                                            <Td key={i + 1}>
                                              <Box>
                                                <Text fontSize={13} as={"span"}>
                                                  {items}
                                                </Text>
                                              </Box>
                                            </Td>
                                          );
                                        })
                                      : null}
                                  </Tr>
                                );
                              }
                            })
                          : null}
                      </Tbody>
                    </Table>
                  </TableContainer>
                ) : null;
              })
            : null}
        </>
      </Box>
    </Box>
  );
};

export default AcademicPage;
