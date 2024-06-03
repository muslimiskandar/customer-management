import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { Dispatch, SetStateAction } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { TCardClose, TSingleCustomerResponse } from "../../../../models";
import { cardCloseSchema } from "../../../../schemas/cardCloseReason";
import { ReasonForm } from "./Form/ReasonForm";
import { useParams } from "react-router-dom";
import {
  useChangeCustomerCard,
  useDeleteCustomerCardLogger,
} from "../../../../hooks";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  customerDetailsResponse: TSingleCustomerResponse[];
  setOrderNewCard: Dispatch<SetStateAction<boolean>>;
}
export const DeleteConfirmationModal: React.FC<IProps> = ({
  isOpen,
  onClose,
  customerDetailsResponse,
  setOrderNewCard,
}) => {
  const { id } = useParams();
  const toast = useToast();
  const { deleteCustomerCardLogger } = useDeleteCustomerCardLogger();
  const { changeCustomerCard } = useChangeCustomerCard();
  const methods = useForm<TCardClose>({
    mode: "all",
    criteriaMode: "all",
    reValidateMode: "onBlur",
    resolver: yupResolver(cardCloseSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<TCardClose> = async (data) => {
    if (id) {
      changeCustomerCard("", id);
      deleteCustomerCardLogger(customerDetailsResponse[0], data);
      onClose();
      toast({
        title: "Kartınız deaktivasiya olundu",
        description:
          "Kartınızı sildik. Yeni kartı elə indi pulsuz sifariş edin",
        status: "success",
        duration: 10000,
        isClosable: true,
      });
      setOrderNewCard(true);
    }
  };
  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Kartın deaktivasiyası</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormProvider {...methods}>
            <ReasonForm />
          </FormProvider>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Xeyr
          </Button>
          <Button colorScheme="blue" onClick={handleSubmit(onSubmit)}>
            Bəli
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
