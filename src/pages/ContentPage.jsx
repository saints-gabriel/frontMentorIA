import { useState } from "react";
import Button from "../components/Button";
import DividerLabel from "../components/DividerLabel";
import Logo from "../components/Logo";
import styles from "./ContentPage.module.css";

const aulas = [
  {
    id: 1,
    titulo: "Boas-vindas",
    descricao: "Conheça a plataforma e como aproveitar sua trilha.",
    status: "concluido",
  },
  {
    id: 2,
    titulo: "Introdução ao Front-end",
    descricao:
      "Nesta aula você aprenderá os conceitos fundamentais do desenvolvimento Front-end.",
    status: "atual",
  },
  {
    id: 3,
    titulo: "HTML",
    descricao: "Estruturação de páginas web.",
    status: "pendente",
  },
  {
    id: 4,
    titulo: "CSS",
    descricao: "Estilizando aplicações.",
    status: "pendente",
  },
  {
    id: 5,
    titulo: "JavaScript",
    descricao: "Lógica e interatividade.",
    status: "pendente",
  },
];

export default function LearningTrail() {
  const [conteudo, setConteudo] = useState(aulas[1]);

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.logoArea}>
          <Logo />
          <h2>Mentor IA+</h2>
        </div>

        <DividerLabel label="Trilha de Aprendizado" />

        <div className={styles.lessonList}>
          {aulas.map((aula) => (
            <button
              key={aula.id}
              className={`${styles.lessonCard} ${
                conteudo.id === aula.id ? styles.active : ""
              }`}
              onClick={() => setConteudo(aula)}
            >
              <span className={styles.icon}>
                {aula.status === "concluido" && "✅"}
                {aula.status === "atual" && "▶"}
                {aula.status === "pendente" && "🔒"}
              </span>

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
              style={{ width: "40%" }}
            />
          </div>

          <span>40% concluído</span>
        </div>
      </aside>

      <main className={styles.content}>
        <h1>{conteudo.titulo}</h1>

        <DividerLabel label="Conteúdo da Aula" />

        <p className={styles.description}>
          {conteudo.descricao}
        </p>

        <div className={styles.material}>
          <h3>Material</h3>

          <div className={styles.materialArea}>
            Aqui ficará o vídeo da aula, PDF, exercícios ou qualquer outro
            conteúdo carregado pela API.
          </div>
        </div>

        <div className={styles.footerButtons}>
          <Button variant="secondary">
            Aula anterior
          </Button>

          <Button>
            Próxima aula
          </Button>
        </div>
      </main>
    </div>
  );
}