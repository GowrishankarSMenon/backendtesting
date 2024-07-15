import React from "react";
import { TableContainer, Box } from "@chakra-ui/react";
import AppliedTable from "../table/AppliedTable";
import RespoTable from "../table/RespoTable";

const JobTable = ({ jobList, table_head, table }) => {
  return (
    <Box className={table === "Applied" ? "applied_table" : "respo_Table"}>
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
