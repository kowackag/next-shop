import * as yup from "yup";
import {
  cardNumberRegex,
  phoneRegex,
  CVCNumberRegex,
  expiryCardFormatRegex,
  onlyLettersAndDashRegex,
  onlyLettersRegex,
} from "src/common/constans/regex";
import { compareAsc } from "date-fns";

export const schema = yup.object({
  firstName: yup
    .string()
    .matches(onlyLettersRegex, "Invalid First Name")
    .required("First Name is required"),
  lastName: yup
    .string()
    .matches(onlyLettersAndDashRegex, "Invalid Last Name")
    .required("Last Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email address is required"),
  phone: yup
    .string()
    .required("Phone number is a required field")
    .matches(phoneRegex, "Invalid phone number"),
  cardNumber: yup
    .string()
    .matches(cardNumberRegex, "Invalid phone number")
    .required("Card number is a required field"),
  cardExpiry: yup
    .string()
    .required("Card expiry date is a required field")
    .matches(expiryCardFormatRegex, "Invalid card expiry date")
    .test("cardIsNotExpiry", "The card has expired", (value) => {
      const month = Number(value?.slice(0, 2));
      const year = Number(`20${value?.slice(-2)}`);
      const expiryDate = new Date(year, month, 1); // first day of next month
      return compareAsc(expiryDate, new Date()) === -1 ? false : true;
    }),
  cardCVC: yup
    .string()
    .matches(CVCNumberRegex, "Invalid CVC number")
    .required("CVC is required")
    .max(3, "CVC may have only the numbers"),
});
