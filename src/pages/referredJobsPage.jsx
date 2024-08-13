import React, { useEffect, useState } from "react";
import { Box, Flex, Accordion, useStatStyles } from "@chakra-ui/react";
import AccordianInput from "../helper/AccordianInput";
import instance from "../axiosApis/getUrl";
import { useNavigate } from "react-router-dom";

const ReferredJobsPage = () => {
  const [candidate, setCandidate] = useState([])
  const [employee, setEmployee] = useState([])
  const navigate = useNavigate()

  const getData = ()=>{
    instance
          .get(`ATS/Portal/GetCandReferredReqList?candidateId=2170&dcId=34`)
          .then((response) => {
            // Handle the response
            console.log("REquest Post", response);
            if (response.status === 200) {
              console.log(response.data.Table0)
              setCandidate(response.data.Table0)
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
    instance
        .get(`ATS/Portal/GetVendorCandReferredReqList?candidateId=1034&dcId=34`)
        .then((response) => {
          // Handle the response
          console.log("REquest Post", response);
          if (response.status === 200) {
            console.log(response.data.Table0)
            setEmployee(response.data.Table0)
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
    <Box w={"100%"} className="referredJob_container">
      <Box w={"100%"} className="page-width" pt={12} pb={12}>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordianInput
            index={1}
            title={"Employee Referred Jobs"}
            head={true}
            layout={"Referred"}
            list={candidate}
          />
          <AccordianInput
            index={1}
            title={"Vendor Referred Jobs"}
            head={true}
            layout={"Referred"}
            list={employee}
          />
        </Accordion>
      </Box>
    </Box>
  );
};

export default ReferredJobsPage;
