import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";

export const SurnameForm: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<{ Surname: string }>();

  return (
    <FormControl isInvalid={!!errors.Surname}>
      <FormLabel>Soyadı</FormLabel>
      <Controller
        control={control}
        name="Surname"
        render={({ field }) => (
          <Input
            type="text"
            placeholder="Müştərinin soyadı.."
            border="1px solid #949494"
            name="gsmNumber"
            onChange={field.onChange}
            value={field.value}
            size="lg"
          />
        )}
      />
      <FormErrorMessage>{errors["Surname"]?.message}</FormErrorMessage>
    </FormControl>
  );
};
