import { Container, Typography, Box, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import RegisterForm from '../components/Auth/register/RegisterForm';

export default function RegisterPage() {
    const [userType, setUserType] = useState('pf');

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Înregistrare cont nou
        </Typography>
        <Tabs
          value={userType}
          onChange={(_, val) => setUserType(val)}
          centered
          sx={{ mb: 4 }}
        >
          <Tab label="Persoană Fizică" value="pf" />
          <Tab label="Persoană Juridică" value="pj" />
        </Tabs>
        <RegisterForm userType={userType} />
      </Box>
    </Container>
  );
}
