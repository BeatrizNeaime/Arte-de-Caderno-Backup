import './style.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Login = () =>{

    const logo = require('../../assets/img/logoG.png')

    return(
        <div className='login-content'>
            <div className='login-container'>
                <div className='login-logo'>
                    <img src={logo} alt="Símbolo do projeto" className='logo' />
                </div>
                <div className='login-forms'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Insira seu endereço de e-mail</Form.Label>
                            <Form.Control type="email" placeholder="exemplo@exemplo.com" required name="email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Insira sua senha</Form.Label>
                            <Form.Control type="password" placeholder="senha" required name="senha" />
                        </Form.Group>
                        <Button type="submit" className="login-btn" >
                            Entrar
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login