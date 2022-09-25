import './style.css'

const ImagemBackground = () =>{

   
    const exemplo = require('../../../../assets/img/arte 1.png')

    return(
        <div className="imgBackground">
            <img src={exemplo} alt= {`Destaque do mês`} />
        </div>
    )
}
export default ImagemBackground