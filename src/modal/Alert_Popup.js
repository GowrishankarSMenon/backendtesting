import React from "react";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

const Alert_Popup = ({ title, error }) => {
  return (
    <Alert
      status={error}
      fontSize={"13px"}
      pt={"3px"}
      pb={"3px"}
      borderRadius={"5px"}
      mt={4}
    >
      <AlertIcon />
      <AlertTitle>{title}</AlertTitle>
    </Alert>
  );
};

export default Alert_Popup;
