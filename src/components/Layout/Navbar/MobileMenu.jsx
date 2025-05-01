import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const menuItems = [
  'Homepage', 'Importuri', 'Abonamente', 'Cursuri', 
  'Calculator Profitabilitate', 'Generator Factura', 'Generator QR', 'Blog', 
  'Contact', 'FAQs', 'Contul meu', 'Dashboard Admin', 'Dashboard Agent',
];

export default function MobileMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
      <IconButton color="inherit" onClick={(e) => setAnchorEl(e.currentTarget)}>
        <MenuIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
        {menuItems.map((item) => (
          <MenuItem key={item} onClick={() => setAnchorEl(null)}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
