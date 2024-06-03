import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";

export const NameForm: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<{ Name: string }>();

  return (
    <FormControl isInvalid={!!errors.Name}>
      <FormLabel>Adı</FormLabel>
      <Controller
        control={control}
        name="Name"
        render={({ field }) => (
          <Input
            type="text"
            placeholder="Müştərinin adı.."
            border="1px solid #949494"
            name="gsmNumber"
            onChange={field.onChange}
            value={field.value}
            size="lg"
          />
        )}
      />
      <FormErrorMessage>{errors["Name"]?.message}</FormErrorMessage>
    </FormControl>
  );
};
