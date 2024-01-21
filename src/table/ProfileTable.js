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
import FormModal from "../modal/formModal";
import JobForm from "../modal/JobForm";
import ObjectForm from "../modal/ObjectForm";

const ProfileTable = ({ tableView, tableName, details, candidate }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log("name:", tableName);
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
                                  Personal Details
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
                                    Profile Name
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].Added_By != null ||
                                      candidate[0].Added_By != ""
                                        ? candidate[0].Added_By
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    Salutation
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].SSN != ""
                                        ? candidate[0].SSN
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    First Name
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].First_Name != null ||
                                      candidate[0].First_Name != ""
                                        ? candidate[0].First_Name
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    Last Name
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].Last_Name != null ||
                                      candidate[0].Last_Name != ""
                                        ? candidate[0].Last_Name
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    Middle Name/Initial
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].Middle_Name != null ||
                                      candidate[0].Middle_Name != ""
                                        ? candidate[0].Middle_Name
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    Known As
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].KnownAs != null ||
                                      candidate[0].KnownAs != ""
                                        ? candidate[0].KnownAs
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    E-mail
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].Email_ID != null ||
                                      candidate[0].Email_ID != ""
                                        ? candidate[0].Email_ID
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    Mother's Name'
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].Mother_Name != null ||
                                      candidate[0].Mother_Name != ""
                                        ? candidate[0].Mother_Name
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    Country
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].Country != null ||
                                      candidate[0].Country != ""
                                        ? candidate[0].Country
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    State/Province
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].State != null ||
                                      candidate[0].State != ""
                                        ? candidate[0].State
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    City
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].City != null ||
                                      candidate[0].City != ""
                                        ? candidate[0].City
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    Address
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].Address1 != null ||
                                      candidate[0].Address1 != ""
                                        ? candidate[0].Address1
                                        : ""}

                                      {candidate[0].Address2 != null ||
                                      candidate[0].Address2 != ""
                                        ? candidate[0].Address2
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    Zip/Postal Code
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].Zipcode != null ||
                                      candidate[0].Zipcode != ""
                                        ? candidate[0].Zipcode
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    Gender
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].Gender != null ||
                                      candidate[0].Gender != ""
                                        ? candidate[0].Gender
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    Marital Status
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].Marital_Status_Id != null ||
                                      candidate[0].Marital_Status_Id != ""
                                        ? candidate[0].Marital_Status_Id
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    Birth Place
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].Birth_Place != null ||
                                      candidate[0].Birth_Place != ""
                                        ? candidate[0].Birth_Place
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    Birth Date
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].DOB != null ||
                                      candidate[0].DOB != ""
                                        ? candidate[0].DOB
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    Nationality
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].NationalityCode != null ||
                                      candidate[0].NationalityCode != ""
                                        ? candidate[0].NationalityCode
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    Residency Country
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].ResidencyCountryCode !=
                                        null ||
                                      candidate[0].ResidencyCountryCode != ""
                                        ? candidate[0].ResidencyCountryCode
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    Citizenship Country
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].CitizenshipCountryCode !=
                                        null ||
                                      candidate[0].CitizenshipCountryCode != ""
                                        ? candidate[0].CitizenshipCountryCode
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    Legal Identification Number
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
                    <Tr>
                      <Td>
                        <Table>
                          <TableCaption
                            placement={"top"}
                            pl={1}
                            pr={1}
                            pt={0}
                            pb={0}
                            mt={4}
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
                                  Contact Details
                                </Heading>
                              </Box>
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
                                    Contact Preference
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].Contact_Preference !=
                                        null ||
                                      candidate[0].Contact_Preference != ""
                                        ? candidate[0].Contact_Preference
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    Phone #
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].Primary_PhNo != null ||
                                      candidate[0].Primary_PhNo != ""
                                        ? candidate[0].Primary_PhNo
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    Alt.Phone #
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].Alternate_PhNo != null ||
                                      candidate[0].Alternate_PhNo != ""
                                        ? candidate[0].Alternate_PhNo
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    Mobile #
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].Mobile_No != null ||
                                      candidate[0].Mobile_No != ""
                                        ? candidate[0].Mobile_No
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    Business Phone #
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].Work_PhNo != null ||
                                      candidate[0].Work_PhNo != ""
                                        ? candidate[0].Work_PhNo
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    Fax #
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].Fax_No != null ||
                                      candidate[0].Fax_No != ""
                                        ? candidate[0].Fax_No
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    Pager #
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].Pager_No != null ||
                                      candidate[0].Pager_No != ""
                                        ? candidate[0].Pager_No
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    Ext #
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].Ext_Number != null ||
                                      candidate[0].Ext_Number != ""
                                        ? candidate[0].Ext_Number
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    Web Site
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].WebSite_Address != null ||
                                      candidate[0].WebSite_Address != ""
                                        ? candidate[0].WebSite_Address
                                        : ""}
                                    </Text>
                                  ) : null}
                                </Box>
                              </Td>
                            </Tr>
                          </Tbody>
                        </Table>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Table>
                          <TableCaption
                            placement={"top"}
                            pl={1}
                            pr={1}
                            pt={0}
                            pb={0}
                            mt={4}
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
                                  Professional Details
                                </Heading>
                              </Box>
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
                                    Career Level
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
                                    Total Experience
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
                                    Current Position Title
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].Current_Position_Title !=
                                        null ||
                                      candidate[0].Current_Position_Title != ""
                                        ? candidate[0].Current_Position_Title
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    Current Salary/Rate
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <>
                                      <Text as={"span"} fontSize={14}>
                                        {candidate[0]
                                          .Current_Salary_Currency_Code !=
                                          null ||
                                        candidate[0]
                                          .Current_Salary_Currency_Code != ""
                                          ? candidate[0]
                                              .Current_Salary_Currency_Code
                                          : ""}
                                      </Text>
                                      <Text as={"span"} fontSize={14}>
                                        {candidate[0].Current_Salary != null ||
                                        candidate[0].Current_Salary != ""
                                          ? candidate[0].Current_Salary
                                          : ""}
                                      </Text>
                                    </>
                                  ) : null}
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
                                    Authorization To Work
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box></Box>
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
                                    Security Clearance
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
                                    Immediate Start Indicator
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].Immediate_Start_Indicator !=
                                        null ||
                                      candidate[0].Immediate_Start_Indicator !=
                                        ""
                                        ? candidate[0].Immediate_Start_Indicator
                                        : ""}
                                    </Text>
                                  ) : null}
                                </Box>
                              </Td>
                            </Tr>
                          </Tbody>
                        </Table>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Table>
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
                                  Referral Details
                                </Heading>
                              </Box>
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
                                    Referral Source
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].ReferralSource != null ||
                                      candidate[0].ReferralSource != ""
                                        ? candidate[0].ReferralSource
                                        : ""}
                                    </Text>
                                  ) : null}
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
                                    Specific Source
                                  </Text>
                                </Box>
                              </Td>
                              <Td w={"10%"} pb={2}>
                                <Box>:</Box>
                              </Td>
                              <Td pb={2}>
                                <Box>
                                  {candidate.length > 0 ? (
                                    <Text as={"span"} fontSize={14}>
                                      {candidate[0].SpecificSource != null ||
                                      candidate[0].SpecificSource != ""
                                        ? candidate[0].SpecificSource
                                        : ""}
                                    </Text>
                                  ) : null}
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
            {tableView === "profile" ? (
              <FormModal editForm={candidate[0]} />
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

export default ProfileTable;
