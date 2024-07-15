import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import JobTable from "../components/jobTable";
import ResponseButton from "../components/responseButton";

const AccountPage = () => {
  return (
    <Box mb={24} className="user-jobs-lists page-width">
      <Box>
        <ResponseButton/>
        <JobTable/>
      </Box>
    </Box>
  );
};

export default AccountPage;
