import { motion } from 'framer-motion';
import Weather from '../components/Weather';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="p-8"
    >
      <h1 className="text-4xl font-bold">Bienvenido al Hotel Venezuela</h1>
      <p className="mt-4 text-lg">Descubre nuestro servicio de calidad en un lugar paradisíaco.</p>
    </motion.div>
  );
}

export default Home;
