import "./style.css";

function Draws() {

    var logo = require('../../../assets/img/visual.png')

    return (
        <div>
            <div class="gallery">
                <a target="_blank" href="/">
                    <img src={logo} alt="Forest" width="600" height="400"></img>
                </a>
            </div>
            <div class="desc">Autor: Nome Completo</div>
            <div class="desc">Info Adicional</div>
        </div>
    )
};

export default Draws;