import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import { Banner } from "../components/banner";
import SearchSection from "../components/search";
import CategoryCard from "../components/categoryCard";
import CardItems from "../components/cardItems";

export const HomePage = () => {
  let login = localStorage.getItem("login");
  return (
    <Box className="category_container" mt={login == null ? -16 : 0}>
      <Banner />
      <SearchSection />
      <CategoryCard />
      <CardItems />
    </Box>
  );
};
