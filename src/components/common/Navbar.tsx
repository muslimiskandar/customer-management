import { HStack, Img } from "@chakra-ui/react";
import { CreateNewCustomerButton } from "../pages/Home/CreateNewCustomerButton";
import { useNavigate } from "react-router-dom";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <HStack
      p="0 30px"
      boxShadow="3px 3px 8px #e0e0e0"
      height="100px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Azercell-logo-3.svg/2560px-Azercell-logo-3.svg.png"
        width="85"
        height="30"
        onClick={() => navigate("/")}
        cursor="pointer"
      />
      <CreateNewCustomerButton />
    </HStack>
  );
};
