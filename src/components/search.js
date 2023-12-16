import React from "react";
import { Box, Flex, Input, Select, Button } from "@chakra-ui/react";
import { select_sector } from "../selectData/selectOption";
import { select_country } from "../selectData/selectCountry";

const SearchSection = () => {
  console.log(select_sector);
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
            <Box className="" w={"22%"} maxWidth={"215px"}>
              <Select placeholder="Job Category">
                {select_sector.map((select, i) => {
                  return (
                    <option key={i} value={select.toLowerCase()}>
                      {select}
                    </option>
                  );
                })}
              </Select>
            </Box>
            <Box className="" w={"22%"} maxWidth={"215px"}>
              <Select placeholder="Select country">
                {select_country.map((select, i) => {
                  return (
                    <option key={i} value={select.code}>
                      {select.country}
                    </option>
                  );
                })}
              </Select>
            </Box>
            <Box className="button button-wrapper" w={"15%"} maxWidth={"170px"}>
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
