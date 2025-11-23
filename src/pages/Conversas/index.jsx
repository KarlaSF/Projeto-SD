import { useState, useRef, useEffect } from "react";
import "./style.css";

function App() {
  const [mensagem, setMensagem] = useState("");
  const [mensagens, setMensagens] = useState([]);
  const mensagensFimRef = useRef(null);

  const enviarMensagem = () => {
    if (!mensagem.trim()) return;

    const novaMsg = {
      id: Date.now(),
      autor: "Você",
      conteudo: mensagem,
      hora: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMensagens((prev) => [...prev, novaMsg]);
    setMensagem("");
  };

  //ir para baixo
  useEffect(() => {
    mensagensFimRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensagens]);

  return (
    <div className="container-chat">

      {/*nome da sala*/}
      <header className="header">
        <h2>💬 Sala Principal</h2>
        <span>Usuário: Você</span>
      </header>

      {/*mensagens*/}
      <div className="mensagens">
        {mensagens.map((msg) => (
          <div key={msg.id} className="msg-item">
            <strong>{msg.autor}</strong>
            <p>{msg.conteudo}</p>
            <span className="hora">{msg.hora}</span>
          </div>
        ))}

        <div ref={mensagensFimRef} />
      </div>

      {/*enviar mensagem*/}
      <div className="enviarMensagens">
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && enviarMensagem()}
        />

        <button onClick={enviarMensagem}>Enviar</button>
      </div>
    </div>
  );
}

export default App;
