import { HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { TCustomerTransactions } from "../../../../models";

interface IProps {
  customerTransactionsResponse: TCustomerTransactions[];
}
export const TransactionsList: React.FC<IProps> = ({
  customerTransactionsResponse,
}) => {
  return (
    <VStack
      boxShadow="2px 2px 3px #d4d4d4"
      minHeight="60vh"
      width="100%"
      borderRadius="10px"
      bg="#f5f5f5"
    >
      <HStack justifyContent="center" width="90%" p="1rem">
        <Text fontSize="lg" fontWeight="bold">
          Tranzaksiyalar
        </Text>
      </HStack>
      {customerTransactionsResponse?.length ? (
        customerTransactionsResponse?.map((el) => (
          <HStack width="90%" justifyContent="space-between" p="1rem" bg="#fff">
            <HStack>
              <FaMoneyBillTransfer color="green" fontSize="30px" />
              <Text fontSize="md" fontWeight="bold">
                {el.TransactionAmount}
              </Text>
            </HStack>
            <HStack>
              <Text fontSize="md" fontWeight="bold">
                {el.TransactionDate}
              </Text>
            </HStack>
          </HStack>
        ))
      ) : (
        <HStack width="90%" justifyContent="space-between" p="1rem">
          <HStack justifyContent="center" width="100%">
            <Text fontSize="md" textAlign="center">
              Yeni müştəri olduğu üçün tranzaksiya tapılmadı
            </Text>
          </HStack>
        </HStack>
      )}
    </VStack>
  );
};
