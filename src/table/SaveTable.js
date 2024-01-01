import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Input,
  Text,
  Link,
  Button,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

const SaveTable = ({ jobList, table_head, new_table }) => {
  const [value, setValue] = React.useState("1");
  return (
    <TableContainer
      className=""
      borderWidth={1}
      borderRadius={"10px"}
      borderColor={"#e2e8f0"}
      mt={6}
    >
      <Table className={new_table}>
        <Thead>
          <Tr>
            <Th></Th>
            {table_head[1].header.map((title, i) => {
              return <Th key={i + 1}>{title.head_Title}</Th>;
            })}
          </Tr>
        </Thead>
        <Tbody>
          {jobList.length > 0
            ? jobList.map((list, i) => {
                if (i < 1) {
                  return (
                    <Tr key={list.id}>
                      <Td>
                        <RadioGroup onChange={setValue} value={value}>
                          <Radio value={i + 1}></Radio>
                        </RadioGroup>
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
    </TableContainer>
  );
};

export default SaveTable;
