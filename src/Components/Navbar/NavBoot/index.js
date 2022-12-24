import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css'
import {Link} from 'react-router-dom';

function NavBoot() {

var logo = require('../../../assets/img/logoG.png')

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="dion">
      <Container className='leoni'>
        <Navbar.Brand href="/" className="logoNav">
            <img src={logo} width={100} height={50} alt="Logo do projeto Arte de Caderno" className="logo"/>    
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <div className="minhaDiv">
        <Navbar.Collapse id="responsive-navbar-nav garotos">
          <Nav className="me-auto legiao">
            <Nav.Link><Link className="nav-link" to="/" >Início</Link></Nav.Link>
            <Nav.Link><Link to="/galeria" className="nav-link" >Galeria</Link></Nav.Link> 
            <Nav.Link><Link to="/sobre" className="nav-link" >Sobre</Link></Nav.Link>
            <Nav.Link><Link to="/login" className="nav-link" >Login </Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBoot;