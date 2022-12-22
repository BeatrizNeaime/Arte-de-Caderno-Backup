import Carousel from 'react-bootstrap/Carousel';
import './style.css'
function Carrossel() {
    var img1 = require("../../../assets/img/Desenhos/Felipe Hebert.png")
    var img2 = require("../../../assets/img/Desenhos/Maycon Douglas.png")
    var img3 = require("../../../assets/img/Desenhos/Athos Henrique Lana Reis.png")
  return (
    <Carousel fade variant="dark" className = "Carrossel">
      <Carousel.Item>
        <img
          className="d-block w-100" 
          src= {img1} 
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Felipe Hebert Couto Heleno</h3>
          <p>Escola Municipal José Rafael Santos Netto, Poços de Caldas - MG</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Maycon Douglas Azevedo Alves</h3>
          <p>Escola Estadual Diretor Nelson Rodrigues, Serrania - MG</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Athos Henrique Lana Reis</h3>
          <p>
            Escola Municipal João Pinheiro, Poços de Caldas - MG
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;