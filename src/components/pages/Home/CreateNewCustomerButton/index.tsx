import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const CreateNewCustomerButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Button
      colorScheme="purple"
      size="md"
      onClick={() => navigate("/create-customer")}
    >
      Yeni müştəri yaradılması
    </Button>
  );
};
