import './style.css'

const DadosAutor = ({nome}) => {
    const date = new Date()
    const year = date.getFullYear()
    return(
        <div className = "dados">
            <p className="txtDados">
                {nome}
            </p>
            <p className="edicao">
                {`Edição ${year}`}
            </p>
        </div>
    )

}


export default DadosAutor