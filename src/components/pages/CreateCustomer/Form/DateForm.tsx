import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";

export const DateForm: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<{ BirthDate: string }>();

  return (
    <FormControl isInvalid={!!errors.BirthDate}>
      <FormLabel>Adı</FormLabel>
      <Controller
        control={control}
        name="BirthDate"
        render={({ field }) => (
          <Input
            placeholder="Tarixi seçin"
            type="date"
            size="lg"
            onChange={field.onChange}
            value={field.value}
            border="1px solid #949494"
            name="BirthDate"
          />
        )}
      />
      <FormErrorMessage>{errors["BirthDate"]?.message}</FormErrorMessage>
    </FormControl>
  );
};
