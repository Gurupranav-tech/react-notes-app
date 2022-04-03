import styles from './Button.module.css';
import { motion } from 'framer-motion';

function Button({ children, handleClick, isPrimary, ...args }) {
  const className = () => {
    let name = styles.btn;
    if (isPrimary) {
      name = `${name} ${styles.btnPrimary}`;
    }
    return name;
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={className()}
      onClick={handleClick}
      {...args}
    >
      {children}
    </motion.button>
  );
}

export default Button;
