import { Container, Typography } from '@mui/material';

export default function FAQsPage() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" align="center">
        FAQs
      </Typography>
      <Typography align="center">
        Găsește răspunsuri rapide la cele mai frecvente întrebări.
      </Typography>
    </Container>
  );
}
