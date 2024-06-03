import * as yup from "yup";

export const createCustomerSchema = yup.object().shape({
  Name: yup.string().required("Müştərinin adı daxil edin"),
  Surname: yup.string().required("Müştərinin soyadını daxil edin"),
  BirthDate: yup.string().required("Doğum tarixi boş ola bilməz"),
  GSMNumber: yup
    .string()
    .required("Nömrəni daxil edin")
    .test("len", "12 simvol olmalıdır", (val) => val.length == 9),
});
