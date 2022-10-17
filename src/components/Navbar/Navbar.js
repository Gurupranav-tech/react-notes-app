import { FaBars, FaPencilAlt, FaArrowLeft, FaSave } from 'react-icons/fa';
import styles from './Navbar.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { useNotes } from '../../contexts/NotesProvider';
import { useState } from 'react';
import Help from '../Help/Help';
import { toast } from 'react-toastify';

function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { save, notes, sourceSaved } = useNotes();
  const [help, setHelp] = useState(false);

  const moveFront = () =>
    navigate(
      `/notes/${
        notes[notes.length - 1] !== undefined
          ? notes[notes.length - 1].id + 1
          : 0
      }`
    );
  const moveBack = () => {
    if (!sourceSaved) {
      toast.warn('Note not saved');
      return;
    }
    navigate('/notes');
  };

  if (pathname === '/notes')
    return (
      <header className={styles.header}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.navbarBrand}
          onClick={() => setHelp(true)}
          aria-label='sidebar'
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
        </div>
        <AnimatePresence>
          {help && <Help onExit={() => setHelp(false)} />}
        </AnimatePresence>
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
          aria-label='close sidebar'
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
