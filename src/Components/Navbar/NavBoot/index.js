import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css'

function NavBoot() {

var logo = require('../../../assets/img/logoG.png')

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="dion">
      <Container className='leoni'>
        <Navbar.Brand href="#home" className="logoNav">
            <img src={logo} width={100} height={50} alt="Logo do projeto Arte de Caderno" className="logo"/>    
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <div className="minhaDiv">
        <Navbar.Collapse id="responsive-navbar-nav garotos">
          <Nav className="me-auto legiao">
            <Nav.Link href="#features" className="nav-link">Início</Nav.Link>
            <Nav.Link href="#pricing">Galeria</Nav.Link>
            <Nav.Link href="#pricing">Sobre</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBoot;