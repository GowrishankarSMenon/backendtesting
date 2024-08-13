import React, { useState } from "react";
import { Box, Heading, Button, Spinner } from "@chakra-ui/react";
import CardGrid from "./cardGrid";

const CardItems = ({recentJobs}) => {
  const [loadItems, setLoadItems] = useState(6);
  const [loader, setLoader] = useState(false);
  

  const handleLoadMore = () => {
    setLoader(!loader);
    setTimeout(() => {
      setLoader(false);
      setLoadItems(loadItems + 3);
    }, 2000);
  };

  return (
    <Box className="react-job--container page-width">
      <Box className="job-grid--wrapper">
        <Box mb={6} mt={6} className="">
          <Heading
            as={"h2"}
            fontSize="24px"
            fontWeight="600"
            lineHeight="29px"
            textAlign="left"
            className=""
          >
            Recent Jobs
          </Heading>
        </Box>
        <Box className="">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            flexWrap="wrap"
            gap="20px"
            className="jobList--flex"
          >
            {recentJobs.length > 0
              ? recentJobs.map((job, i) => {
                if (i < loadItems) {
                  return (
                    <CardGrid 
                      title={job.Position_Title} 
                      id={job.Requisition_Id} 
                      key={job.Requisition_Id}
                      term ={job.Job_Term_Id}
                      branch={job.Branch_Name}
                      date={job.Requisition_Received_Date}
                      location={job.City+", " + job.Country}
                    />
                  );
                }
                })
                
              : null}
          </Box>
        </Box>
        {recentJobs.length != loadItems ? (
          <Box
            w={"100%"}
            mt={16}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            className="load-more--wrapper"
          >
            <Button
              bg="transparent"
              w={"210px"}
              h={"48px"}
              onClick={handleLoadMore}
            >
              {loader !== true ? (
                "Load More"
              ) : (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="lg"
                />
              )}
            </Button>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default CardItems;
