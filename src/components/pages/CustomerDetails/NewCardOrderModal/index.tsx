import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
} from "@chakra-ui/react";
import { generateRandomCard } from "../../../../utils/generateRandomCard";
import { useChangeCustomerCard } from "../../../../hooks";
import { useParams } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  setOrderNewCard: Dispatch<SetStateAction<boolean>>;
}

export const NewCardOrderModal: React.FC<IProps> = ({
  isOpen,
  onClose,
  setOrderNewCard,
}) => {
  const { id } = useParams();
  const toast = useToast();
  const {
    data: newCardResponse,
    loading,
    changeCustomerCard,
  } = useChangeCustomerCard();
  const handleOrderNewCard = () => {
    let card = generateRandomCard();
    if (id) {
      changeCustomerCard(card, id);
      onClose();
      toast({
        title: "Yeni kart uğurla sifariş olundu",
        description: "Kart nömrəniz yenilənmişdir",
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
        <ModalHeader>Yeni kart sifarişi</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontWeight="normal" mb="1rem">
            Bu əməliyyat köhnə kartınızı (əgər varsa) bağlayacaq və sizin üçün
            yeni kart yaradılacaq. Davam etmək istəyirsiz?
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Xeyr
          </Button>
          <Button colorScheme="blue" onClick={handleOrderNewCard}>
            Bəli
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
