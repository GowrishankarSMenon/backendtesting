import React, { useEffect, useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import JobTable from "../components/jobTable";
import ResponseButton from "../components/responseButton";
import instance from "../axiosApis/getUrl";
import jobList from "../json/jobListData.json";
import table_head from "../json/tableHeader.json";
import { useNavigate } from "react-router-dom";

const JobDescriptionPage = () => {
  const [data, setData] = useState()
  const navigate = useNavigate()
  const getData = () => {

    instance
      .get(`ATS/Requisition/GetAllJobsApplied?CandidateID=254`)
      .then((response) => {
        // Handle the response
        console.log("REquest Post", response);
        if (response.status === 200) {
          console.log(response.data.Table0[0])
          setData(response.data.Table0[0])
        }
      })
      .catch((error) => {
        // Handle the error
        if (error.response.status===401){
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
    <Box mb={24} className="user-jobs-lists page-width">
      <Box>
        <ResponseButton/>
        <JobTable jobList={data} table_head={table_head} table="Applied"/>
      </Box>
    </Box>
  );
};

export default JobDescriptionPage;
