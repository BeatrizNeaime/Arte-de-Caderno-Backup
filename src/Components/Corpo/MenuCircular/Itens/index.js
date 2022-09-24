import './style.css'

const Itens = ({href, txt, i}) =>{

    const myClass = "spann"
    const number = `--i: ${i}`
    return(
        <span className={`${number} ${myClass}`}>
            <a className="menuLink" href={href}>{txt}</a>
        </span>
    )
}

export default Itens