import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Link,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import { FaRegStar, FaStar } from "react-icons/fa";

const SaveTable = ({ jobList, new_table }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [primaryId, setPrimaryId] = useState(null);

  const table_head = [
    { head_Title: "Select" },
    { head_Title: "Attachments" },
    { head_Title: "Date Added" },
    { head_Title: "Mark Primary" },
  ];

  const table_Data = [
    { id: 1, attachments: "Resume", dateAdded: "2021-09-01" },
    { id: 2, attachments: "Resume", dateAdded: "2021-09-01" },
    { id: 3, attachments: "Resume", dateAdded: "2021-09-01" },
  ];

  const handleStarClick = (id) => {
    setPrimaryId(id === primaryId ? null : id);
  };

  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <TableContainer
      borderWidth={1}
      borderRadius="10px"
      borderColor="#e2e8f0"
      mt={6}
    >
      <Table className={new_table}>
        <Thead>
          <Tr>
            {table_head.map((title, i) => (
              <Th key={i}>{title.head_Title}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {table_Data.length > 0 &&
            table_Data.map((list) => (
              <Tr key={list.id}>
                <Td>
                  <RadioGroup
                    onChange={handleRadioChange}
                    value={selectedValue}
                  >
                    <Radio value={String(list.id)} />
                  </RadioGroup>
                </Td>
                <Td>
                  <Link>{list.attachments}</Link>
                </Td>
                <Td>
                  <Text>{list.dateAdded}</Text>
                </Td>
                <Td>
                  {primaryId === list.id ? (
                    <FaStar
                      className="text-yellow-400"
                      onClick={() => handleStarClick(list.id)}
                    />
                  ) : (
                    <FaRegStar onClick={() => handleStarClick(list.id)} />
                  )}
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default SaveTable;
