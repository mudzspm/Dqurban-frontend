import * as yup from 'yup';

const schema = yup.object().shape({
  password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long'),
  email: yup.string().email('Invalid email address').required('Email is required'),
});

export default schema