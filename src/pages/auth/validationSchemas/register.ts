import * as yup from 'yup';

// const schema = yup.object().shape({
//   fullname: yup.string().required('Full name is required'),
//   ic_number: yup.string().min(1, 'IC number must have at least one character'),
//   phone_no: yup.string().required('Phone number is required'),
//   password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long'),
//   email: yup.string().email('Invalid email address').required('Email is required'),
// });


const schema = yup.object().shape({
  fullname: yup.string().required('Nama penuh diperlukan"'),
  ic_number: yup.string().min(1, 'Nombor IC mesti mempunyai sekurang-kurangnya satu aksara'),
  phone_no: yup.string().required('No. telefon diperlukan'),
  password: yup.string().required('Kata laluan diperlukan').min(8, 'Kata laluan mestilah sekurang-kurangnya 8 aksara'),
  email: yup.string().email('ID Pengguna / Kata Laluan tidak sah').required('E-mel diperlukan'),
});

export default schema