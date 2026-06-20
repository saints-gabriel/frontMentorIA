import React, { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";

const Chat = ({ mensagens = [], loading = false }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensagens, loading]);

  return (
    <div style={{ padding: '10px', maxHeight: '400px', minWidth: '700px', overflowY: 'auto' }}>
      
      {mensagens.length === 0 && (
        <div style={{ textAlign: 'center', opacity: 0.5, marginTop: '20px' }}>
          <p>Olá! Como posso ajudar você hoje?</p>
        </div>
      )}

      {mensagens.map((msg, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            justifyinit: msg.tipo === "enviado" ? 'flex-end' : 'flex-start',
            margin: '10px 0'
          }}
        >
          <div
            style={{
              background: msg.tipo === "enviado" ? "#282a2c" : "#1e1f20",
              color: "#fff",
              padding: "10px 15px",
              borderRadius: "15px",
              maxWidth: "80%"
            }}
          >
            {msg.tipo === "enviado" ? (
              <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{msg.texto}</p>
            ) : (
              <ReactMarkdown>{msg.texto}</ReactMarkdown>
            )}
          </div>
        </div>
      ))}

      {loading && (
        <div style={{ textAlign: 'left', opacity: 0.5, italic: 'true', margin: '10px 0' }}>
          <span>MentorIA está pensando...</span>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
};

export default Chat;