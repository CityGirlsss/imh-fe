import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function List({ cafes }) {
  const [cafeData, setCafeData] = useState([]);
  useEffect(() => {
    const loadCafeData = () => {
      const data = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("cafe")) {
          const value = JSON.parse(localStorage.getItem(key));
          data.push(value);
        }
      }
      setCafeData(data);
    };

    loadCafeData();
  }, []);

  return (
    <TableContainer>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>Cafe Name</Th>
            <Th>Date</Th>
            <Th>Location</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cafeData.map((cafe) => (
            <Tr key={cafe.key}>
              <Td>{cafe.user_name}</Td>
              <Td>
                {cafe.start_date} ~ {cafe.end_date}
              </Td>
              <Td>{cafe.cafe_name}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

List.prototype = {
  cafes: PropTypes.object.isRequired,
};

export default List;
