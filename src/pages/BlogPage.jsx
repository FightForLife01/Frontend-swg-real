import { Container, Typography } from '@mui/material';

export default function BlogPage() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" align="center">
        Blog
      </Typography>
      <Typography align="center">
        Citește ultimele noutăți și articole utile.
      </Typography>
    </Container>
  );
}
