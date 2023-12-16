import React from "react";
import {
  Box,
  Text,
  Button,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import JobTable from "../components/jobTable";
import TableLayout from "../components/tableLayout";
import jobList from "../json/jobListData.json";
import table_head from "../json/tableHeader.json";
import profiles from "../json/profileTitles.json";

const AccordianInput = ({ title, head, index, layout, table, view }) => {
  // console.log("====================================");
  // console.log(layout);
  // console.log("====================================");
  return (
    <>
      {layout === "Profile" ? (
        <AccordionItem key={index} mb={4}>
          {({ isExpanded }) => (
            <>
              <h3>
                <AccordionButton pb={3} pt={3}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={"18px"}
                    fontWeight="600"
                  >
                    {title}
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h3>
              <AccordionPanel pb={4} className="inner_content">
                {head === false
                  ? profiles.length > 0
                    ? profiles.map((data, i) => {
                        return (
                          <Box key={i + 1}>
                            {view === data.table ? (
                              <TableLayout
                                tableView={view}
                                tableName={data.table}
                                details={data.details}
                              />
                            ) : null}
                          </Box>
                        );
                      })
                    : null
                  : "No Data Found"}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ) : layout == "Referred" ? (
        <AccordionItem key={index} mb={4}>
          {({ isExpanded }) => (
            <>
              <h3>
                <AccordionButton pb={3} pt={3}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={"18px"}
                    fontWeight="600"
                  >
                    {title}
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h3>
              <AccordionPanel pb={4} className="inner_content">
                <Text>No Data Found"</Text>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ) : (
        <AccordionItem key={index} mb={4}>
          {({ isExpanded }) => (
            <>
              <h3>
                <AccordionButton pb={3} pt={3}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={"18px"}
                    fontWeight="600"
                  >
                    {title}
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h3>
              <AccordionPanel pb={4} className="inner_content">
                <JobTable
                  jobList={jobList}
                  table_head={table_head}
                  table={table}
                />
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      )}
    </>
  );
};

export default AccordianInput;
