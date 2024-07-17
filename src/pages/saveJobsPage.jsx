import React from "react";

import { Box, Text, Button } from "@chakra-ui/react";

import jobList from "../json/jobListData.json";
import table_head from "../json/tableHeader.json";
import SaveTable from "../table/SaveTable";

const SaveJobsPage = () => {
  return (
    <Box mb={24} className="user-jobs-lists page-width">
      <Box>
        <div className="gap-5 flex md:mt-20 mt-10 justify-start items-center">
          <Button
            className="w-40 !text-white !bg-[#FF3B3B]"
          >
            Delete
          </Button>
          <Button className="w-40  !text-white !bg-[#4160D8]">Add Alert</Button>
        </div>
        <SaveTable jobList={jobList} table_head={table_head} table="Save" />
      </Box>
    </Box>
  );
};

export default SaveJobsPage;
