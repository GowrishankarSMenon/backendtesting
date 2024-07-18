import React from "react";
import { Box, Flex, Input, Select, Button } from "@chakra-ui/react";
import { select_sector } from "../selectData/selectOption";
import { select_country } from "../selectData/selectCountry";

const SearchSection = () => {
  // console.log(select_sector);
  return (
    <Box className="search-bar-container">
      <Box className="search-bar-box">
        <Box className="search-bar-layout">
          <Flex
            align="center"
            justify="space-between"
            className="inner-search-wrapper"
          >
            <Box className="" w={"35%"} maxWidth={"310px"}>
              <Input placeholder="Enter Skills/Designations/compaines" />
            </Box>
            <Box w={{ base: "100%", sm: "50%", md: "35%", lg: "22%" }} maxWidth="215px" m="0 auto">
              <Select
                placeholder="Job Category"
                borderColor="gray.300"
                borderBottom="1px solid #e2e8f0"
                _hover={{ borderColor: "gray.400" }}
                _focus={{ borderColor: "gray.500",boxShadow: "0 0 0 1px gray.500 !important"  }}
                bg="white"
                color="gray.700"
                size="md"
                sx={{
                  "::-webkit-scrollbar": {
                    width: "8px",
                  },
                  "::-webkit-scrollbar-track": {
                    background: "#f1f1f1",
                  },
                  "::-webkit-scrollbar-thumb": {
                    background: "#888",
                    borderRadius: "8px",
                  },
                  "::-webkit-scrollbar-thumb:hover": {
                    background: "#555",
                  },
                  option: {
                    fontSize: "14px",
                    fontWeight: "500",
                    minHeight: "32px  !important",
                    lineHeight: "32px  !important", // Adjust the line height if needed
                    padding: "8px 12px  !important", // Adjust padding as necessary
                  },
                  "option:first-of-type": {
                    color: "gray",
                  },
                }}
              >
                {select_sector.map((select, i) => (
                  <option key={i} value={select.toLowerCase()}
                  >
                    {select}
                  </option>
                ))}
              </Select>
            </Box>
            <Box className="" w={"30%"} maxWidth={"300px"}>
              <Select
                placeholder="Select country"
                borderColor="gray.300"
                _hover={{ borderColor: "gray.400" }}
                _focus={{ borderColor: "gray.500", boxShadow: "0 0 0 1px gray.500" }}
                bg="white"
                color="gray.700"
                size="md"
                sx={{
                  "::-webkit-scrollbar": {
                    width: "8px",
                  },
                  "::-webkit-scrollbar-track": {
                    background: "#f1f1f1",
                  },
                  "::-webkit-scrollbar-thumb": {
                    background: "#888",
                    borderRadius: "8px",
                  },
                  "::-webkit-scrollbar-thumb:hover": {
                    background: "#555",
                  },
                  option: {
                    fontSize: "14px",
                    fontWeight: "500",
                  },
                  "option:first-of-type": {
                    color: "gray",

                  },
                }}
              >
                {select_country.map((select, i) => {
                  return (
                    <option key={i} value={select.code} style={{ padding: "12px", margin: "12px" }}>
                      {select.country}
                    </option>
                  );
                })}
              </Select>
            </Box>
            <Box className="button button-wrapper" w={"15%"} maxWidth={"170px"} ml={"1rem"}>
              <Button size="md" className="search-btn">
                Search
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchSection;
