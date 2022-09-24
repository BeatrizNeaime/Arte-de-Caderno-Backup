import "./style.css";

const Links = ({ rota, txt }) => {

  return <a className= "linkNavbar" href={rota}>{txt}</a>;
};

export default Links;  
