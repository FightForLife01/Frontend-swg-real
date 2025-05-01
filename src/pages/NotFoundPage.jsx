import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <Container sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="h2" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Pagina nu a fost găsită!
      </Typography>
      <Button variant="contained" component={Link} to="/">
        Înapoi la Homepage
      </Button>
    </Container>
  );
}
