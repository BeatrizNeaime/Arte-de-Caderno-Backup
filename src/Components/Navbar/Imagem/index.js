import "./style.css";
const Imagem = () => {

  var logo = require('../../../assets/img/logoG.png')

  return (
    <div className="imagem-navbar"> 
      <img src={logo} alt="Logo do projeto" />
    </div>
  );
};
 
export default Imagem;
