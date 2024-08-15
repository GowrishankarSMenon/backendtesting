import React, { useEffect, useState } from 'react';

/* Chakra UI */
import { Box, Flex, Divider } from "@chakra-ui/react";
import Description from "../components/description";
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import instance from '../axiosApis/getUrl';
import AppliedTable from '../table/AppliedTable';

const JobAppliedPage = () => {
  const navigate = useNavigate()
  const [candidate, setCandidate] = useState([])
  const getData = ()=>{

    let token = localStorage.getItem("token_Key")
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
          .get(`/ATS/Requisition/GetAllJobsApplied?CandidateID=${candidateId}`)
          .then((response) => {
            // Handle the response
            console.log("jobs applied", response);
            if (response.status === 200) {
              console.log(response.data.Table0)
              setCandidate(response.data.Table0)
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
  }

  useEffect(()=>{
    getData()
  },[])
  

  
  return (
    <Box className="jobDescription page-width" pt={10} pb={10}>
      <Box
        className=""
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
      >
        <AppliedTable jobList={candidate} new_table={""}></AppliedTable>
      </Box>
    </Box>
  )
}

export default JobAppliedPage