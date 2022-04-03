import {
  FaBars,
  FaPencilAlt,
  FaSearch,
  FaArrowLeft,
  FaSave,
} from 'react-icons/fa';
import styles from './Navbar.module.css';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { useNotes } from '../../contexts/NotesProvider';

function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { save } = useNotes();

  const moveFront = () => navigate('/notes/0');
  const moveBack = () => navigate('/notes');

  if (pathname === '/notes')
    return (
      <header className={styles.header}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.navbarBrand}
        >
          <FaBars />
        </motion.div>
        <div className={styles.navbarNav}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={moveFront}
          >
            <FaPencilAlt />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <FaSearch />
          </motion.div>
        </div>
      </header>
    );
  else
    return (
      <header className={styles.header}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.navbarBrand}
          onClick={moveBack}
        >
          <FaArrowLeft />
        </motion.div>
        <div className={styles.navbarNav}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={save}
          >
            <FaSave />
          </motion.div>
        </div>
      </header>
    );
}

export default Navbar;
