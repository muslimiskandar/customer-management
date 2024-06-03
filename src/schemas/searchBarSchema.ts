import * as yup from "yup";

export const searchBarSchema = yup.object().shape({
  gsmNumber: yup
    .string()
    .required("Axtarış üçün 9 rəqəmli telefon nömrəsini daxil edin")
    .test("len", "9 simvol olmalıdır", (val) => val.length == 9),
});
