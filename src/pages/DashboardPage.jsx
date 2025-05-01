import { Container, Typography, Box, Paper } from '@mui/material';

export default function DashboardPage() {
  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
        <Typography variant="h4" gutterBottom>
          Bine ai venit în Dashboard!
        </Typography>
        <Typography variant="body1">
          Această pagină este vizibilă doar utilizatorilor autentificați.
        </Typography>
      </Paper>
    </Container>
  );
}
