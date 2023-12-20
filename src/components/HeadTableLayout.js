import React, { useState, useEffect } from "react";
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
import {  Outlet, Link } from "react-router-dom";

// json
import multiGrid from "../json/multiGridData.json";

const HeadTableLayout = ({
  title,
  tableView,
  table_head,
  table,
  tableLayout,
  index,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dashboardData = {
    component: "Dashboard page",
    content: "Data is sent from profile component",
    timestamp: Date.now(),
  };
  return (
    <>
      {multiGrid.length > 0
        ? multiGrid.map((view, i) => {
            return view.table_title === tableView ? (
              <TableContainer pl={2} pr={2} key={i + 1}>
                <Table variant="simple">
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
                      justifyContent={"flex-end"}
                      alignItems={"center"}
                      pt={1}
                      pb={2}
                    >
                      <Link
                        to={{
                          pathname: `/my-profile/${tableView.toLowerCase()}`,
                          search: `?index=${i}`,
                          state: dashboardData,
                        }}
                      >
                        <Button
                          minW={8}
                          h={8}
                          pl={1}
                          pr={1}
                          bg={"#2d43b3"}
                          color="#fff"
                        >
                          <EditIcon fontSize="14px" />
                        </Button>
                      </Link>
                    </Flex>
                  </TableCaption>
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
        {/* Outlet is used to render child routes */}
        <Outlet />
    </>
  );
};

export default HeadTableLayout;
