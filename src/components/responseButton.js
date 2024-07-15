import React from "react";
import { Box, Button, Link } from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'

const ResponseButton = () => {
  return (
    <Box className="response-btn--wrapper" w={"300px"} h={"48px"} mt={8} mb={8}>
      <Button w={"100%"} h={"100%"} textAlign={"center"}>
        Questionnaire Response
        <ChevronRightIcon/>
      </Button>
    </Box>
  );
};

export default ResponseButton;
