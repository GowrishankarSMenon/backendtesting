import React from "react";

/* Chakra UI */
import { Box, Text, Heading, Button, Flex, Divider } from "@chakra-ui/react";

const Description = () => {
  return (
    <Box className="" w={"70%"}>
      <Box
        p={6}
        borderWidth={1}
        borderColor={"#434343"}
        borderRadius={"10px"}
        w={"100%"}
      >
        <Box
          mb={10}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Heading as={"h3"}>Software Manual Tester</Heading>
          <Button>Applied</Button>
        </Box>
        <Box>
          <Text>
            We are looking for a software developer to work on development and
            customization of open source ERP (www.erpnext.com). Our company is
            into implementation and customization of this ERP and the opening is
            at our company and not with the product company. Key Skills: Server
            side scripting : Python Databases : MariaDB / MySQL User interfaces
            : Javascript / JQuery / HTML / CSS / Boostrap CSS Framewjjtjt times,
            you can work from home or come to office and are free to take days
            off when you want. We are a small company with big aspirations. We
            encourage open communication in our organization and have a friendly
            work culture. If you have requisite skills and this opportunity
            excites you then let's meet over a cup of coffee.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Description;
