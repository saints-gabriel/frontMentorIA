import styles from '../Styles/Globals.css';
import logoSrc from '../assets/Logo.png';

const Logo = () => {
  return <img src={logoSrc} alt="Mentor IA+" className={styles.logoImage} />;
};

export default Logo;
