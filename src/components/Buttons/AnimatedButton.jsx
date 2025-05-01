import Button from '@mui/material/Button';
import { motion } from 'framer-motion';

export default function AnimatedButton({ children, ...props }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Button variant="contained" color="primary" {...props}>
        {children}
      </Button>
    </motion.div>
  );
}
