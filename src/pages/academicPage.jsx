import React, { useState, useRef } from "react";
import ReactPaginate from "react-paginate";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Checkbox,
  useDisclosure,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import AllFormModal from "../modal/allFormModal"; 

const AcademicPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const fileInputRef = useRef(null); // Reference for the file input
  const [documents, setDocuments] = useState([]); // State to store uploaded documents
  const [page, setPage] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [index, setIndex] = useState(0);
  const n = 5;

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newDocument = {
        name: file.name,
        details: ["Additional Data 1", "Additional Data 2", "Additional Data 3"],
      };
      setDocuments([...documents, newDocument]);
    }
  };

  const handleAdd = () => {
    fileInputRef.current.click(); // Trigger the file input
  };

  const handleDelete = () => {
    setDocuments(documents.filter((_, idx) => !selectedItems.includes(idx)));
    setSelectedItems([]);
  };

  const handleCheckboxChange = (idx) => {
    if (selectedItems.includes(idx)) {
      setSelectedItems(selectedItems.filter((item) => item !== idx));
    } else {
      setSelectedItems([...selectedItems, idx]);
    }
  };

  const paginatedDocuments = documents.slice(page * n, (page + 1) * n);

  return (
    <Box className="academic_Container">
      <Box className="page-width">
        <Flex justifyContent={"space-between"} alignItems={"center"} mt={4} mb={4}>
          <Flex justifyContent={"flex-start"} alignItems={"center"}>
            <Button
              w={24}
              h={10}
              mr={2}
              color={"#fff"}
              bg={"blue"}
              fontSize={13}
              textTransform={"uppercase"}
              onClick={handleAdd}
            >
              Add
            </Button>
            <Button
              w={24}
              h={10}
              mr={2}
              color={"#fff"}
              bg={"red"}
              fontSize={13}
              textTransform={"uppercase"}
              onClick={handleDelete}
              disabled={selectedItems.length === 0}
            >
              Delete
            </Button>
            <Link to="/my-profile">
              <Button
                w={24}
                h={10}
                mr={2}
                color={"#fff"}
                bg={"black"}
                fontSize={13}
                textTransform={"uppercase"}
              >
                Back
              </Button>
            </Link>
          </Flex>
        </Flex>

        {/* Hidden file input */}
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        <TableContainer borderRadius={"10px"} className="form_tables">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th></Th>
                <Th>Document Name</Th>
                <Th>Details</Th>
                <Th>Summary</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {paginatedDocuments.map((doc, num) => (
                <Tr key={num + 1}>
                  <Td>
                    <Box>
                      <Checkbox
                        colorScheme="blue"
                        value={num}
                        onChange={() => handleCheckboxChange(num)}
                        isChecked={selectedItems.includes(num)}
                      />
                    </Box>
                  </Td>
                  <Td>
                    <Box>
                      <Text fontSize={13} as={"span"}>
                        {doc.name}
                      </Text>
                    </Box>
                  </Td>
                  <Td>
                    <Box>
                      {doc.details.map((detail, idx) => (
                        <Text key={idx} fontSize={13} as={"span"} display="block">
                          {detail}
                        </Text>
                      ))}
                    </Box>
                  </Td>
                  <Td></Td>
                  <Td>
                    <Box className="edit_Btn" data-edit={num}>
                      <Button
                        borderRadius={"10px"}
                        onClick={() => {
                          onOpen();
                          setIndex(num);
                        }}
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
                  </Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th w={"100%"} colSpan="9">
                  <Box display={"flex"} justifyContent={"flex-start"} alignItems={"flex-end"} flexDirection={"column"}>
                    <ReactPaginate
                      containerClassName={"pagination"}
                      pageClassName={"page-item"}
                      activeClassName={"active"}
                      onPageChange={(event) => setPage(event.selected)}
                      pageCount={Math.ceil(documents.length / n)}
                      breakLabel="..."
                      previousLabel={
                        <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
                          <AiFillLeftCircle />
                        </IconContext.Provider>
                      }
                      nextLabel={
                        <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
                          <AiFillRightCircle />
                        </IconContext.Provider>
                      }
                    />
                  </Box>
                </Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={"55rem"} p={[4, 8]}>
          <ModalCloseButton />
          <ModalBody mt={2}>
            <AllFormModal title="Edit Document" numValue={index} index={index} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AcademicPage;
