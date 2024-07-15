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
  console.log("====================================");
  console.log("Applied", new_table);
  console.log("====================================");
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
      <Tbody>
        {jobList.length > 0
          ? jobList.map((list, i) => {
              if (i < 10) {
                return (
                  <Tr key={list.id}>
                    <Td>
                      <Box>
                        <Checkbox
                          colorScheme="blue"
                          id=""
                          value={i + 1}
                          name=""
                          onChange={(e) => setValue(e.target.value)}
                        ></Checkbox>
                      </Box>
                    </Td>
                    <Td>
                      <Link>{list.reference}</Link>
                    </Td>
                    <Td>
                      <Text>{list.loaction}</Text>
                    </Td>
                    <Td>
                      <Text>{list.date}</Text>
                    </Td>
                    <Td>
                      <Text>{list.category}</Text>
                    </Td>
                    <Td>
                      <Text>{list.type}</Text>
                    </Td>
                    <Td>
                      <Link>{list.resume}</Link>
                    </Td>
                    <Td>
                      <Button>{list.status}</Button>
                    </Td>
                  </Tr>
                );
              }
            })
          : null}
      </Tbody>
    </Table>
  );
};

export default AppliedTable;
