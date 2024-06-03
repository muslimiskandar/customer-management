import { Text, VStack } from "@chakra-ui/react";
import { MdErrorOutline } from "react-icons/md";

export const NotFoundCustomer: React.FC = () => {
  return (
    <VStack justifyContent="center" alignItems="center" height="500px">
      <MdErrorOutline fontSize="100px" color="red" />
      <Text fontSize="lg" fontWeight="bold" mt="1rem">
        Bu telefon nömrəsinə uyğun gələn müştəri tapılmadı.
      </Text>
      <Text fontSize="lg" fontWeight="bold">
        Telefon nömrəsini düzgün daxil edin
      </Text>
    </VStack>
  );
};
