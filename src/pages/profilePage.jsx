import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import instance from "../axiosApis/getUrl";
import { Box, Flex, Accordion, Text } from "@chakra-ui/react";
import AccordianInput from "../helper/AccordianInput";
import { setCookie, getCookie, deleteCookie } from "../helper/CookieStorage";


const inputGrid = [
  {
    title: "Profile",
    table_head: false,
    layout: "Profile",
    tableView: "profile",
  },
  {
    title: "Education",
    table_head: true,
    layout: "Profile",
    tableView: "education",
  },
  {
    title: "Experience",
    table_head: true,
    layout: "Profile",
    tableView: "experience",
  },
  {
    title: "Job Preference",
    table_head: false,
    layout: "Profile",
    tableView: "job-profile",
  },
  {
    title: "Attachment",
    table_head: true,
    layout: "Profile",
    tableView: "attachment",
  },
  {
    title: "Candidate Skills",
    table_head: true,
    layout: "Profile",
    tableView: "skills",
  },
  {
    title: "Relocation Preferences",
    table_head: true,
    layout: "Profile",
    tableView: "relocation-preferences",
  },
  {
    title: "References",
    table_head: true,
    layout: "Profile",
    tableView: "references",
  },
  {
    title: "Certification",
    table_head: true,
    layout: "Profile",
    tableView: "certification",
  },
  {
    title: "Security Credentials",
    table_head: true,
    layout: "Profile",
    tableView: "security-credentials",
  },
  {
    title: "Resume Additional",
    table_head: true,
    layout: "Profile",
    tableView: "resume",
  },
  { title: "Goals", table_head: true, layout: "Profile", tableView: "goals" },
  {
    title: "Objectives",
    table_head: false,
    layout: "Profile",
    tableView: "objective",
  },
];

const ProfilePage = () => {
  const location = useLocation();
  const [candidate, setCandidate] = useState({});

  let token_key = getCookie('token_Key');//localStorage.getItem("token_Key");

  useEffect(() => {
    if (token_key != null) {
      instance
        .get(`getCandidate?CandidateID=${96}`)
        .then((response) => {
          // Handle the response
          //console.log(response.status);

          if (response.status === 200) {
            setTimeout(() => {
              setCandidate(response.data.Table0);
            }, 100);
          }
        })
        .catch((error) => {
          // Handle the error
          console.error(error);
        });
    } else {
      console.log("TOKEN KEY: ", token_key);
    }
  }, []);

  console.log("DATA: ", candidate);

  return (
    <Box w={"100%"} className="profile_container">
      <Box w={"100%"} bg={"#fafcff"}>
        <Text
          textAlign={"center"}
          fontSize={"13px"}
          pt={3}
          pb={3}
          fontWeight={"500"}
        >
          This candidate was last updated on 4/6/2022 5:02:36 AM
        </Text>
      </Box>
      <Box w={"100%"} className="page-width" pt={8} pb={12}>
        <Accordion defaultIndex={[0]} allowMultiple>
          {inputGrid.length > 0
            ? inputGrid.map((item, i) => {
                return (
                  <Box key={i + 1} className="accordian--box">
                    <AccordianInput
                      index={i + 1}
                      title={item.title}
                      head={item.table_head}
                      layout={item.layout}
                      table=""
                      view={item.tableView}
                      candidate={candidate}
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
