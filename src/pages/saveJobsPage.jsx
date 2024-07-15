import React from "react";

import { Box, Text, Button } from "@chakra-ui/react";

import jobList from "../json/jobListData.json";
import table_head from "../json/tableHeader.json";
import SaveTable from "../table/SaveTable";

const SaveJobsPage = () => {
  return (
    <Box mb={24} className="user-jobs-lists page-width">
      <Box>
        <Button mt={8} bgColor={'red'} color={'white'}>Delete</Button>
        <SaveTable jobList={jobList} table_head={table_head} table="Save" />
      </Box>
    </Box>
  );
};

export default SaveJobsPage;
