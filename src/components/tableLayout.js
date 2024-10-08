import React from "react";
import { Box } from "@chakra-ui/react";

/* components */
import ProfileTable from "../table/ProfileTable";
import JobTable from "../table/JobTable";
import ObjectiveTable from "../table/ObjectiveTable";

const TableLayout = ({ tableView, tableName, details, candidate }) => {
  console.log("name:", tableName);
  console.log("View:", details);
  return (
    <>
      {tableName == "profile" ? (
        <ProfileTable
          tableView={tableView}
          tableName={tableName}
          candidate={candidate}
        />
      ) : tableName == "job-profile" ? (
        <JobTable
          tableView={tableView}
          tableName={tableName}       
          candidate={candidate}
        />
      ) : tableName == "objective" ? (
        <ObjectiveTable
          tableView={tableView}
          tableName={tableName}       
          candidate={candidate}
        />
      ) : null}
    </>
  );
};

export default TableLayout;
