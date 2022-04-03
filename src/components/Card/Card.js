import styles from './Card.module.css';
import { FaArrowRight } from 'react-icons/fa';

function Card({ children, id }) {
  return (
    <div className={styles.card}>
      <div className='id'>{id}</div>
      <div className='cardText'>{children}</div>
      <FaArrowRight />
    </div>
  );
}

export default Card;
