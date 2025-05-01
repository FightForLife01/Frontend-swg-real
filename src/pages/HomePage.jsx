import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Bun venit la SWG Platform
      </Typography>
      <Typography variant="h6" align="center" paragraph>
        Platforma completă pentru gestionarea abonamentelor, cursurilor și importurilor.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
        <Button variant="contained" component={Link} to="/abonamente">
          Vezi Abonamente
        </Button>
        <Button variant="outlined" component={Link} to="/cursuri">
          Explorează Cursurile
        </Button>
      </Box>
    </Container>
  );
}
