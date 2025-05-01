import { Container, Typography } from '@mui/material';

export default function ContactPage() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" align="center">
        Contact
      </Typography>
      <Typography align="center">
        Ai întrebări? Contactează-ne acum!
      </Typography>
    </Container>
  );
}
