import React, { useEffect, useState } from "react";

import { Box, Text, Button } from "@chakra-ui/react";

import jobList from "../json/jobListData.json";
import table_head from "../json/tableHeader.json";
import SaveTable from "../table/tableLayout";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { setCookie, getCookie, deleteCookie } from "../helper/CookieStorage";

import instance from "../axiosApis/getUrl";

const SaveJobsPage = () => {

  const [data,setData] = useState({})
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
                .get(`ATS/Portal/GetSavedJobs?dcUserID=${user.UserId}`)
                .then((response) => {
                  // Handle the response
                  console.log("REquest Post", response);
                  if (response.status === 200) {
                    console.log(response.data.Table0,"saved jobs")
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
    <Box mb={24} className="user-jobs-lists page-width">
      <Box>
        <div className="gap-5 flex md:flex-row flex-col md:mt-20 mt-10 justify-start md:items-center">
          <Button
            className="w-40 !text-white !font-normal !bg-[#FF3B3B]"
          >
            Delete
          </Button>
          <Button className="w-40 !font-normal  !text-white !bg-[#4160D8]">Add Alert</Button>
        </div>
        <SaveTable jobList={data} table_head={table_head} table="Save" />
      </Box>
    </Box>
  );
};

export default SaveJobsPage;
