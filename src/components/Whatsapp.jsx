
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsAppIcon = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-4 right-4 z-50 bg-[green] rounded-full"
    >
      <a 
        href="https://wa.me/0506908382" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <FaWhatsapp size={24} color='white' />
      </a>
    </motion.div>
  );
};

export default FloatingWhatsAppIcon;
