import Logo from '../components/Logo.jsx';
import Button from '../components/Button.jsx';
import { useNavigate } from "react-router-dom";
import styles from './HomePage.module.css';

const HomePage = () => {
  const navigate = useNavigate();

  const aulas = [
    { id: 1, titulo: "Introdução ao Lorem Ipsum", duracao: "15 min" },
    { id: 2, titulo: "Tags Lorem Ipsum", duracao: "26 min" }
  ];

  const handleAssistirAula = (aulaId) => {
    console.log(`Assistir aula ${aulaId}`);
  };

  const handleFalarMentor = () => {
    console.log("Falar com mentoria IA");
  };

  const handleLogout = () => {
  // Opção 1: Confirmar antes de sair
  const confirmLogout = window.confirm('Tem certeza que deseja sair?');
    
    // Redirecionar para login
    navigate('/login');
};

  return (
    <div className={styles.page}>
      {/* Header com menu */}
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
        {/* Seção "O que estudar hoje" */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>O que estudar hoje</h2>
          
          <div className={styles.aulasList}>
            {aulas.map(aula => (
              <div key={aula.id} className={styles.cardAula}>
                <div className={styles.aulaInfo}>
                  <h3 className={styles.aulaTitulo}>Aula: {aula.titulo}</h3>
                  <span className={styles.aulaDuracao}>Duração: {aula.duracao}</span>
                </div>
                <Button 
                  variant="secondary"
                  onClick={() => handleAssistirAula(aula.id)}
                >
                  Assistir Aula
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Seção "Mentoria IA" */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mentoria IA</h2>
          
          <div className={styles.cardMentoria}>
            <p className={styles.mentoriaTexto}>Precisa de ajuda?</p>
            <Button 
              variant="primary"
              onClick={handleFalarMentor}
            >
              Falar com a mentoria IA
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;