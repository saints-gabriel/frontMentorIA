import { useEffect, useState } from "react";
import Button from "../components/Button";
import DividerLabel from "../components/DividerLabel";
import styles from "./ContentPage.module.css";
import Logo from '../components/Logo.jsx';
import { useNavigate } from "react-router-dom";
import { getAllClasses } from "../services/classService";

export default function LearningTrail() {
  const [aulas, setAulas] = useState([]);
  const [conteudo, setConteudo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const carregarAulas = async () => {
      try {
        setLoading(true);
        setError("");
        const dados = await getAllClasses();

        if (!isMounted) return;

        setAulas(dados);
        setConteudo(dados[0] ?? null);
      } catch (err) {
        if (!isMounted) return;
        setError(err.message || "Não foi possível carregar as aulas.");
        setAulas([]);
        setConteudo(null);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    carregarAulas();

    return () => {
      isMounted = false;
    };
  }, []);

  const currentIndex = aulas.findIndex((aula) => aula.id === conteudo?.id);

  const goToLesson = (index) => {
    if (!aulas.length) return;
    const nextIndex = (index + aulas.length) % aulas.length;
    setConteudo(aulas[nextIndex]);
  };

  const goBack = () => {
    navigate('/home');
  };

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.logoArea}>
          <Logo />
        </div>

        <DividerLabel label="Trilha de Aprendizado" />

        <div className={styles.lessonList}>
          {aulas.map((aula) => (
            <button
              key={aula.id}
              className={`${styles.lessonCard} ${
                conteudo?.id === aula.id ? styles.active : ""
              }`}
              onClick={() => setConteudo(aula)}
            >
              <span className={styles.icon}>▶</span>

              <div>
                <strong>{aula.titulo}</strong>
              </div>
            </button>
          ))}
        </div>

        <div className={styles.progressBox}>
          <p>Seu progresso</p>

          <div className={styles.progressBar}>
            <div
              className={styles.progress}
              style={{ width: "0%" }}
            />
          </div>

          <span>0% concluído</span>
        </div>
        <Button
          className={styles.buttonCenter}
          onClick={goBack}
        >
          Voltar
        </Button>
      </aside>

      <main className={styles.content}>
        {loading && <p className={styles.loadingState}>Carregando aulas...</p>}
        {error && <p className={styles.errorState}>{error}</p>}

        {!loading && !error && !conteudo && (
          <p className={styles.loadingState}>Nenhuma aula disponível no momento.</p>
        )}

        {!loading && !error && conteudo && (
          <>
            <h1 className={styles.blackFont}>{conteudo.titulo}</h1>

            <DividerLabel label="Conteúdo da Aula" />

            <p className={styles.description}>
              {conteudo.descricao}
            </p>

            <div className={styles.material}>
              <h3>Material</h3>

              <div className={styles.materialArea}>
                {conteudo.videoUrl ? (
                  <>
                    <iframe className={styles.videoPlayer} controls src={conteudo.videoUrl} />
                  </>
                ) : (
                  <div className={styles.emptyState}>
                    <p>Nenhum vídeo disponível para esta aula no momento.</p>
                    {conteudo.materialUrl && (
                      <a
                        className={styles.materialLink}
                        href={conteudo.materialUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Abrir material complementar
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className={styles.footerButtons}>
              <Button
                variant="secondary"
                onClick={() => goToLesson(currentIndex - 1)}
                disabled={aulas.length <= 1}
              >
                Aula anterior
              </Button>

              <Button
                onClick={() => goToLesson(currentIndex + 1)}
                disabled={aulas.length <= 1}
              >
                Próxima aula
              </Button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}