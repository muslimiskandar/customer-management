import * as yup from "yup";

export const cardCloseSchema = yup.object().shape({
  cardCloseReason: yup
    .string()
    .required("Deaktivasiya üçün səbəb qeyd olunmalıdır"),
});
