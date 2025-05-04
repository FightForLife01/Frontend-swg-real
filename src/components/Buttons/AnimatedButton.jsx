/* eslint-disable no-unused-vars */
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';

/**
 * Componentă reutilizabilă pentru butoane animate cu Framer Motion
 * Utilizează props pentru flexibilitate și reutilizare.
 */
export default function AnimatedButton({ children, ...props }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }} // Animație hover
      whileTap={{ scale: 0.95 }}   // Animație click
      transition={{ duration: 0.2 }} // Durată animație
    >
      <Button variant="contained" color="primary" {...props}>
        {children}
      </Button>
    </motion.div>
  );
}
