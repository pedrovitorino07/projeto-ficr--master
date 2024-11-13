import "../styles/MainContent.css";
import Demanda from "../assets/demanda.png";
import Text from "../assets/pctext.png";

function MainContent() {
  return (
    <div className="Main">
      <h2>Bem Vindo ao " "</h2>
      <div className="carrossel">
        <a href="http://localhost:3000/listagemEvents">
          <div className="elementos">
            <img src={Text} alt="Text" />
            Listar Eventos
          </div>
        </a>

        <a href="http://localhost:3000/RegisterEvent">
          <div className="elementos">
            <img src={Demanda} alt="Demanda" />
            Criar Evento
          </div>
        </a>
      </div>
      <button className="botao">COMUNICADO</button>
    </div >
  );
}

export default MainContent;
