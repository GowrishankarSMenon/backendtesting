import React from 'react';
import { Box, Flex } from "@chakra-ui/react";
import { Banner } from '../components/banner';
import CategoryCard from '../components/categoryCard';
import CardItems from '../components/cardItems';
import SearchSection from '../components/search';

const SearchJobsPage = () => {
  return (
    <Box w={'100%'} h={'100%'} padding={"15"}>
      {/* <Banner/> */}
      <SearchSection/>
      {/* <CategoryCard/> */}
      <CardItems/>
    </Box>
  )
}

export default SearchJobsPage