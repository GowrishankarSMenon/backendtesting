import React from 'react';

/* Chakra UI */
import { Box, Flex, Divider } from "@chakra-ui/react";
import Description from "../components/description";

const JobAppliedPage = () => {
  return (
    <Box className="jobDescription page-width" pt={10} pb={10}>
      <Box
        className=""
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
      >
        <Description/>
      </Box>
    </Box>
  )
}

export default JobAppliedPage