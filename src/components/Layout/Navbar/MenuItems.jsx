// components/Layout/Navbar/MenuItems.jsx

import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

export default function MenuItems() {
  const { user } = useAuth();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: '#3f3c70', p: 1, flexWrap: 'wrap' }}>
      <Typography component={Link} to="/" sx={linkStyle}>Homepage</Typography>
      <Typography component={Link} to="/importuri" sx={linkStyle}>Importuri</Typography>
      <Typography component={Link} to="/abonamente" sx={linkStyle}>Abonamente</Typography>
      <Typography component={Link} to="/cursuri" sx={linkStyle}>Cursuri</Typography>
      <Typography component={Link} to="/calculator-profitabilitate" sx={linkStyle}>Calculator Profitabilitate</Typography>
      <Typography component={Link} to="/generator-qr" sx={linkStyle}>Generator QR code</Typography>
      <Typography component={Link} to="/blog" sx={linkStyle}>Blog</Typography>
      <Typography component={Link} to="/contact" sx={linkStyle}>Contact</Typography>
      <Typography component={Link} to="/faqs" sx={linkStyle}>FAQs</Typography>

      {user && (
        <Typography component={Link} to="/contul-meu" sx={linkStyle}>
          Contul meu
        </Typography>
      )}

      {user?.role === 'admin' && (
        <Typography component={Link} to="/dashboard/admin" sx={linkStyle}>
          Dashboard Admin
        </Typography>
      )}

      {user?.role === 'agent' && (
        <Typography component={Link} to="/dashboard/agent" sx={linkStyle}>
          Dashboard Agent
        </Typography>
      )}
    </Box>
  );
}

const linkStyle = {
  color: '#fff',
  mx: 1,
  cursor: 'pointer',
  textDecoration: 'none',
  '&:hover': { opacity: 0.7 },
  fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }  // responsive clar pentru telefon/tabletă
};
