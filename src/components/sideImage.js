import React from "react";
import { Box, Image } from "@chakra-ui/react";
import people from "../assests/images/People.png";

const SideImage = () => {
  return (
    <Box className="people-image-container">
      <Box className="people-image-wrapper">
        <Image src={people} alt="people.png" />
      </Box>
    </Box>
  );
};

export default SideImage;
