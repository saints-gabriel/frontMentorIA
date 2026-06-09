import Logo from '../components/Logo.jsx';
import Button from '../components/Button.jsx';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import styles from './AIPage.module.css';

const AIPage = () => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    setText("");
    };

  const navigate = useNavigate();

  const handleLogout = () => {
  const confirmLogout = window.confirm('Tem certeza que deseja sair?');
    
    navigate('/login');
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Logo className={styles.logo} />
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>Minhas trilhas</a>
          <a href="#" className={styles.navLink}>Mentor IA</a>
          <a href="#" className={styles.navLink}>Perfil</a>
        </nav>
        <button 
          className={styles.logoutButton}
          onClick={handleLogout}
        >
          Sair
        </button>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>MentorIA</h2>
          
          <div className={styles.chatPrompt}>
          <textarea
            rows={1}
            placeholder="Me pergunte qualquer coisa..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
            if (e.key === "Enter" &&!e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
            }}
          /> <br />
 <button className={styles.sendButton} disabled={!text.trim()} onClick={handleSend}>
 ↑
 </button>
 </div>
        </section>
      </main>
    </div>
  );
};

export default AIPage;