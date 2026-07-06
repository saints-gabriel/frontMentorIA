import styles from '../styles/Globals.module.css';
import Logo from '../components/Logo.jsx';
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
    const confirmLogout = window.confirm('Tem certeza que deseja sair?');
    
    localStorage.removeItem('authToken');
    localStorage.removeItem('nome');
    localStorage.removeItem('email');
    
    navigate('/login');
};
    return (
    <header className={styles.header}>
        <Logo className={styles.logo} />
        <nav className={styles.nav}>
          <a href="/home" className={styles.navLink}>Home</a>
          <a href="/content" className={styles.navLink}>Minhas trilhas</a>
          <a href="/ai" className={styles.navLink}>Mentor IA</a>
          <a href="/perfil" className={styles.navLink}>Perfil</a>
        </nav>
        <button 
          className={styles.logoutButton}
          onClick={handleLogout}
        >
          Sair
        </button>
      </header>
    )
        
}