import "./style.css";
import PageTitle from '../../Components/Corpo/PageTitle'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
    var logo = require('../../assets/img/if logo.png')
    return (
        <>
            <PageTitle title="Sobre o projeto" />
            <Container>
                <Row>
                    <Col className="coluna">
                        <h3 className="texto">
                            Sed aliquet convallis finibus.
                            Morbi viverra laoreet commodo.
                            Phasellus lobortis facilisis magna.
                            Integer lorem ex, fringilla
                            sit amet convallis vel, bibendum sit
                            amet eros. Cras sollicitudin leo
                            ut volutpat eleifend. Suspendisse
                            non posuere lectus. Interdum et
                            malesuada fames ac ante ipsum primis.
                        </h3>
                    </Col>
                    <Col>
                    <div className="imagem">
                            <img src={logo} alt="Logo do IF" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default About;
