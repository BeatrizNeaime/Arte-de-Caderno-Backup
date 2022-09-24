import "./style.css";
import Links from '../Navbar/LinksNavbar/index'
import Imagem from "../Navbar/Imagem/index"


const Navbar = () => {
  const divStyle = {
    boxShadow: '1px 2px 9px #F4AAB9',
    padding: '1rem'
  };

  return (
    <div className="navbar">
      <Imagem />
      <div className="nav-menu">
        <Links style={divStyle} rota="#" txt="Início" />
        <Links rota="#" txt="Galeria" />
        <Links rota="#" txt="Sobre" />
      </div>
    </div>
  );
};

export default Navbar;
