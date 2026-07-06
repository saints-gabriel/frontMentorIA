import Logo from '../components/Logo.jsx';
import Button from '../components/Button.jsx';
import { Header } from '../components/Header.jsx';
import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleAssistirAula = (aulaId) => {
      navigate('/content');
  };

  const handleFalarMentor = () => {
      navigate('/ai')
  };

  const aulas = [
    { id: 1, titulo: "Introdução ao Web", duracao: "15 min" }
  ];

  return (
    <div className={styles.page}>
      <Header/>

      <section className={styles.section}>
        <div className={styles.cardMentoria}>
            <p className={styles.mentoriaTexto}>Já fez sua avaliação de estudos?</p>
            <Button 
              variant="primary"
              onClick={handleFalarMentor}
            >
              Descubra sua nota!
            </Button>
          </div>
      </section>
      <main className={styles.main}>
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