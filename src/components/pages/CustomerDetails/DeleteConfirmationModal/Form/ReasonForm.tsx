import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";

export const ReasonForm: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<{ cardCloseReason: string }>() ?? {};

  return (
    <FormControl isInvalid={!!errors.cardCloseReason}>
      <FormLabel>Kartı niyə bağlamaq istəyirsiz?</FormLabel>
      <Controller
        control={control}
        name="cardCloseReason"
        render={({ field }) => (
          <Textarea
            placeholder="Səbəbini qeyd edin"
            border="1px solid #949494"
            name="cardCloseReason"
            onChange={field.onChange}
            value={field.value}
            size="lg"
          />
        )}
      />
      <FormErrorMessage>{errors["cardCloseReason"]?.message}</FormErrorMessage>
    </FormControl>
  );
};
