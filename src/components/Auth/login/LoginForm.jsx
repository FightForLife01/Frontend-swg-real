import { useState } from 'react';
import { TextField, Button, Box, Alert } from '@mui/material';
import { useFormik } from 'formik';
import { loginValidationSchema } from '../validations';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

export default function LoginForm() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Folosim login din context global

  const formik = useFormik({
    initialValues: {
      email: '',
      parola: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      setError('');
      try {
        await login(values.email, values.parola);
        navigate('/dashboard');
      } catch (err) {
        setError(err.response?.data?.error || 'Eroare server');
      }
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      {error && <Alert severity="error">{error}</Alert>}

      <TextField
        fullWidth
        margin="normal"
        label="Email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Parolă"
        type="password"
        name="parola"
        value={formik.values.parola}
        onChange={formik.handleChange}
        error={formik.touched.parola && Boolean(formik.errors.parola)}
        helperText={formik.touched.parola && formik.errors.parola}
      />

      <Button variant="contained" fullWidth type="submit" sx={{ mt: 2 }}>
        Autentifică-te
      </Button>
    </Box>
  );
}
