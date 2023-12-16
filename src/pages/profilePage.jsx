import React from "react";
import { Box, Flex, Accordion } from "@chakra-ui/react";
import AccordianInput from "../helper/AccordianInput";

const inputGrid = [
  {
    title: "Profile",
    "table-head": false,
    layout: "Profile",
    tableView: "profile",
  },
  { title: "Education", "table-head": true, layout: "Profile", tableView: "" },
  { title: "Experience", "table-head": true, layout: "Profile", tableView: "" },
  {
    title: "Job Preference",
    "table-head": false,
    layout: "Profile",
    tableView: "job-profile",
  },
  { title: "Attachment", "table-head": true, layout: "Profile", tableView: "" },
  {
    title: "Candidate Skills",
    "table-head": true,
    layout: "Profile",
    tableView: "",
  },
  {
    title: "Relocation Preferences",
    "table-head": true,
    layout: "Profile",
    tableView: "",
  },
  { title: "References", "table-head": true, layout: "Profile", tableView: "" },
  {
    title: "Certification",
    "table-head": true,
    layout: "Profile",
    tableView: "",
  },
  {
    title: "Security Credentials",
    "table-head": true,
    layout: "Profile",
    tableView: "",
  },
  {
    title: "Resume Additional",
    "table-head": true,
    layout: "Profile",
    tableView: "",
  },
  { title: "Goals", "table-head": true, layout: "Profile", tableView: "" },
  {
    title: "Objectives",
    "table-head": false,
    layout: "Profile",
    tableView: "objective",
  },
];

const ProfilePage = () => {
  return (
    <Box w={"100%"} className="profile_container">
      <Box w={"100%"} className="page-width" pt={12} pb={12}>
        <Accordion defaultIndex={[0]} allowMultiple>
          {inputGrid.length > 0
            ? inputGrid.map((item, i) => {
                return (
                  <Box key={i+1}>
                    <AccordianInput
                      index={i + 1}
                      title={item.title}
                      head={item["table-head"]}
                      layout={item["layout"]}
                      table=""
                      view={item.tableView}
                    />
                  </Box>
                );
              })
            : null}
        </Accordion>
      </Box>
    </Box>
  );
};

export default ProfilePage;
