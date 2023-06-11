export const onlyLettersRegex = /^[A-ZŻŹĆĄŚĘŁÓŃ]*$/i;
export const onlyLettersAndDashRegex = /^[A-ZŻŹĆĄŚĘŁÓŃ -]*$/i;
export const phoneRegex =
  /^\+[1-9]{1}[0-9]{0,2}[2-9]{1}[0-9]{2}[2-9]{1}[0-9]{2}[0-9]{4}$/;
export const expiryCardFormatRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
// export const cardNumberRegex =
//   /^(4[0-9]{12}(?:[0-9]{3})?)$|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12})$|(3[47][0-9]{13}|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$|(^6(?:011|5[0-9]{2})[0-9]{12}$|(^(?:2131|1800|35\d{3})\d{11})$/;
export const cardNumberRegex =
  /^5[1-5][0-9]{14}|^(222[1-9]|22[3-9]\\d|2[3-6]\\d{2}|27[0-1]\\d|2720)[0-9]{12}$|^4[0-9]{12}(?:[0-9]{3})?$/;
export const CVCNumberRegex = /[0-9]{3}/;
