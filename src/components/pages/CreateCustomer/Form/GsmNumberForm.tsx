import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
} from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";

export const GSMNumberForm: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<{ GSMNumber: string }>();

  return (
    <FormControl isInvalid={!!errors.GSMNumber}>
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
          name="GSMNumber"
          render={({ field }) => (
            <Input
              type="number"
              placeholder="Telefon nömrəsini daxil edin..."
              border="1px solid #949494"
              name="GSMNumber"
              onChange={field.onChange}
              value={field.value}
              pl="4rem"
              size="lg"
            />
          )}
        />
        <InputRightAddon p={0} border="none"></InputRightAddon>
      </InputGroup>
      <FormErrorMessage>{errors["GSMNumber"]?.message}</FormErrorMessage>
    </FormControl>
  );
};
