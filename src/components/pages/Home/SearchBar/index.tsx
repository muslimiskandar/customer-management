import React from "react";
import { FormProvider, SubmitHandler, UseFormReturn } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { TSearchBar } from "../../../../models";
import { Button, FormControl, HStack, Text } from "@chakra-ui/react";
import { SearchForm } from "./SearchForm";

interface IProps {
  searchMethods: UseFormReturn<TSearchBar, any, undefined>;
  onSubmit: SubmitHandler<TSearchBar>;
}
export const SearchBar: React.FC<IProps> = ({ searchMethods, onSubmit }) => {
  const {
    handleSubmit,
    formState: { errors },
  } = searchMethods;

  return (
    <HStack width="100%" m="50px 30px 0 30px" justifyContent="center">
      <HStack width="400px">
        <FormProvider {...searchMethods}>
          <FormControl>
            <HStack gap="0">
              <SearchForm />
              <Button
                size="lg"
                borderLeftRadius={0}
                borderRightRadius={10}
                colorScheme="blue"
                onClick={handleSubmit(onSubmit)}
              >
                <FaSearch />
              </Button>
            </HStack>
            {errors.gsmNumber && (
              <Text color="red">{errors.gsmNumber.message}</Text>
            )}
          </FormControl>
        </FormProvider>
      </HStack>
    </HStack>
  );
};
