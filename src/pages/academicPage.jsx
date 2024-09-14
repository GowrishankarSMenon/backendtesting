import React, { useState, useRef, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { setCookie, getCookie, deleteCookie } from "../helper/CookieStorage";
import { jwtDecode } from "jwt-decode";
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
import { useParams } from "react-router-dom";
import instance from "../axiosApis/getUrl";
//dummys
const dummyExperiance = {
  candidate_Id: 2170,
  worked_For_Company: "New_Company",
  company_Joining_Date: "02/01/2020",
  company_Last_Working_Date: "01/01/2024",
  candidates_Role: "test",
  position_Title: "test",
  functional_Description: "test11",
  contact_Type: 1,  // Assuming Recruiter is mapped to 1
  person_Name: "test",
  contact_Address1: "N/A",
  contact_Address2: "N/A",
  contact_Country: "AF",
  contact_State: "GHO",
  contact_City: "N/A",
  contact_Zip_Code: "34535",
  contact_Telephone_No: "4534535",
  contact_Email: "test@gmail.com",
  contact_Position_Type: 1,  // Assuming this is mapped to 1
  contact_CurrentEmployer: 1,  // Assuming "Yes" is mapped to 1
  org_Address1: "N/A",
  org_Address2: "N/A",
  org_Country: "US",
  org_State: "CA",
  org_City: "N/A",
  org_Zip_Code: "N/A",
  org_Telephone_No: "N/A",
  org_URL: "N/A",
  industry_ID: 0,  // Assuming "Engineering" is mapped to 0 (should be the actual ID)
  org_Size: "N/A"
};
const dummyGoals = {
  candidate_Id: 2170,
  career_Goal: "goal 1 for test",
  goal_Priority: 0
}
const dummySkills = {
  candidate_Id: 0,
  skillDesc: "string",
  experience_Grade: 0,
  worked_On_This_For: 0,
  grade_Willing_to_Work: 0,
  last_Used: 0,
  summary: "string",
  request_Training: 0,
  skills_ID: 0
}
const dummyAttachment = {
  candidateId: 2170,
  addedBy: 0,
  addedDate: "2024-09-12T15:25:26.015Z",
  file_Path: "Ma",
  isUploaded: 0,
  isDetached: 0,
  isDefault: 0,
  isFormatted: 0,
  attachType: 0,
  candidate_Visibility: 0,
  is_Searchable: 0,
  is_Primary: 0,
  subContractorId: 0,
  requisitionId: 0
};
const DummyJobPerifeance = {
  candidateId: 2170,
  positionTitle: 0,
  desiredSalary: 10000,  // Not 0
  desiredLocation: 0,
  jobCategory: "Sales and Marketing",  // Not "string"
  jobTermId: 0,
  workType: 0,  // Could be different if mapped (e.g., Part Time)
  jobTypeID: "N/A",  // Not "string"
  willingToTeleCommute: 0,  // "Not Willing" mapped to 0
  willingToTravel: 1,  // Not 0
  idealCompCat: 0,
  compSize: 0,  // Could be different if mapped (e.g., Unknown)
  compDesc: "test",  // Not "string"
  avFrom: 0,  // N/A represented as 0
  avFromDate: "N/A",  // Not "string"
  acctIds: "Administration, asasas",  // Not "string"
  desiredPosTitle: "tester",  // Not "string"
  altPostTitle: "tester",  // Not "string"
  shift: "N/A",  // Not "string"
  desWageAmount: 0,  // N/A represented as 0
  desWageCurr: "0",  // Not "string"
  desWagetype: 0,  // N/A represented as 0
  workStyle: "Independent",  // Not "string"
  dressCode: "Uniform",  // Not "string"
  istravelApp: true,
  trvFreq: 100,  // Not 0
  trvCons: "test",  // Not "string"
  willingToRelocate: true,
  relocateComments: "test",  // Not "string"
  prefLang: "Arabic",  // Not "string"
  timeMax: 0,
  timeUnit: 0,  // Assuming 0 corresponds to "Minutes"
  distanceMax: 2,
  disUnit: 0,  // Assuming 0 corresponds to "KMs"
  commComment: "test",  // Not "string"
  addInfo: "test",  // Not "string"
  termOfNotice: 0,  // N/A represented as 0
  termOfNotIntv: 0,  // N/A represented as 0
  carrObj: "N/A",  // Not "string"
  carrSumm: "N/A"  // Not "string"
}
const dummyCredentials ={
  candidateId: 2170,
  securityCredentialId: 1135,
  securityCredentialName: 1,
  securityCredentialNameDesc: "None",
  issuingAuthority: "test111",
  issuingCountry: "IN",
  issuingCountryName: "India",
  description: "N/A",
  valid_Start_Date: "2024-09-13T12:51:48.127Z",
  valid_End_Date: "2024-09-13T12:51:48.127Z",
  first_Issue_Date: "2024-09-13T12:51:48.127"
};


//
const endpoints = {
  skills: {
    add: "/ATS/Candidate/InsertCandidateSkills",
    update: "/ATS/Candidate/UpdateCandidateSkill",
    delete: "/ATS/Candidate/DeleteSelectedCandidateSkills",
    get: (candidateId) => `/ATS/Candidate/GetAllCandidateSkills?candidateId=${candidateId}`,
  },
  experience: {
    add: "ATS/Candidate/InsertCandidateWorkExperience",
    update: "/ATS/Candidate/UpdateCandidateWorkExperience",
    delete: "/ATS/Candidate/DeleteCandidateWorkExperience",
    get: (candidateId) => `/ATS/Portal/GetCandidateExperience?candidateId=${candidateId}`,
  },
  jobpreference: {
    add: "/ATS/Portal/insertCandidateJobPreferences",
    update: "/ATS/Portal/updateCandidateJobPreferences",
    delete: null, // No delete endpoint available
    get: (candidateId) => `/ATS/Portal/GetCandidateJobPreference?candidateId=${candidateId}`,
  },
  relocation: {
    add: "/ATS/Candidate/InsertCandidateRelocationPreferences",
    update: "/ATS/Candidate/UpdateCandidateRelocationPreferences",
    delete: "/ATS/Candidate/DeleteCandidateRelocationPreference",
    get: (candidateId) => `/ATS/Candidate/GetAllCandidateRelocation?candidateId=${candidateId}`,
  },
  education: {
    add: "/ATS/Candidate/InsertCandidateEducation",
    update: "/ATS/Candidate/UpdateCandidateEducation",
    delete: "/ATS/Candidate/DeleteCandidateEducation",
    get: (candidateId) => `/ATS/Portal/GetCandidateEducation?candidateId=${candidateId}`,
  },
  securitycredentials: {
    add: "/ATS/Candidate/InsertCandidateSecurityCredentials",
    update: "/ATS/Candidate/UpdateCandidateSecurityCredentials",
    delete: "/ATS/Candidate/DeleteCandidateSecurityCredentials",
    get: (candidateId) => `/ATS/Candidate/GetAllCandidateSecurityCredentials?candidateId=${candidateId}`,
  },
  attachments: {
    add: "/ATS/Candidate/InsertCandidateAttachments",
    update: null, // No update endpoint available
    delete: null, // No delete endpoint available
    get: (candidateId) => `/ATS/Candidate/GetAllCandidateAttachments?candidateId=${candidateId}`,
  },
  goals: {
    add: "/ATS/Candidate/InsertCandidateGoal",
    update: "/ATS/Candidate/UpdateCandidateGoal",
    delete: "/ATS/Candidate/DeleteCandidateGoal",
    get: (candidateId) => `/ATS/Candidate/GetAllGoals?candidateId=${candidateId}`,
  },
  commonnotes: {
    get: (candidateId, userId, dcId) => `/ATS/Portal/GetCommonNotesForCandidatePortal?dcId=${dcId}&dcUserID=${userId}&candidateID=${candidateId}`,
  },
  additionalitems: {
    get: (candidateId) => `/ATS/Candidate/GetAllResumeAdditionalItems?candidateId=${candidateId}`,
  },
};

//
const AcademicPage = () => {

  let token_key = getCookie('token_Key');//localStorage.getItem("token_Key");
  let user = jwtDecode(token_key)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const fileInputRef = useRef(null); // Reference for the file input
  const [documents, setDocuments] = useState([]); // State to store uploaded documents
  const [page, setPage] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [index, setIndex] = useState(0);
  const [titleDetails, setTitileDetails] = useState([]);
  const n = 5;
  const { title } = useParams();
  //

  const takeEndpoint = (title, action) => {
    const endpointsForTitle = endpoints[title.toLowerCase().trim()];
    return endpointsForTitle ? endpointsForTitle[action] : null;
  };
  const fetchEndpoint = (title, candidateId, additionalParams = {}) => {
    const endpointConfig = endpoints[title.toLowerCase().trim()];
    if (!endpointConfig) {
      console.error(`No endpoint configuration found for title: ${title}`);
      return null;
    }

    const getFetchEndpoint = endpointConfig.get;
    if (!getFetchEndpoint) {
      console.error(`No GET endpoint configured for title: ${title}`);
      return null;
    }

    // Construct the URL with candidateId and additional parameters if needed
    return typeof getFetchEndpoint === 'function'
      ? getFetchEndpoint(candidateId, additionalParams.userId, additionalParams.dcId)
      : getFetchEndpoint;
  };

  //
  const getData = () => {

    instance
      .get(`Common/UserInfo/GetCandidateID?userID=${user.UserId}`)
      .then((response) => {
        // Handle the response
        console.log("REquest Post", response);
        if (response.status === 200) {
          console.log(response.data)
          const candidateId = response.data.data
          const trimedTitle = title.replaceAll(' ', '');
          console.log(trimedTitle)
          const url = fetchEndpoint(trimedTitle, candidateId, user)
          if (url) {
            instance
              .get(url)
              .then((response) => {
                // Handle the response
                console.log("Print", response);
                if (response.status === 200) {
                  console.log(response.data.Table0[0])
                  setTitileDetails(response.data.Table0[0])
                }
              })
          }
        }
      })
      .catch((error) => {

        console.error(error);
      });
  }


  useEffect(() => {
    getData()
  }, [title])

  useEffect(() => {
    console.log("Title Details Updated:", titleDetails);
  }, [titleDetails]); // Log titleDetails whenever it changes
  //
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const newDocument = {
        name: file.name,
        details: ["Additional Data 1", "Additional Data 2", "Additional Data 3"],
      };
      setDocuments([...documents, newDocument]);

      const trimedTitle = title.replaceAll(' ', '');
      const url = takeEndpoint(trimedTitle, "update");
      console.log(url, ":", title.toLocaleLowerCase().trim())
      try {
        const response = await instance.put(url, { ...dummyExperiance });
        console.log(response)
      } catch (error) {
        console.error('Request failed with error:', error);

        if (error.response) {
          // Server responded with a status other than 2xx
          console.error('Error Response Data:', error.response.data);
          console.error('Error Response Status:', error.response.status);
          console.error('Error Response Headers:', error.response.headers);
        } else if (error.request) {
          // No response received
          console.error('Error Request:', error.request);
        } else {
          // Error setting up the request
          console.error('Error Message:', error.message);
        }

        console.error('Error Config:', error.config);
      }
    }
  };
  //*************** */


  //*************** */
  const handleAdd = () => {
    fileInputRef.current.click(); // Trigger the file input

  };

  const handleDelete = () => {
    setDocuments(documents.filter((_, idx) => !selectedItems.includes(idx)));
    setSelectedItems([]);
    const trimedTitle = title.trim();
    const url = takeEndpoint(trimedTitle, "delete");
    console.log(url)
  };

  const handleCheckboxChange = (idx) => {
    if (selectedItems.includes(idx)) {
      setSelectedItems(selectedItems.filter((item) => item !== idx));
    } else {
      setSelectedItems([...selectedItems, idx]);
    }
  };

  const paginatedDocuments = documents.slice(page * n, (page + 1) * n);
  console.log(paginatedDocuments)
  return (
    <Box className="academic_Container">
      <div>
        {titleDetails ? (Object.entries(titleDetails)?.map(([key, value], index) => (
          <p key={index}>
            <strong>{key.replace(/_/g, " ")}:</strong> {value || "N/A"}
          </p>
        ))) : ("")}
      </div>
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
                      {doc.details?.map((detail, idx) => (
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
