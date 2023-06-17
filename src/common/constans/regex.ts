export const onlyLettersRegex = /^[A-ZŻŹĆĄŚĘŁÓŃ]*$/i;
export const onlyLettersAndDashRegex = /^[A-ZŻŹĆĄŚĘŁÓŃ -]*$/i;
export const phoneRegex =
  /^\+[1-9]{1}[0-9]{0,2}[2-9]{1}[0-9]{2}[2-9]{1}[0-9]{2}[0-9]{4}$/;
export const expiryCardFormatRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
export const cardNumberRegex =
  /^5[1-5][0-9]{14}|^(222[1-9]|22[3-9]\\d|2[3-6]\\d{2}|27[0-1]\\d|2720)[0-9]{12}$|^4[0-9]{12}(?:[0-9]{3})?$/;
export const CVCNumberRegex = /[0-9]{3}/;
