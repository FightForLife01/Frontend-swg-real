import * as Yup from 'yup';

export const getValidationSchema = (userType) => Yup.object({
  nume: Yup.string().required('Obligatoriu'),
  prenume: Yup.string().required('Obligatoriu'),
  telefon: Yup.string().required('Obligatoriu'),
  email: Yup.string().email('Email invalid').required('Obligatoriu'),
  parola: Yup.string().min(8, 'Minim 8 caractere').required('Obligatoriu'),
  strada: Yup.string().required('Obligatoriu'),
  nr: Yup.string().required('Obligatoriu'),
  localitate: Yup.string().required('Obligatoriu'),
  judet: Yup.string().required('Obligatoriu'),
  tara: Yup.string().required('Obligatoriu'),
  usernameTelegram: Yup.string()
    .matches(/^@[a-zA-Z0-9_]{5,32}$/, 'Username Telegram invalid')
    .required('Obligatoriu'),
    numeCompanie: userType === 'pj' ? Yup.string().required('Obligatoriu') : Yup.string(),
    cui: userType === 'pj' ? Yup.string().required('Obligatoriu') : Yup.string(),
    cif: userType === 'pj' ? Yup.string().required('Obligatoriu') : Yup.string(),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string().email('Email invalid').required('Obligatoriu'),
  parola: Yup.string().required('Obligatoriu'),
});
