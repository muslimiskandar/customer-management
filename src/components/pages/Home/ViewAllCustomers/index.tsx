import { Table, TableContainer, Text, VStack } from "@chakra-ui/react";
import { TableHeader } from "./Table/TableHeader";
import { TableBody } from "./Table/TableBody";

interface IProps {
  singleCustomerData: any;
}
export const ViewAllCustomers: React.FC<IProps> = ({ singleCustomerData }) => {
  return (
    <VStack m="50px 30px 0 30px">
      <Text textAlign="center" fontSize="xl" fontWeight="bold" mb="30px">
        Axtarış nəticəsi
      </Text>
      <TableContainer>
        <Table variant="striped">
          <TableHeader />
          <TableBody singleCustomerData={singleCustomerData} />
        </Table>
      </TableContainer>
    </VStack>
  );
};
