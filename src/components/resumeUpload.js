import React from "react";
import { Box, Flex, Input, Select, Button, Text, Link } from "@chakra-ui/react";
import { select_sector } from "../selectData/selectOption";
import { select_country } from "../selectData/selectCountry";

const ResumeUpload = () => {
    // console.log(select_sector);
    return (
        <Box className="page-width" mb={10}>
            <Box className="border rounded-md px-6 py-4">
                <Box className="flex flex-col md:flex-row items-center justify-between">
                    <Box>
                        <Text className="text-lg font-semibold">Resume-Based Job Recommendations</Text>
                        <Text className="text-sm font-normal max-w-4xl">Upload your resume and let AI work its magic! Receive personalized job  recommendations based on your skills, experience, and preferences,  making your job search easier and more effective.</Text>
                    </Box>
                    <Box className="button button-wrapper" w={"15%"} minWidth={"100px"} maxWidth={"170px"} mt={2}>
                        <Button size="md" className="search-btn">
                            Search
                        </Button>
                    </Box>
                </Box>

            </Box>
        </Box>
    );
};

export default ResumeUpload;
