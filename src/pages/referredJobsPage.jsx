import React from "react";
import { Box, Flex, Accordion } from "@chakra-ui/react";
import AccordianInput from "../helper/AccordianInput";

const inputGrid = [
  { title: "Employee Referred Jobs", "table-head": true, layout: "Referred" },
];
const ReferredJobsPage = () => {
  return (
    <Box w={"100%"} className="referredJob_container">
      <Box w={"100%"} className="page-width" pt={12} pb={12}>
        <Accordion defaultIndex={[0]} allowMultiple>
          {inputGrid.length > 0
            ? inputGrid.map((item, i) => {
                return (
                  <AccordianInput
                    index={i + 1}
                    title={item.title}
                    head={item["table-head"]}
                    layout={item["layout"]}
                  />
                );
              })
            : null}
        </Accordion>
      </Box>
    </Box>
  );
};

export default ReferredJobsPage;
