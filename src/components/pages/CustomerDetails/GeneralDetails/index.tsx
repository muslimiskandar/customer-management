import React, { Dispatch, SetStateAction, useState } from "react";
import { Button, HStack, Text, VStack, useDisclosure } from "@chakra-ui/react";
import { NewCardOrderButton } from "../NewCardOrderButton";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { DeleteConfirmationModal } from "../DeleteConfirmationModal";
import { TSingleCustomerResponse } from "../../../../models";
import { maskCardNumber } from "../../../../utils/maskCardNumbers";

interface IProps {
  customerDetailsResponse: TSingleCustomerResponse[];
  setOrderNewCard: Dispatch<SetStateAction<boolean>>;
}
export const GeneralDetails: React.FC<IProps> = ({
  customerDetailsResponse,
  setOrderNewCard,
}) => {
  const [masked, setMasked] = useState<boolean>(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toggleMask = () => {
    setMasked(!masked);
  };

  return (
    <VStack
      boxShadow="2px 2px 3px #d4d4d4"
      minHeight="60vh"
      width="100%"
      borderRadius="10px"
      mr="5rem"
      bg="#f5f5f5"
    >
      <HStack justifyContent="space-between" width="100%" p="1rem">
        <Text fontSize="lg" fontWeight="bold">
          Müştəri məlumatları
        </Text>
        <NewCardOrderButton setOrderNewCard={setOrderNewCard} />
      </HStack>
      <HStack mt="50px" justifyContent="space-between" width="90%">
        <VStack width="30%">
          <FaUser fontSize="60px" />
        </VStack>
        {customerDetailsResponse?.map((el) => (
          <VStack alignItems="flex-start">
            <Text fontSize="md">Adı: {el.Name} </Text>
            <Text fontSize="md">Soyadı: {el.Surname}</Text>
            <Text fontSize="md">Doğum tarixi: {el.BirthDate}</Text>
            <Text fontSize="md">GSM nömrəsi: +{el.GSMNumber}</Text>
            {el.CardNumber && (
              <HStack mb="1rem">
                <Text fontSize="md" fontWeight="bold">
                  Kart: {masked ? maskCardNumber(el.CardNumber) : el.CardNumber}
                </Text>
                <Button onClick={toggleMask} colorScheme="gray">
                  {masked ? <FaEye /> : <FaEyeSlash />}
                </Button>
              </HStack>
            )}
            <HStack justifyContent="flex-end" width="100%">
              {el.CardNumber && (
                <Button colorScheme="red" onClick={onOpen}>
                  Kartı sil
                </Button>
              )}
            </HStack>
          </VStack>
        ))}
      </HStack>
      <DeleteConfirmationModal
        isOpen={isOpen}
        onClose={onClose}
        customerDetailsResponse={customerDetailsResponse}
        setOrderNewCard={setOrderNewCard}
      />
    </VStack>
  );
};
