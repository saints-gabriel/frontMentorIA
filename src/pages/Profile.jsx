import Logo from '../components/Logo.jsx';
import User from '../components/User.jsx'
import { Header } from '../components/Header.jsx';
import { useNavigate } from 'react-router-dom';
import styles from './Profile.module.css';

const ProfilePage = () => {
  const username = localStorage.getItem('nome');
  const email = localStorage.getItem('email');
  
  return (
    <div className={styles.page}>
      <Header/>
      <div className={styles.filler}>
        <User/>
        <h2 className={styles.sectionTitle}>Olá, {username}</h2>
        <p className={styles.sectionTitle}>Seu e-mail cadastrado é: {email}</p>
      </div>
    </div>
  );
};

export default ProfilePage;