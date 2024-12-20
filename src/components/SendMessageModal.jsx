import React from "react";
import "../styles/SendMessageModal.css";

function SendMessageModal({ event, onClose }) {
  const handleSend = async () => {
    const payload = {
      RecipientNumber: "+558199738983",
      MessageBody: event.description,
      Variables: {
        Nome: event.title,
        Data: new Date(event.scheduling).toLocaleDateString("pt-BR"),
        Hora: new Date(event.scheduling).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      },
    };

    try {
      const response = await fetch("http://localhost:5153/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
      } else {
        alert("Erro ao enviar a mensagem. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar a mensagem:", error);
      alert("Erro ao enviar a mensagem. Tente novamente.");
    }

    onClose();
  };

  return (
    <div className="send-message-modal">
      <h2>Enviar Mensagem</h2>
      <p>Confirma o envio da mensagem?</p>
      <button onClick={handleSend}>Enviar</button>
      <button onClick={onClose}>Cancelar</button>
    </div>
  );
}

export default SendMessageModal;
