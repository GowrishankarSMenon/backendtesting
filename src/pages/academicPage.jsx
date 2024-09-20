import React, { useState, useRef, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { setCookie, getCookie, deleteCookie } from "../helper/CookieStorage";
import { jwtDecode } from "jwt-decode";
import TableComponent from "../components/TableComponent";
import EditModal from "../components/EditModel";
import intialValues from "../json/academicIntialsvalues.json";
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
  candidate_Experience_ID:4273,
  worked_For_Company: "New_Company",
  company_Joining_Date: "02/01/2020",
  company_Last_Working_Date: "01/01/2024",
  candidates_Role: "test",
  position_Title: "test",
  functional_Description: "test11",
  contact_Type: 1, 
  person_Name: "test",
  contact_Address1: "N/A",
  contact_Address2: "N/A",
  contact_Country: "AF",
  contact_State: "GHO",
  contact_City: "N/A",
  contact_Zip_Code: "34535",
  contact_Telephone_No: "4534535",
  contact_Email: "test@gmail.com",
  contact_Position_Type: 1, 
  contact_CurrentEmployer: 1,
  org_Address1: "N/A",
  org_Address2: "N/A",
  org_Country: "US",
  org_State: "CA",
  org_City: "N/A",
  org_Zip_Code: "N/A",
  org_Telephone_No: "N/A",
  org_URL: "N/A",
  industry_ID: 0, //
  org_Size: "N/A",
 
};
//
const endpoints = {
  skills: {
    add: "/ATS/Candidate/InsertCandidateSkills",
    update: "/ATS/Candidate/UpdateCandidateSkill",
    delete: "/ATS/Candidate/DeleteSelectedCandidateSkills",
    get: (candidateId) =>
      `/ATS/Candidate/GetAllCandidateSkills?candidateId=${candidateId}`,
  },
  experience: {
    add: "ATS/Candidate/InsertCandidateWorkExperience",
    update: "/ATS/Candidate/UpdateCandidateWorkExperience",
    delete: "/ATS/Candidate/DeleteCandidateWorkExperience",
    get: (candidateId) =>
      `/ATS/Portal/GetCandidateExperience?candidateId=${candidateId}`,
  },
  jobpreference: {
    add: "/ATS/Portal/insertCandidateJobPreferences",
    update: "/ATS/Portal/updateCandidateJobPreferences",
    delete: null, // No delete endpoint available
    get: (candidateId) =>
      `/ATS/Portal/GetCandidateJobPreference?candidateId=${candidateId}`,
  },
  relocation: {
    add: "/ATS/Candidate/InsertCandidateRelocationPreferences",
    update: "/ATS/Candidate/UpdateCandidateRelocationPreferences",
    delete: "/ATS/Candidate/DeleteCandidateRelocationPreference",
    get: (candidateId) =>
      `/ATS/Candidate/GetAllCandidateRelocation?candidateId=${candidateId}`,
  },
  education: {
    add: "/ATS/Candidate/InsertCandidateEducation",
    update: "/ATS/Candidate/UpdateCandidateEducation",
    delete: "/ATS/Candidate/DeleteCandidateEducation",
    get: (candidateId) =>
      `/ATS/Portal/GetCandidateEducation?candidateId=${candidateId}`,
  },
  securitycredentials: {
    add: "/ATS/Candidate/InsertCandidateSecurityCredentials",
    update: "/ATS/Candidate/UpdateCandidateSecurityCredentials",
    delete: "/ATS/Candidate/DeleteCandidateSecurityCredentials",
    get: (candidateId) =>
      `/ATS/Candidate/GetAllCandidateSecurityCredentials?candidateId=${candidateId}`,
  },
  attachments: {
    add: "/ATS/Candidate/InsertCandidateAttachments",
    update: null, // No update endpoint available
    delete: null, // No delete endpoint available
    get: (candidateId) =>
      `/ATS/Candidate/GetAllCandidateAttachments?candidateId=${candidateId}`,
  },
  goals: {
    add: "/ATS/Candidate/InsertCandidateGoal",
    update: "/ATS/Candidate/UpdateCandidateGoal",
    delete: "/ATS/Candidate/DeleteCandidateGoal",
    get: (candidateId) =>
      `/ATS/Candidate/GetAllGoals?candidateId=${candidateId}`,
  },
  commonnotes: {
    get: (candidateId, userId, dcId) =>
      `/ATS/Portal/GetCommonNotesForCandidatePortal?dcId=${dcId}&dcUserID=${userId}&candidateID=${candidateId}`,
  },
  additionalitems: {
    get: (candidateId) =>
      `/ATS/Candidate/GetAllResumeAdditionalItems?candidateId=${candidateId}`,
  },
};

