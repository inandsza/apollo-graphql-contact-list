import { shape, arrayOf, string } from 'prop-types';

export const phoneNumberTyoe = {
  label: string,
  number: string,
};

export const contactType = {
  id: string,
  firstName: string,
  lastName: string,
  phoneNumbers: arrayOf(shape(phoneNumberTyoe)),
};

export default contactType;
