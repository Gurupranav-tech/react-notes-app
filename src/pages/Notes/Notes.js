import { motion } from 'framer-motion';
import Button from '../../components/Button/Button';
import Navbar from '../../components/Navbar/Navbar';
import { ReactComponent as Illustration } from '../../images/illustration.svg';
import styles from './Notes.module.css';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useNotes } from '../../contexts/NotesProvider';
import Card from '../../components/Card/Card';

function Notes() {
  const { pathname } = useLocation();

  return (
    <div className={styles.notes}>
      <Navbar />
      {pathname === '/notes' ? <DefaultUI /> : <Outlet />}
    </div>
  );
}

function DefaultUI() {
  const navigate = useNavigate();
  const { notes } = useNotes();

  const notesAvailable = notes.length !== 0;

  const move = () => navigate('/notes/0');

  const notesUnavailableUI = (
    <>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={{
          hidden: {
            scale: 0.25,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
          },
        }}
      >
        <Illustration />
      </motion.div>
      <div className={styles.info}>
        <h3>It is empty</h3>
        <p>Hmm.. looks like you don't have any notes</p>
      </div>
      <Button style={{ marginTop: '2rem' }} isPrimary handleClick={move}>
        Get started
      </Button>
    </>
  );

  const notesAvailableUI = (
    <div className={styles.cards}>
      {notes.map((note) => (
        <Card key={note.id} id={note.id}>
          {note.text}
        </Card>
      ))}
    </div>
  );

  return <>{notesAvailable ? notesAvailableUI : notesUnavailableUI}</>;
}

export default Notes;
