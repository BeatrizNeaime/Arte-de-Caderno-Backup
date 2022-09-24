import './style.css'

const Detalhe = () =>{

    var canetas = require('../../../../assets/img/visual.png');

    return(
        <div className='detalhe'>
            <img src={canetas} alt='Detalhes' className='canetinhas' />
        </div>
    )
}

export default Detalhe