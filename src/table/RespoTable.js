import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Box,
  Text,
  Link,
  Button
} from "@chakra-ui/react";

const RespoTable = ({ jobList, head, new_table }) => {
  const [value, setValue] = React.useState("1");
  return (
    <Table className={new_table} mt={2}>
      <Thead>
        <Tr>
          {head[2].header.map((title, i) => {
            return <Th key={i + 1}>{title.head_Title}</Th>;
          })}
        </Tr>
      </Thead>
      <Tbody>
        {jobList.length > 0
          ? jobList.map((list, i) => {
              if (i < 10) {
                return (
                  <Tr key={list.id}>
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

export default RespoTable;
