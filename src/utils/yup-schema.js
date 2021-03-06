import * as Yup from 'yup';

export const reserveFormSchema = Yup.object().shape({
  username: Yup.string().trim().required('Name is required').min(4).max(30),
  email: Yup.string()
    .email('Invalid email address')
    .trim()
    .required('Email field is required'),
  phone: Yup.string().min(11).max(11).required('Phone Number is required'),
});
