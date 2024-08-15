import React, { useEffect, useState } from "react";
import { Box, Text, Button, Accordion } from "@chakra-ui/react";
import AccordianInput from "../helper/AccordianInput";
import instance from "../axiosApis/getUrl";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { setCookie, getCookie, deleteCookie } from "../helper/CookieStorage";

const inputGrid = [
  { title: "Employment Offer Letter", "table-head": true, layout: "Respository" },
];

const RepositoryPage = () => {
  const [data,setData] = useState({
    "Columns": [
        "EO_Attachment_Id",
        "CE_ID",
        "Candidate_Employment_Offer_ID",
        "File_Path",
        "Is_Uploaded",
        "Added_Date",
        "Added_By",
        "Attachment_Type",
        "AttachType_Desc",
        "IsAcceptanceRequired",
        "IsAcceptanceRequiredDesc",
        "AcceptanceStatus",
        "AcceptanceStatusDesc",
        "Cand_Acceptance_Date",
        "Added_By_ID",
        "Reference_ID",
        "Position_Title",
        "Requisition_Id",
        "IsResponse_DocUploaded",
        "Mandatory_Flag",
        "Document_name",
        "IsResponse_DocRequired"
    ]
})
  const navigate = useNavigate()
  const getData = () => {

    let token = getCookie('token_Key');//localStorage.getItem("token_Key")
    let user = jwtDecode(token)
    console.log(user)
    let candidateId = ""
    
    instance
          .get(`Common/UserInfo/GetCandidateID?userID=${user.UserId}`)
          .then((response) => {
            // Handle the response
            console.log("REquest Post", response);
            if (response.status === 200) {
              console.log(response.data)
              candidateId = response.data.data
              instance
                .get(`ATS/Portal/GetEmployee_Attachment_Document?Candidate_ID=254&Requisition_ID=0`)
                .then((response) => {
                  // Handle the response
                  console.log("REquest Post", response);
                  if (response.status === 200) {
                    console.log(response.data.Table0)
                    setData(response.data.Table0)
                  }
                })
            }
          })
          .catch((error) => {
            // Handle the error
            if (error.response.status==401){
              localStorage.setItem("login", false);
              localStorage.setItem("token","")
              navigate("/login")
            }
            console.error(error);
        });
  };

  useEffect(()=>{
    getData()
  },[])

  return (
    <Box mt={8} mb={24} className="user-jobs-lists page-width">
      <Box w={"100%"}>
        <Accordion defaultIndex={[0]} allowMultiple>
          {inputGrid.length > 0
            ? inputGrid.map((item, i) => {
                return (
                  <AccordianInput
                    index={1}
                    title="Employment Offer Letter"
                    head={true}
                    layout={"Respository"}
                    table={"Respository"}
                    list={data}
                  />
                );
              })
            : null}
        </Accordion>
      </Box>
    </Box>
  );
};

export default RepositoryPage;
