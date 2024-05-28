import * as yup from "yup";

const bookSchema = yup.object().shape({
  name: yup.string().required("Book Name is required"),
  author: yup.string().required("Author Name is required"),
  publishers: yup.string().required("Publisher"),
  price: yup
    .number()
    .required("Price is required")
    .positive("Price must be a positive number"),
  genre: yup.string().required("Genre is required"),
  language: yup.string().required("Language is required"),
  numberOfPages: yup
    .number()
    .required("Number of Pages is required")
    .positive("Number of Pages must be a positive number")
    .integer("Number of Pages must be an integer"),
  completed: yup.boolean().required("Completion status is required"),
});

export default bookSchema;
