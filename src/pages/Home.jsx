import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";

import { Banner } from "../components/banner";
import SearchSection from "../components/search";
import CategoryCard from "../components/categoryCard";
import CardItems from "../components/cardItems";
import ResumeUpload from "../components/resumeUpload";

export const HomePage = () => {
  let login = localStorage.getItem("login");
  return (
    <Box className="category_container" mt={login == null ? 0 : 0}>
      <Banner />
      <SearchSection />
      <Heading as="p" size="lg" mt={10} mb={10} className="category_heading text-center">OR</Heading>
      <ResumeUpload />
      <CategoryCard />
      <CardItems />
    </Box>
  );
};
