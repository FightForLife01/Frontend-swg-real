import { useState } from "react";
import { TextField, Button, Box, Alert } from "@mui/material";
import { useFormik } from "formik";
import { loginValidationSchema } from "../validations";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import AnimatedButton from '../../Buttons/AnimatedButton';


export default function LoginForm() {
  // Stare locală pentru gestionarea mesajelor de eroare
  const [error, setError] = useState("");

  // Hook pentru navigare programatică între pagini
  const navigate = useNavigate();

  // Preluare state din navigare pentru alerte (e.g., după înregistrare)
  const location = useLocation();
  const fromRegister = location.state?.fromRegister;

  // Folosim hook-ul custom pentru autentificare
  const { login } = useAuth();

  // Inițializarea formularului cu Formik
  const formik = useFormik({
    initialValues: {
      email: "",
      parola: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      setError("");
      try {
        // Autentifică utilizatorul folosind email și parolă
        await login(values.email, values.parola);
        // Navighează utilizatorul către dashboard după autentificare cu succes
        navigate("/dashboard");
      } catch (err) {
        // Setează mesajul de eroare primit de la server sau mesaj default
        setError(err.response?.data?.error || "Eroare server");
      }
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      {/* Alertă succes după înregistrare */}
      {fromRegister && (
        <Alert severity="success">
          Înregistrare realizată cu succes! Te poți loga acum.
        </Alert>
      )}

      {/* Alertă eroare în caz de autentificare eșuată */}
      {error && <Alert severity="error">{error}</Alert>}

      {/* Input pentru Email */}
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

      {/* Input pentru Parolă */}
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

      {/* Buton de submit pentru autentificare */}
      <AnimatedButton fullWidth type="submit" sx={{ mt: 2 }}>
        Autentifică-te
      </AnimatedButton>
    </Box>
  );
}
