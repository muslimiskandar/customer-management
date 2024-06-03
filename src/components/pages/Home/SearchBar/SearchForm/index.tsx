import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TSearchBar } from "../../../../../models";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
} from "@chakra-ui/react";

export const SearchForm: React.FC = () => {
  const { control } = useFormContext<TSearchBar>();

  return (
    <InputGroup>
      <InputLeftElement
        width="4rem"
        height="100%"
        fontSize="1.125rem"
        alignItems="center"
      >
        +994
      </InputLeftElement>

      <Controller
        control={control}
        name="gsmNumber"
        render={({ field }) => (
          <Input
            type="number"
            placeholder="Telefon nömrəsini daxil edin..."
            border="1px solid #949494"
            name="gsmNumber"
            onChange={field.onChange}
            value={field.value}
            pl="4rem"
            size="lg"
          />
        )}
      />
      <InputRightAddon p={0} border="none"></InputRightAddon>
    </InputGroup>
  );
};
