import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      className="bg-purple-700 text-white text-center p-4 fixed bottom-0 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p>&copy; 2024 Hotel Venezuela. Todos los derechos reservados.</p>
    </motion.footer>
  );
}

export default Footer;
