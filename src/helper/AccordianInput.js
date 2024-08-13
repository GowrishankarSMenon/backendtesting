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
import HeadTableLayout from "../components/HeadTableLayout";

const AccordianInput = ({ title, head, index, layout, table, view, list, candidate="" }) => {

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
                    fontSize={"16px"}
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
              <AccordionPanel
                pb={4}
                pl={1.5}
                pr={1.5}
                mb={2}
                className="inner_content"
              >
                {head === false ? (
                  profiles.length > 0 ? (
                    profiles.map((data, i) => {
                      return (
                        <Box key={i + 1}>
                          {view === data.table ? (
                            <TableLayout
                              tableView={view}
                              tableName={data.table}
                              details={data.details}
                              candidate={candidate}
                            />
                          ) : null}
                        </Box>
                      );
                    })
                  ) : null
                ) : (
                  <HeadTableLayout
                    title={title}
                    tableView={view}
                    table_head={head}
                    table={table}
                    tableLayout={layout}
                    index={index}
                  />
                )}
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
                    fontSize={"16px"}
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
                <Text>No Data Found</Text>
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
              <AccordionPanel
                pb={4}
                pl={1.5}
                pr={1.5}
                className="inner_content"
                mb={2}
              >
                <JobTable
                  jobList={list}
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
