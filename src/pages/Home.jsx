import React, { useEffect, useState } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import instance from "../axiosApis/getUrl";
import { Banner } from "../components/banner";
import SearchSection from "../components/search";
import CategoryCard from "../components/categoryCard";
import CardItems from "../components/cardItems";
import ResumeUpload from "../components/resumeUpload";

export const HomePage = () => {
  const [recentJobs,SetRecentJobs] = useState([])
  const navigate = useNavigate();

  const getData = () => {

    instance
      .get("/ATS/Portal/GetTopJobs?rowCount=5&isInternalPosted=1&isExternalPosted=1&Country=US")
      .then((response) => {
        // Handle the response
        console.log("REquest Post", response);
        if (response.status === 200) {
          console.log(response.data.Table0)
          SetRecentJobs(response.data.Table0)
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
  console.log("yoop")
},[])
  let login = localStorage.getItem("login");
  return (
    <Box className="category_container" mt={login == null ? 0 : 0}>
      <Banner />
      <SearchSection />
      <Heading as="p" size="lg" mt={10} mb={10} className="category_heading text-center">OR</Heading>
      <ResumeUpload />
      <CategoryCard />
      <CardItems recentJobs={recentJobs}/>
    </Box>
  );
};
