import DadosAutor from './DadosAutor'
import Detalhe from './Detalhe'
import ImagemBackground from './ImagemBackground'
import './style.css'

const Left = () => {
    return(
        <div className="container-left">
            <Detalhe/>
            <ImagemBackground/>
            <DadosAutor nome="Leonardo Victor Santos de Freitas"/>

        </div>
    )
}

export default Left