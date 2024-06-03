import { Button, useDisclosure } from "@chakra-ui/react";
import { NewCardOrderModal } from "../NewCardOrderModal";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  setOrderNewCard: Dispatch<SetStateAction<boolean>>;
}
export const NewCardOrderButton: React.FC<IProps> = ({ setOrderNewCard }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme="green" size="md" onClick={onOpen}>
        Yeni kart sifarişi
      </Button>
      <NewCardOrderModal
        isOpen={isOpen}
        onClose={onClose}
        setOrderNewCard={setOrderNewCard}
      />
    </>
  );
};
