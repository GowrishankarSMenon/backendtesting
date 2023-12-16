import React from "react";
import { TableCaption, TableContainer, Box } from "@chakra-ui/react";
import AppliedTable from "../table/AppliedTable";
import RespoTable from "../table/RespoTable";

const JobTable = ({ jobList, table_head, table }) => {
  return (
    <Box>
      <TableContainer className="job_Table">
        {table === "Applied" ? (
          <AppliedTable jobList={jobList} head={table_head} new_table={table} />
        ) : (
          <RespoTable jobList={jobList} head={table_head} new_table={table} />
        )}
      </TableContainer>
    </Box>
  );
};

export default JobTable;
