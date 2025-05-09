import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Alert,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { getValidationSchema } from "../validations";
import { registerUser } from "../../../services/authService";
import { useNavigate } from "react-router-dom"; // import corect pentru navigare
import AnimatedButton from "../../Buttons/AnimatedButton";

// Componenta principală pentru formularul de înregistrare
export default function RegisterForm({ userType }) {
  const [error, setError] = useState("");

  // Inițializează hook-ul pentru navigare
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      nume: "",
      prenume: "",
      telefon: "",
      email: "",
      parola: "",
      strada: "",
      nr: "",
      localitate: "",
      judet: "",
      tara: "",
      usernameTelegram: "",
      numeCompanie: "",
      cui: "",
      cif: "",
      acceptGDPR: false,
    },
    validationSchema: getValidationSchema(userType),
    onSubmit: async (values) => {
      setError("");
      try {
        const userData = {
          firstName: values.nume,
          lastName: values.prenume,
          email: values.email,
          password: values.parola,
          phone: values.telefon,
          street: values.strada,
          streetNumber: values.nr,
          city: values.localitate,
          county: values.judet,
          country: values.tara,
          telegramUsername: values.usernameTelegram,
          userType,
          companyName: userType === "pj" ? values.numeCompanie : null,
          CUI: userType === "pj" ? values.cui : null,
          CIF: userType === "pj" ? values.cif : null,
        };

        const response = await registerUser(userData);
        console.log(response);

        // Corect: Redirecționează către pagina login după înregistrare cu succes
        navigate("/login", { state: { fromRegister: true } });
      } catch (err) {
        setError(err.response?.data?.message || "Eroare server");
      }
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      {/* Afișare eroare generală dacă există */}
      {error && <Alert severity="error">{error}</Alert>}

      {/* Câmpuri comune pentru PF și PJ */}
      <TextField
        fullWidth
        margin="normal"
        label="Nume"
        name="nume"
        value={formik.values.nume}
        onChange={formik.handleChange}
        error={formik.touched.nume && Boolean(formik.errors.nume)}
        helperText={formik.touched.nume && formik.errors.nume}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Prenume"
        name="prenume"
        value={formik.values.prenume}
        onChange={formik.handleChange}
        error={formik.touched.prenume && Boolean(formik.errors.prenume)}
        helperText={formik.touched.prenume && formik.errors.prenume}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Telefon"
        name="telefon"
        value={formik.values.telefon}
        onChange={formik.handleChange}
        error={formik.touched.telefon && Boolean(formik.errors.telefon)}
        helperText={formik.touched.telefon && formik.errors.telefon}
      />
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

      {/* Câmpuri pentru adresă */}
      <TextField
        fullWidth
        margin="normal"
        label="Strada"
        name="strada"
        value={formik.values.strada}
        onChange={formik.handleChange}
        error={formik.touched.strada && Boolean(formik.errors.strada)}
        helperText={formik.touched.strada && formik.errors.strada}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Nr."
        name="nr"
        value={formik.values.nr}
        onChange={formik.handleChange}
        error={formik.touched.nr && Boolean(formik.errors.nr)}
        helperText={formik.touched.nr && formik.errors.nr}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Localitate"
        name="localitate"
        value={formik.values.localitate}
        onChange={formik.handleChange}
        error={formik.touched.localitate && Boolean(formik.errors.localitate)}
        helperText={formik.touched.localitate && formik.errors.localitate}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Județ"
        name="judet"
        value={formik.values.judet}
        onChange={formik.handleChange}
        error={formik.touched.judet && Boolean(formik.errors.judet)}
        helperText={formik.touched.judet && formik.errors.judet}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Țară"
        name="tara"
        value={formik.values.tara}
        onChange={formik.handleChange}
        error={formik.touched.tara && Boolean(formik.errors.tara)}
        helperText={formik.touched.tara && formik.errors.tara}
      />

      {/* Username Telegram */}
      <TextField
        fullWidth
        margin="normal"
        label="Username Telegram"
        name="usernameTelegram"
        value={formik.values.usernameTelegram}
        onChange={formik.handleChange}
        error={
          formik.touched.usernameTelegram &&
          Boolean(formik.errors.usernameTelegram)
        }
        helperText={
          formik.touched.usernameTelegram && formik.errors.usernameTelegram
        }
      />

      {/* Câmpuri specifice pentru PJ */}
      {userType === "pj" && (
        <>
          <TextField
            fullWidth
            margin="normal"
            label="Nume Companie"
            name="numeCompanie"
            value={formik.values.numeCompanie}
            onChange={formik.handleChange}
            error={
              formik.touched.numeCompanie && Boolean(formik.errors.numeCompanie)
            }
            helperText={
              formik.touched.numeCompanie && formik.errors.numeCompanie
            }
          />
          <TextField
            fullWidth
            margin="normal"
            label="CUI"
            name="cui"
            value={formik.values.cui}
            onChange={formik.handleChange}
            error={formik.touched.cui && Boolean(formik.errors.cui)}
            helperText={formik.touched.cui && formik.errors.cui}
          />
          <TextField
            fullWidth
            margin="normal"
            label="CIF"
            name="cif"
            value={formik.values.cif}
            onChange={formik.handleChange}
            error={formik.touched.cif && Boolean(formik.errors.cif)}
            helperText={formik.touched.cif && formik.errors.cif}
          />
        </>
      )}

      {/* Checkbox GDPR */}
      <FormControlLabel
        control={
          <Checkbox
            name="acceptGDPR"
            checked={formik.values.acceptGDPR}
            onChange={formik.handleChange}
          />
        }
        label="Accept termenii și condițiile GDPR"
      />

      {formik.touched.acceptGDPR && formik.errors.acceptGDPR && (
        <Alert severity="error">{formik.errors.acceptGDPR}</Alert>
      )}

      {/* Buton submit formular */}

      <AnimatedButton fullWidth type="submit" sx={{ mt: 2 }}>
        Înregistrează-te
      </AnimatedButton>
    </Box>
  );
}
