import * as yup from "yup";

const bookSchema = yup.object().shape({
  name: yup.string().trim().required("Book Name is required"),
  author: yup.string().trim().required("Author Name is required"),
  publishers: yup.string().trim().required("Publisher"),
  price: yup
    .number()
    .required("Price is required")
    .positive("Price must be a positive number"),
  genre: yup.string().trim().required("Genre is required"),
  language: yup.string().trim().required("Language is required"),
  numberOfPages: yup
    .number()
    .required("Number of Pages is required")
    .positive("Number of Pages must be a positive number")
    .integer("Number of Pages must be an integer"),
  completed: yup
    .boolean()
    .required("Completion status is required")
    .default(false),
});

export default bookSchema;
