import "./style.css";
import PageTitle from '../../Components/Corpo/PageTitle'

const About = () => {
    var logo = require('../../assets/img/if logo.png')
    return (
        <>
            <PageTitle title="Sobre o projeto" />
            <div className="content">
                <div className="about-esq">
                    <div className="imagem">
                        <img src={logo} alt="Logo do IF"/>
                    </div>
                </div>
                <div className="about-dir">
                    <p className="texto">
                            O projeto Arte de Caderno é uma ação nacional, vinda da necessidade de promover a arte produzida em escolas e a preservação do patrimônio público, de maneira a incentivar que desenhos sejam feitos em locais apropriados. Além da preservação da escola, a ação capta desenhos que surgiram sem finalidade definida, apenas como livre manifestação artística. As obras classificadas são certificadas e recebem premiação composta por produtos estampados com imagens, como camisetas, canecas, entre outros. Dessa forma, o porjeto busca oportunizar um espaço para divulgar a produção espontânea da arte e valorizar a escola pública, bem como desenvolver uma consciência de preservação das escolas.
                    </p>
                </div>
            </div>
        </>
    );
};

export default About;
