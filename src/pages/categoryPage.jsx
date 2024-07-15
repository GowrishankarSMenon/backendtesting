import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import { Banner } from "../components/banner";
import SearchSection from "../components/search";
import CategoryCard from "../components/categoryCard";
import CardItems from "../components/cardItems";

export const CategoryPage = () => {
  return (
    <Box className="category_container">
      <Banner/>
      <SearchSection/>
      <CategoryCard/>
      <CardItems/>
    </Box>
  );
};
