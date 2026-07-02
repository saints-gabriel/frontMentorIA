import Logo from '../components/Logo.jsx';
import Button from '../components/Button.jsx';
import Chat from '../components/Chat.jsx';
import { Header } from '../components/Header.jsx';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import styles from './AIPage.module.css';

const AIPage = () => {
  const [text, setText] = useState("");
  const [mensagens, setMensagens] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSend = async () => {
  if (!text.trim() || loading) return;

  const pergunta = text;
  setMensagens((prev) => [
    ...prev,
    { texto: pergunta, tipo: "enviado" },
  ]);
  setText("");
  setLoading(true);

  try {
    const response = await fetch("http://localhost:3000/gemini/pergunta", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pergunta }),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data = await response.json();

    setMensagens((prev) => [
      ...prev,
      { texto: data.resposta, tipo: "recebida" },
    ]);
  } catch (erro) {
    console.error(erro);
    setMensagens((prev) => [
      ...prev,
      {
        texto: "Não consegui responder agora. Tente novamente.",
        tipo: "recebida",
      },
    ]);
  } finally {
    setLoading(false);
  }
};

  const handleLogout = () => {
    const confirmLogout = window.confirm('Tem certeza que deseja sair?');
    if (confirmLogout) {
      navigate('/login');
    }
  };

  return (
    <div className={styles.page}>
      <Header/>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>MentorIA</h2>
          <Chat mensagens={mensagens} loading={loading} />

          <div className={styles.chatPrompt}>
            <textarea
              rows={1}
              placeholder="Me pergunte qualquer coisa..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <button 
              className={styles.sendButton} 
              disabled={!text.trim() || loading} 
              onClick={handleSend}
            >
              ↑
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AIPage;