import * as yup from "yup";

export const OrderValidation = () =>
  yup.object().shape({
    name: yup.string().required("This field is required"),
    price: yup.string().required("This field is required"),
    image: yup.string().required("This field is required image URL"),
    description: yup.string().required("This field is required"),
    
  });
