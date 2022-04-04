import styles from './Help.module.css';
import { FaWindowClose, FaGithub, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Help({ onExit }) {
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
      transition={{ type: 'tween' }}
      className={styles.helpContainer}
    >
      <h4 className={styles.heading}>
        About
        <motion.span
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onExit}
        >
          <FaWindowClose />
        </motion.span>
      </h4>
      <div className={styles.content}>
        <div>
          <h5>Fully functioning notes app</h5>
          <p>
            A fully functioning notes app made with React.js and Framer motion.
            Stores the notes data in localstorage. No data is sent to the
            server. Highly secure app
          </p>
        </div>
        <div className={styles.credits}>
          <h5>Created by</h5>
          <p>Guru pranav</p>
          <div className={styles.icons}>
            <a
              href='https://www.github.com/Gurupranav-tech'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub />
            </a>
            <a
              href='https://twitter.com/PRGuruPranav1'
              target='_blank'
              className={styles.twitter}
              rel='noreferrer'
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Help;
