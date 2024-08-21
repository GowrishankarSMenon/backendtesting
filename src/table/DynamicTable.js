import React from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  AccordionPanel,
  AccordionItem,
  AccordionButton,
} from "@chakra-ui/react";
import { AddIcon, EditIcon, MinusIcon } from "@chakra-ui/icons";
import { Link, Outlet } from "react-router-dom";

const HeadTableLayout = ({ title, rows }) => {
  // Get headers from the keys of the first row in the data
  let headers = rows.length > 0 ? Object.keys(rows[0]) : [];
  let headersfixed = headers.map(str => str.replace(/_/g, ' '));



  return (
    <>
        <AccordionItem mb={4}>
          {({ isExpanded }) => (
            <>
              <h3>
                <AccordionButton pb={3} pt={3}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={"16px"}
                    fontWeight="600"
                  >
                    {title}
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h3>
              <AccordionPanel
                pb={4}
                pl={1.5}
                pr={1.5}
                mb={2}
                className="inner_content"
              >
                  <TableContainer pl={2} pr={2}>
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
            <Flex justifyContent={"flex-end"} alignItems={"center"} pt={1} pb={2}>
              <Link to={`/my-profile/${title.toLowerCase()}`}>
                <Button minW={8} h={8} pl={1} pr={1} bg={"#2d43b3"} color="#fff">
                  <EditIcon fontSize="14px" />
                </Button>
              </Link>
            </Flex>
          </TableCaption>
          <Thead>
            <Tr>
              {headersfixed.map((header, i) => (
                <Th key={i}>
                  <Box>
                    <Text as={"span"}>{header.charAt(0).toUpperCase() + header.slice(1)}</Text>
                  </Box>
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {rows.length > 0 &&
              rows.map((row, i) => (
                <Tr key={i}>
                  {headers.map((key, j) => (
                    <Td key={j}>
                      <Box>
                        <Text fontSize={13} as={"span"}>
                          {row[key]}
                        </Text>
                      </Box>
                    </Td>
                  ))}
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
      {/* Outlet is used to render child routes */}
      <Outlet />
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      
    </>
  );
};

export default HeadTableLayout;
