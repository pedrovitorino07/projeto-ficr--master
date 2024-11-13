import "../styles/header.css";
import Megafone from "../assets/megafone.png";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="cabecalho">
      <img src={Megafone} alt="Logo" />
      <a href="http://localhost:3000"><h1>COMMUNICATION</h1></a>
      <Link to="/RegisterEvent">
      <button className="botao-cabecalho">Criar evento</button>
      </Link>
      <div>
        <Link to="/ListagemEvents">
          <button className="botao-cabecalho">Lista de eventos</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
