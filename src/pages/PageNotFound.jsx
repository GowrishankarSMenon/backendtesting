import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Flex, Text, Heading } from "@chakra-ui/react";

const PageNotFound = () => {
  return (
    <Box>
      <Box
        className="page-width"
        h={"80vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          w={"500px"}
          p={[2, 4]}
          borderWidth={1}
          borderRadius={"10px"}
          borderColor={"grey"}
        >
          <Heading as={"h4"} textAlign={"center"} fontSize={"1.5rem"} mb={2}>
            Oops! You seem to be lost.
          </Heading>
          <Text as={"p"} textAlign={"center"} mb={3}>
            Here are some helpful links:
          </Text>
          <Link
            to="/"
            style={{ width: "100%", textAlign: "center", display: "block" }}
          >
            <Button mb={1}>Home</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default PageNotFound;
