import { FaBars, FaPencilAlt, FaSearch } from 'react-icons/fa';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.navbarBrand}>
        <FaBars />
      </div>
      <div className={styles.navbarNav}>
        <FaPencilAlt />
        <FaSearch />
      </div>
    </header>
  );
}

export default Navbar;
