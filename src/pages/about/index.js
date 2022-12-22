import "./style.css";
import Titulo from '../../Components/Title';

const About = () => {
    var logo = require('../../assets/img/if logo.png')
    return (
        <div >
            <Titulo title="Sobre o Projeto" />

            <div className="imagem">
                <img src={logo} alt="Logo do IF" />
            </div>
            <div className="texto">
                <h3>
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
            </div>


        </div>
    );
};

export default About;
