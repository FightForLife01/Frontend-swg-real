// components/Layout/Navbar/Navbar.jsx

import { AppBar, Toolbar, IconButton, Typography, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import Search from './SearchInput';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '../../../assets/icons/icon-login.png';
import RegisterIcon from '../../../assets/icons/icon-register.png';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuItems from './MenuItems';
import MobileMenu from './MobileMenu';
import { useAuth } from '../../../hooks/useAuth';

export default function Navbar() {
  const { user, logout, loading } = useAuth();

  if (loading) {
    return (
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'center', bgcolor: '#383265' }}>
          <CircularProgress color="inherit" />
        </Toolbar>
      </AppBar>
    );
  }

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between', bgcolor: '#383265' }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ color: 'inherit', textDecoration: 'none' }}
        >
          LOGO
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
          <Search />

          {user && <Typography>Bună, {user.firstName}!</Typography>}

          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>

          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>

          {!user ? (
            <>
              <IconButton component={Link} to="/login" color="inherit">
                <img src={LoginIcon} alt="Login" style={{ width: 24 }} />
              </IconButton>

              <IconButton component={Link} to="/register" color="inherit">
                <img src={RegisterIcon} alt="Register" style={{ width: 24 }} />
              </IconButton>
            </>
          ) : (
            <IconButton color="inherit" onClick={logout}>
              <LogoutIcon />
              <Typography variant="caption" sx={{ ml: 0.5 }}>Logout</Typography>
            </IconButton>
          )}
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <MobileMenu />
        </Box>
      </Toolbar>

      <Toolbar variant="dense" sx={{ justifyContent: 'center', bgcolor: '#302a58' }}>
        <MenuItems />
      </Toolbar>
    </AppBar>
  );
}
