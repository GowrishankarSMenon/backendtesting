import React, { useState } from "react";
import { Box, Flex, Input, Menu, MenuButton, MenuList, MenuItem, Button, MenuDivider } from "@chakra-ui/react";
import { select_sector } from "../selectData/selectOption";
import { select_country } from "../selectData/selectCountry";
import { ChevronDownIcon } from "@chakra-ui/icons";

const ScrollMenuList = ({ items, onItemClick }) => (
  <MenuList
    maxHeight="300px"
    overflowY="scroll"
    sx={{
      '&::-webkit-scrollbar': {
        width: '8px',
      },
      '&::-webkit-scrollbar-track': {
        background: '#f1f1f1',
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#888',
        borderRadius: '8px',
      },
      '&::-webkit-scrollbar-thumb:hover': {
        background: '#555',
      },
    }}
  >
    {items.map((item, i) => (
      <>
        <MenuItem key={i} onClick={() => onItemClick(item)}>
          {item}
        </MenuItem>
        <MenuDivider />
      </>
    ))}
  </MenuList>
);

const SearchSection = () => {
  const [selectedJobOption, setSelectedJobOption] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <Box className="search-bar-container">
      <Box className="search-bar-box">
        <Box className="search-bar-layout">
          <Flex align="center" justify="space-between" className="inner-search-wrapper">
            <Box w="33%" maxWidth="300px">
              <Input placeholder="Enter Skills/Designations/Companies" />
            </Box>
            <Box w="22%" maxWidth="215px">
              <Menu>
                <MenuButton
                  px={4}
                  py={2}
                  w="100%"
                  borderRadius="md"
                  borderWidth="1px"
                  transition="all 0.2s"
                  _hover={{ bg: 'gray.400' }}
                  _expanded={{ bg: 'blue.400' }}
                  _focus={{ boxShadow: 'outline' }}
                >
                  <span className="flex justify-between w-full items-center">
                    {selectedJobOption || <>Job Category <ChevronDownIcon /></>}
                  </span>
                </MenuButton>
                <ScrollMenuList items={select_sector} onItemClick={setSelectedJobOption} />
              </Menu>
            </Box>
            <Box w="30%" maxWidth="300px">
              <Menu>
                <MenuButton
                  px={4}
                  py={2}
                  w="100%"
                  borderRadius="md"
                  borderWidth="1px"
                  transition="all 0.2s"
                  _hover={{ bg: 'gray.400' }}
                  _expanded={{ bg: 'blue.400' }}
                  _focus={{ boxShadow: 'outline' }}
                >
                  <span className="flex justify-between w-full items-center">
                    {selectedCountry || <>Select country <ChevronDownIcon /></>}
                  </span>
                </MenuButton>
                <ScrollMenuList items={select_country.map(c => c.country)} onItemClick={setSelectedCountry} />
              </Menu>
            </Box>
            <Box w="15%" maxWidth="170px">
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
