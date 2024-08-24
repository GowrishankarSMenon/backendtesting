import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Text,
  Link,
  Button,
  Checkbox,
} from "@chakra-ui/react";

const AppliedTable = ({ jobList, table_head, new_table }) => {
  const [value, setValue] = React.useState("1");

  return (
    <Table>
      <Thead>
        <Tr>
          <Th></Th>
          <Th>Reference #</Th>
          <Th>Location</Th>
          <Th>Date Applied</Th>
          <Th>Job Category</Th>
          <Th>Job Type</Th>
          <Th>Resume</Th>
          <Th>Status</Th>
        </Tr>
      </Thead>
      <Tbody className="text-black">
        {jobList && jobList.length > 0 ? (
          jobList.map((list, i) => {
            if (i < 10) {
              return (
                <Tr key={list?.id}>
                  <Td>
                    <Box>
                      <Checkbox
                        colorScheme="blue"
                        value={i + 1}
                        onChange={(e) => setValue(e.target.value)}
                      />
                    </Box>
                  </Td>
                  <Td>
                    <Link>{list?.Reference_ID}</Link>
                  </Td>
                  <Td>
                    <Text>{list?.Location}</Text>
                  </Td>
                  <Td>
                    <Text>{list?.Applied_Date}</Text>
                  </Td>
                  <Td>
                    <Text>{list?.Job_Category}</Text>
                  </Td>
                  <Td>
                    <Text>{list?.Job_Type}</Text>
                  </Td>
                  <Td>
                    <Link>{list?.Resume_URL}</Link>
                  </Td>
                  <Td>
                    <Button>{list?.Status}</Button>
                  </Td>
                </Tr>
              );
            }
            return null;
          })
        ) : (
          <Tr>
            <Td colSpan="8">
              <Text>No data available</Text>
            </Td>
          </Tr>
        )}
      </Tbody>
    </Table>
  );
};

export default AppliedTable;
