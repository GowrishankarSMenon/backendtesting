import React from "react";
import { Box, Text, Button, Accordion } from "@chakra-ui/react";
import JobTable from "../components/jobTable";
import AccordianInput from "../helper/AccordianInput";

const inputGrid = [
  { title: "Employment Offer Letter", "table-head": true, layout: "Respository" },
];

const RepositoryPage = () => {
  return (
    <Box mt={8} mb={24} className="user-jobs-lists page-width">
      <Box w={"100%"}>
        <Accordion defaultIndex={[0]} allowMultiple>
          {inputGrid.length > 0
            ? inputGrid.map((item, i) => {
                return (
                  <AccordianInput
                    index={i + 1}
                    title={item.title}
                    head={item["table-head"]}
                    layout={item["layout"]}
                    table="Respository"
                  />
                );
              })
            : null}
        </Accordion>
      </Box>
    </Box>
  );
};

export default RepositoryPage;
