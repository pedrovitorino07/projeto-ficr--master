import React from "react";
import Eye from "../assets/eye.png";
import "../styles/ListNumber.css";

function ListNumber() {
  const events = [];

  const censorPhone = (phone) => {
    const ddd = phone.slice(1, 4);
    const firstFour = phone.slice(5, 9);

    const maskedRemaining = phone.slice(9).replace(/./g, "*");
    return `(${ddd} ${firstFour}-${maskedRemaining}`;
  };

  return (
    <div className="main-event">
      <h1>Números</h1>
      <div className="tabela">
        <div className="indice linha">
          <span className="celula">Nome</span>
          <span className="celula">Número</span>
          <span className="celula">Detalhes</span>
        </div>
        {events.map((event) => (
          <div key={event.id} className="linha">
            <span className="celula">{event.title}</span>
            <span className="celula">{censorPhone(event.phone)}</span>
            <span className="celula">
              <img src={Eye} alt="Ver detalhes" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListNumber;
