import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import JobTable from "../components/jobTable";
import ResponseButton from "../components/responseButton";

import jobList from "../json/jobListData.json";
import table_head from "../json/tableHeader.json";

const JobDescriptionPage = () => {
  return (
    <Box mb={24} className="user-jobs-lists page-width">
      <Box>
        <ResponseButton/>
        <JobTable jobList={jobList} table_head={table_head} table="Applied"/>
      </Box>
    </Box>
  );
};

export default JobDescriptionPage;
