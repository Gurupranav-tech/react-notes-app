import styles from './Card.module.css';
import { FaArrowRight } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useNotes } from '../../contexts/NotesProvider';
import { toast } from 'react-toastify';

function Card({ children, id, redirectUrl }) {
  const { deleteNote } = useNotes();

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      exit='exit'
      variants={{
        hidden: { opacity: 0, translateX: '-100vw' },
        visible: { opacity: 1, translateX: 0 },
        exit: { opacity: 0, translateX: '-100vw' },
      }}
      className={styles.card}
    >
      <div className={styles.cardId}>{id}</div>
      <div className={styles.cardText}>{children}</div>
      <div className={styles.icons}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.deleteButton}
          onClick={() => {
            deleteNote(id);
            toast.info('Note deleted');
          }}
        >
          <AiFillDelete />
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to={redirectUrl}>
            <FaArrowRight />
          </Link>
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Card;
