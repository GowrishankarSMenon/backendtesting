import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import instance from "../axiosApis/getUrl";
import { Box, Flex, Accordion, Text } from "@chakra-ui/react";
import AccordianInput from "../helper/AccordianInput";
import { setCookie, getCookie, deleteCookie } from "../helper/CookieStorage";
import { jwtDecode } from "jwt-decode";
import DynamicTable from "../table/DynamicTable";


const inputGrid = [
  {
    title: "Profile",
    table_head: false,
    layout: "Profile",
    tableView: "profile",
  }
];

const ProfilePage = () => {
  const location = useLocation();
  const [inputdata, setinputdata] = useState([])
  const updateOrAddEntry = (targetTitle, newRows) => {
    console.log(targetTitle, newRows)
    setinputdata((prevData) => {
      const entryIndex = prevData.findIndex(item => item.title === targetTitle);

      if (entryIndex >= 0) {
        // If entry exists, update it
        return prevData.map((item, index) =>
          index === entryIndex ? { ...item, rows: newRows } : item
        );
      } else {
        // If entry doesn't exist, add a new one
        return [...prevData, { title: targetTitle, rows: newRows }];
      }
    });
  };
  const [candidate, setCandidate] = useState({});

  let token_key = getCookie('token_Key');//localStorage.getItem("token_Key");
  let user = jwtDecode(token_key)

  useEffect(() => {
    if (token_key != null) {
      console.log("090909")
      instance
          .get(`Common/UserInfo/GetCandidateID?userID=${user.UserId}`)
          .then((response) => {
            // Handle the response
            console.log("REquest Post", response);
            if (response.status === 200) {
              console.log(response.data)
              let candidateId = response.data.data

              instance
                .get(`ATS/Candidate/GetCandidatePermanentContactAddress?Candidate_ID=${candidateId}&Address_Type=1`)
                .then((response) => {
                  // Handle the response
                  //console.log(response.status);

                  if (response.status === 200) {
                    setTimeout(() => {
                      console.log(response.data)
                      setCandidate(response.data.Table0);
                    }, 100);
                  }
                })

                instance
                .get(`ATS/Portal/GetCandidateExperience?candidateId=${candidateId}`)
                .then((response) => {
                  // Handle the response
                  //console.log(response.status);

                  if (response.status === 200) {
                    setTimeout(() => {
                      updateOrAddEntry("Experience", response.data.Table0)
                    }, 100);
                  }
                })

                instance
                .get(`ATS/Portal/GetCandidateJobPreference?candidateId=${candidateId}`)
                .then((response) => {
                  // Handle the response
                  //console.log(response.status);

                  if (response.status === 200) {
                    setTimeout(() => {
                      updateOrAddEntry("Job Preference", response.data.Table0)
                    }, 100);
                  }
                })

                instance
                .get(`ATS/Candidate/GetAllCandidateRelocation?candidateId=${candidateId}`)
                .then((response) => {
                  // Handle the response
                  //console.log(response.status);

                  if (response.status === 200) {
                    setTimeout(() => {
                      updateOrAddEntry("Relocation", response.data.Table0)
                    }, 100);
                  }
                })

                // instance
                // .get(`ATS/Candidate/GetAllCandidateCertification?candidateId=${candidateId}&Dc_id=${user.DCID}`)
                // .then((response) => {
                //   // Handle the response
                //   //console.log(response.status);

                //   if (response.status === 200) {
                //     setTimeout(() => {
                //       updateOrAddEntry("Certifications", response.data.Table0)
                //     }, 100);
                //   }
                // })

                instance
                .get(`ATS/Portal/GetCommonNotesForCandidatePortal?dcId=${user.DCID}&dcUserID=${user.UserId}&candidateID=${candidateId}`)
                .then((response) => {
                  // Handle the response
                  //console.log(response.status);

                  if (response.status === 200) {
                    setTimeout(() => {
                      updateOrAddEntry("Common Notes", response.data.result.Table0)
                    }, 100);
                  }
                })

                instance
                .get(`ATS/Portal/GetCandidateEducation?candidateId=${candidateId}`)
                .then((response) => {
                  // Handle the response
                  //console.log(response.status);

                  if (response.status === 200) {
                    setTimeout(() => {
                      updateOrAddEntry("Education", response.data.Table0)
                    }, 100);
                  }
                })

                instance
                .get(`ATS/Candidate/GetAllCandidateSecurityCredentials?candidateId=${candidateId}`)
                .then((response) => {
                  // Handle the response
                  //console.log(response.status);

                  if (response.status === 200) {
                    setTimeout(() => {
                      updateOrAddEntry("Security Credentials", response.data.Table0)
                    }, 100);
                  }
                })

                instance
                .get(`ATS/Candidate/GetAllResumeAdditionalItems?candidateId=${candidateId}`)
                .then((response) => {
                  // Handle the response
                  //console.log(response.status);

                  if (response.status === 200) {
                    setTimeout(() => {
                      updateOrAddEntry("Additional Items", response.data.Table0)
                    }, 100);
                  }
                })

                instance
                .get(`ATS/Candidate/GetAllCandidateAttachments?candidateId=${candidateId}`)
                .then((response) => {
                  // Handle the response
                  //console.log(response.status);

                  if (response.status === 200) {
                    setTimeout(() => {
                      updateOrAddEntry("Attachments", response.data.Table0)
                    }, 100);
                  }
                })

                instance
                .get(`ATS/Candidate/GetAllGoals?candidateId=${candidateId}`)
                .then((response) => {
                  // Handle the response
                  //console.log(response.status);

                  if (response.status === 200) {
                    setTimeout(() => {
                      updateOrAddEntry("Goals", response.data.Table0)
                    }, 100);
                  }
                })
            
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

            {inputdata.length > 0
            ? inputdata.map((item, i) => {
                return (
                  <Box key={i + 1} className="accordian--box">
                    <DynamicTable
                    title={item.title}
                    rows={item.rows}
                    ></DynamicTable>
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
