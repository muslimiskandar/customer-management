import { Button, HStack, Text, VStack, useToast } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createCustomerSchema } from "../../../schemas/createCustomerSchema";
import { TSingleCustomerDetails } from "../../../models";
import { NameForm } from "./Form/NameForm";
import { SurnameForm } from "./Form/SurnameForm";
import { DateForm } from "./Form/DateForm";
import { GSMNumberForm } from "./Form/GsmNumberForm";
import { useCreateNewCustomer } from "../../../hooks";

export const CreateCustomer: React.FC = () => {
  const navigate = useNavigate();
  const { createNewCustomer } = useCreateNewCustomer();
  const toast = useToast();

  const methods = useForm<TSingleCustomerDetails>({
    mode: "all",
    criteriaMode: "all",
    reValidateMode: "onBlur",
    resolver: yupResolver(createCustomerSchema),
  });

  const onSubmit: SubmitHandler<TSingleCustomerDetails> = async (data) => {
    await createNewCustomer(data);
    navigate("/");
    toast({
      title: "Müştəri uğurla yaradıldı",
      description:
        "Müştəri məlumatlarını görmək üçün telefon nömrəsi ilə axtarış edin",
      status: "success",
      duration: 10000,
      isClosable: true,
    });
  };
  const { handleSubmit } = methods;

  return (
    <>
      <HStack justifyContent="center" alignItems="center" mt="30px">
        <VStack
          m="0 200px"
          width="100%"
          height="500px"
          justifyContent="space-between"
        >
          <FormProvider {...methods}>
            <Text fontSize="2xl">Yeni müştəri yaradılması</Text>
            <NameForm />
            <SurnameForm />
            <DateForm />
            <GSMNumberForm />
          </FormProvider>
        </VStack>
      </HStack>
      <HStack
        justifyContent="space-between"
        width="100%"
        position="fixed"
        bottom="0"
        padding="20px"
        boxShadow="-1px -1px 12px #e0e0e0"
      >
        <Button colorScheme="gray" onClick={() => navigate(-1)}>
          Geri
        </Button>
        <Button colorScheme="purple" onClick={handleSubmit(onSubmit)}>
          Müştəri yarat
        </Button>
      </HStack>
    </>
  );
};
