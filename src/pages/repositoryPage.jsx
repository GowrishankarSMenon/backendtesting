import React, { useEffect, useState } from "react";
import { Box, Text, Button, Accordion } from "@chakra-ui/react";
import JobTable from "../components/jobTable";
import AccordianInput from "../helper/AccordianInput";
import instance from "../axiosApis/getUrl";
import { useNavigate } from "react-router-dom";

const inputGrid = [
  { title: "Employment Offer Letter", "table-head": true, layout: "Respository" },
];

const RepositoryPage = () => {
  const [data,setData] = useState()
  const navigate = useNavigate()
  const getData = () => {

    instance
      .get(`ATS/Portal/GetEmployee_Attachment_Document?Candidate_ID=254&Requisition_ID=0`)
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
