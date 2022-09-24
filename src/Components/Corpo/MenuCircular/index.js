import Itens from './Itens'
import './style.css'

const MenuCircular = () => {
    return (
        <nav>
            <div className="navContent">
                <div className="toggleBtn">
                    teste
                </div>
                <Itens href="#" txt="1" i={1} />
                <Itens href="#" txt="2" i={2} />
                <Itens href="#" txt="3" i={3} />
                <Itens href="#" txt="4" i={4} />
                <Itens href="#" txt="5" i={5} />
            </div>
        </nav>
    )
}

export default MenuCircular