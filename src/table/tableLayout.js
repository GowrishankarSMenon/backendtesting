import React, { useState } from "react";
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
  Checkbox,
} from "@chakra-ui/react";
import { MdOutlineAddAlert } from "react-icons/md";
import { MdAddAlert } from "react-icons/md";

const SaveTable = ({ jobList, table_head, new_table }) => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleCheckboxChange = (id) => {
    setSelectedValues((prev) =>
      prev.includes(id) ? prev.filter((value) => value !== id) : [...prev, id]
    );
  };

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
            {table_head[1].header.map((title, i) => {
              return <Th key={i + 1}>{title.head_Title}</Th>;
            })}
          </Tr>
        </Thead>
        <Tbody>
          {jobList.length > 0
            ? jobList.map((list, i) => {
                {
                  return (
                    <Tr key={list.id}>
                      <Td>
                        <Checkbox
                          isChecked={selectedValues.includes(list.id)}
                          onChange={() => handleCheckboxChange(list.id)}
                        />
                      </Td>
                      <Td>
                        <Link>{list.reference}</Link>
                      </Td>
                      <Td>
                        <Text>{list.type}</Text>
                      </Td>
                      <Td>
                        <Text>{list.category}</Text>
                      </Td>
                      <Td>
                        <Text>{list.category}</Text>
                      </Td>
                      <Td>
                        <Text>{list.location}</Text>
                      </Td>
                      <Td>
                        <MdOutlineAddAlert />
                      </Td>
                      <Td>
                        <Link>-- --- -- </Link>
                      </Td>
                      <Td>
                        <Text>{list.date}</Text>
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
