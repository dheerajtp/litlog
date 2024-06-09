import * as yup from "yup";

const quoteSchema = yup.object().shape({
  quote: yup.string().trim().required("Quote is required"),
  page: yup
    .number()
    .required("Number of Pages is required")
    .positive("Number of Pages must be a positive number")
    .integer("Number of Pages must be an integer"),
});

export default quoteSchema;
