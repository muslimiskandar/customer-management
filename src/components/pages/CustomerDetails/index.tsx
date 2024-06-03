import { Button, HStack } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  useGetRelevantCustomerTransactions,
  useGetSingleCustomer,
} from "../../../hooks";
import { TransactionsList } from "./TransactionsList.tsx";
import { GeneralDetails } from "./GeneralDetails";
import { Loading } from "../../common/Loading";

export const CustomerDetails: React.FC = () => {
  const [orderNewCard, setOrderNewCard] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    loading: singleCustomerLoading,
    data: customerDetailsResponse,
    getSingleCustomer,
  } = useGetSingleCustomer();

  const {
    loading: transactionLoading,
    data: customerTransactionsResponse,
    getCustomerTransactions,
  } = useGetRelevantCustomerTransactions();

  useEffect(() => {
    if (id) {
      getSingleCustomer(id);
      getCustomerTransactions(id);
      setOrderNewCard(false);
    }
  }, [orderNewCard]);

  return (
    <>
      {singleCustomerLoading || transactionLoading ? (
        <Loading />
      ) : (
        <>
          <HStack justifyContent="center" alignItems="center" m="70px 200px">
            <GeneralDetails
              customerDetailsResponse={customerDetailsResponse}
              setOrderNewCard={setOrderNewCard}
            />
            <TransactionsList
              customerTransactionsResponse={customerTransactionsResponse}
            />
          </HStack>
          <HStack
            justifyContent="space-between"
            width="100%"
            position="fixed"
            bottom="0"
            padding="20px"
            boxShadow="1px 1px 12px #e0e0e0"
          >
            <Button colorScheme="gray" onClick={() => navigate(-1)}>
              Geri
            </Button>
          </HStack>
        </>
      )}
    </>
  );
};