//
const AcademicPage = () => {
  let token_key = getCookie("token_Key"); //localStorage.getItem("token_Key");
  let user = jwtDecode(token_key);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const fileInputRef = useRef(null); // Reference for the file input
  const [documents, setDocuments] = useState([]); // State to store uploaded documents
  const [page, setPage] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [index, setIndex] = useState(0);
  const [titleDetails, setTitleDetails] = useState([]);
  const n = 5;
  const { title } = useParams();
  const hasFetchData = useRef(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isAdding,setIsAdding]=useState(false);
  const [candidateId,setCandidateId]=useState(null);
  
const trimedTitle=title.replaceAll(' ','').toLowerCase()
  const openModal = (index) => {
    setIsEditing(true);
    setSelectedRow(index);
  };
  const closeModal = () => {setIsEditing(false);
    setIsAdding(false);
  }
  const deleteModel=async (index)=>{
    const url = takeEndpoint(trimedTitle, "delete");
    let deleteParameters={};
    const updatedTitleDetails = [...titleDetails];
    const removedObj=updatedTitleDetails.splice(index, 1); // Remove the item at the index
    setTitleDetails(updatedTitleDetails); 
    if(trimedTitle==="attachments") {
      deleteParameters.candidateId= candidateId
      deleteParameters.resumeId= removedObj[0].resumeId
    }
    let obj=intialValues.DeleteParameters[trimedTitle]
    deleteParameters = removedObj[0][Object.keys(obj)]
    console.log(deleteParameters); // Log the DeleteParameters object
          try {
              // const res=await instance(url,...DeleteParameters)
              console.log("Deleted ")
          } catch (error) {
            console.log(error);
          }
    
  }
  const handleEditSave =async(updatedData) => {
    titleDetails[selectedRow]=updatedData;
    const updateURl = takeEndpoint(title.replaceAll(" ", ""), "update");
    console.log(updatedData)
    closeModal();
    try {
       const response=await instance.put(updateURl,{...updatedData});
       console.log(response)
      console.log(updateURl, "Updated");
    } catch (error) {
      console.log(error);
    }

 
  };
const handleAddSave=async (newData)=>{
   titleDetails[titleDetails.length]=newData
  const url = takeEndpoint(trimedTitle, "add");
  console.log(url, ":", title);
  console.log(newData)
  closeModal();
  try {
    const response = await instance.post(url, { ...newData });
    console.log(response);
  } catch (error) {
    console.error("Error Config:", error);
  }

}
  const takeEndpoint = (title, action) => {
    const endpointsForTitle = endpoints[title.toLowerCase()];
    return endpointsForTitle ? endpointsForTitle[action] : null;
  };
  const fetchEndpoint = (title, candidateId, additionalParams = {}) => {
    const endpointConfig = endpoints[title.toLowerCase()];
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
    return typeof getFetchEndpoint === "function"
      ? getFetchEndpoint(
          candidateId,
          additionalParams.userId,
          additionalParams.dcId
        )
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
          console.log(response.data);
          const candidateId = response.data.data;
          setCandidateId(candidateId);
    
          const url = fetchEndpoint(trimedTitle, candidateId, user);
          if (url) {
            instance.get(url).then((response) => {
              console.log("Print", response);
              if (response.status === 200) {
                console.log(response.data.Table0[0]);
                setTitleDetails((prev) => [...prev, response.data.Table0[0]]);
              }
            });
          }
        }
      })

      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    if (!hasFetchData.current) {
      getData();
      hasFetchData.current = true;
    }
  }, []);
  useEffect(() => {
    console.log("Title Details Updated:", titleDetails);
  }, [titleDetails]); // Log titleDetails whenever it changes

  const handleAdd = () => {
    // fileInputRef.current.click(); // Trigger the file input
    setIsAdding(prev=>!prev);
    console.log(candidateId)

  };
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
            {/* <Button
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
            </Button> */}
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
        {/* <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />  */}
        <div>
          {Array.isArray(titleDetails) && titleDetails.length > 0 ? (
            titleDetails?.map((item, index) =>
              !isEditing ? (
                <TableComponent
                  key={index}
                  data={item}
                  onEditClick={()=>openModal(index)}
                  onDelete={()=> deleteModel(index)}
                />
              ) : (
                <EditModal
                  key={index}
                  index={index}
                  data={titleDetails[selectedRow]}
                  onSave={handleEditSave}
                  onClose={closeModal}
                />
              )
            )
          ) : (
            <p>No details available</p>
          )}
          
        </div>

      {/* Render the add modal */}
      {isAdding && (
        <EditModal
          candidateId={candidateId}
          index={titleDetails.length} 
          data={intialValues[trimedTitle]} 
          onSave={(newData) => handleAddSave(newData)} // Handle adding new data
          onClose={closeModal}
        />
      )}
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={"55rem"} p={[4, 8]}>
          <ModalCloseButton />
          <ModalBody mt={2}>
            <AllFormModal
              title="Edit Document"
              numValue={index}
              index={index}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AcademicPage;
