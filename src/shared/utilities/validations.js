import * as yup from 'yup';

import {emailRegex} from './constant';

export const CustomerRegisterStep1Fields = {
  address: '',
  street: '',
  postCode: '',
  province: '',
  barangay: '',
  city: '',
  country: '',
};

export const CustomerRegisterStep2Fields = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  govtID: '',
  password: '',
};

export const SPRegisterStep1Fields = {
  city: '',
  country: '',
};

export const SignUPFormFields = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phone: '',
  country: '',
  city: '',
  age: '',
  sex: 'Male',
  pronoun: 'she/her',
};

export const SPRegisterStep3Fields = {
  hourly_rate: '',
};

export const loginFormFields = {
  email: '',
  password: '',
};
export const createFormFields = {
  password: '',
  confirmPassword: '',
};
export const forgotFormFields = {
  email: '',
};
export const codeFormFields = {
  code: '',
};
export const Addkiddsfield = {
  kidAge: '',
  kidName: '',
};

export const LoginVS = yup.object().shape({
  email: yup
    .string()
    .required('Email address Required')
    .email('Please provide a valid email address'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required'),
});

export const SignUpVS = yup.object().shape({
  firstName: yup.string().required('First Name Required'),
  lastName: yup.string().required('Last Name Required'),
  email: yup
    .string()
    .required('Email address is Required')
    .email('Please provide a valid email address'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required'),
  phone: yup
    .string()
    .min(11, 'Phone number must be at least 11 characters')
    .required('Phone Number Required'),
  country: yup.string().required('Country Name Required'),
  city: yup.string().required('City Name Required'),
  age: yup.string().required('Age Requried'),
  sex: yup.string().required('Gender Requried'),
  pronoun: yup.string().required('Pronoun Requried'),
});

// export const CustomerRegisterStep2VS = yup.object().shape({
//   firstName: yup.string().required('First Name Required').label('firstName'),
//   lastName: yup.string().required('Last Name Required').label('lastName'),
//   email: yup
//     .string()
//     .email('please Enter Valid Email')
//     .required('Email Address Required')
//     .label('email'),
//   phone: yup.string().required('Phone Number Required').label('phone'),
//   govtID: yup.string().required('Govt ID Required').label('govtID'),
//   password: yup.string().required('Password Required').label('password'),
// });

// export const SPRegisterStep1VS = yup.object().shape({
//   city: yup.string().required('City Name Required').label('city'),
//   country: yup.string().required('Country Name Required').label('country'),
// });

// export const SPRegisterStep2VS = yup.object().shape({
//   firstName: yup.string().required('First Name Required').label('firstName'),
//   lastName: yup.string().required('Last Name Required').label('lastName'),
//   email: yup.string().required('Email Address Required').label('email'),
//   phone: yup.string().required('Phone Number Required').label('phone'),
//   govtID: yup.string().required('Govt ID Required').label('govtID'),
//   password: yup.string().required('Password Required').label('password'),
// });

// export const SPRegisterStep3VS = yup.object().shape({
//   hourly_rate: yup
//     .string()
//     .required('Hourly Rate Required')
//     .label('hourly_rate'),
// });

export const CreatePasswordVS = yup.object().shape({
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('New Password Required'),

  confirmPassword: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Confirm New Password Required')
    .oneOf([yup.ref('password'), null], 'New Passwords do not match'),
});

export const ForgotPasswordVS = yup.object().shape({
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
});

// export const AddKiddsVS = yup.object().shape({
//   kidName: yup.string().required('Kid Name Required').label('kidName'),
//   kidAge: yup.string().required('Kid Age Required').label('kidAge'),
// });
