import { Th, Thead, Tr } from "@chakra-ui/react";

export const TableHeader: React.FC = () => {
  return (
    <Thead>
      <Tr>
        <Th>Adı</Th>
        <Th>Soyadı</Th>
        <Th>Doğum tarixi</Th>
        <Th>GSM nömrəsi</Th>
        <Th>Kartı</Th>
      </Tr>
    </Thead>
  );
};
