import ReactPaginate from "react-paginate"; // for pagination
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai"; // icons form react-icons
import { IconContext } from "react-icons"; // for customizing icons
import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
/*Chakar UI*/
import {
  Box,
  Button,
  Flex,
  Text,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
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

const AcademicPage = (props) => {
  
  const location = useLocation()
  // const { from } = location.state
  const { isOpen, onOpen, onClose } = useDisclosure();
  const params = useParams();
  const nav_title = params.title;

  console.log('====================================');
  console.log("params: ", location);
  console.log('====================================');

  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState([]);
  const n = 5;

  useEffect(() => {
    setFilterData(
      multiGrid[0].table_body.filter((item, index) => {
        return (index >= page * n) & (index < (page + 1) * n);
      })
    );
  }, [page]);

  return (
    <Box className="academic_Container">
      <Box className="page-width">
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          mt={4}
          mb={4}
        >
          <Flex justifyContent={"flex-start"} alignItems={"center"}>
            <Button
              mr={2}
              color={"#fff"}
              bg={"blue"}
              fontSize={13}
              textTransform={"uppercase"}
            >
              Save
            </Button>
            <Button
              mr={2}
              color={"#fff"}
              bg={"red"}
              fontSize={13}
              textTransform={"uppercase"}
            >
              Update
            </Button>
            <Button
              mr={2}
              color={"#fff"}
              bg={"black"}
              fontSize={13}
              textTransform={"uppercase"}
            >
              Clear
            </Button>
          </Flex>
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
        </Flex>
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
                        {filterData.length > 0
                          ? filterData.map((body, i) => {
                              if (i < 5) {
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
                      <Tfoot>
                        <Tr>
                          <Th w={"100%"} colSpan="7">
                            <Box>
                              <Box
                                display={"flex"}
                                justifyContent={"flex-start"}
                                alignItems={"center"}
                                flexDirection={"column"}
                              >
                                {/* <ul>
                                  {filterData &&
                                    filterData.map((item, index) => (
                                      <li>Item #{item}</li>
                                    ))}
                                </ul> */}

                                <ReactPaginate
                                  containerClassName={"pagination"}
                                  pageClassName={"page-item"}
                                  activeClassName={"active"}
                                  onPageChange={(event) =>
                                    setPage(event.selected)
                                  }
                                  pageCount={Math.ceil(view.table_body.length / n)}
                                  breakLabel="..."
                                  previousLabel={
                                    <IconContext.Provider
                                      value={{ color: "#B8C1CC", size: "36px" }}
                                    >
                                      <AiFillLeftCircle />
                                    </IconContext.Provider>
                                  }
                                  nextLabel={
                                    <IconContext.Provider
                                      value={{ color: "#B8C1CC", size: "36px" }}
                                    >
                                      <AiFillRightCircle />
                                    </IconContext.Provider>
                                  }
                                />
                              </Box>
                            </Box>
                          </Th>
                        </Tr>
                      </Tfoot>
                    </Table>
                  </TableContainer>
                ) : null;
              })
            : null}
        </>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={"55rem"} p={[4, 8]}>
          <ModalCloseButton />
          <ModalBody mt={2}></ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AcademicPage;
