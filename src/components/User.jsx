import styles from '../styles/Globals.module.css';
import userSrc from '../assets/User.png';

const User = () => {
  return <img src={userSrc} alt="Foto de usuário" className={styles.userImage} />;
};

export default User;
