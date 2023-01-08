import './style.css'
import React, { useState } from 'react';

/*--- ReactBoostrap ---*/
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

/*--- Components  ---*/
import Title from '../../Components/Title'
import Subtitle from './subtitle'

/*--- Material UI ---*/
import { TextField } from '@mui/material';
import {Container} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

/*---Máscaras para CPF, CEP e Celular */
import { maskcpf } from './mascara-cpf';
import { maskbday } from './mascara-data';
import {maskcep} from './mascara-cep';
import { maskcel } from './mascara-celular';

/*--- React Toastify ---*/
import {toast} from 'react-toastify';

const Cadastro = () =>{
    /* --- CONSTANTES E USESTATE --- */
    const [cpf, setcpf] = React.useState('');
    const [genero, setGenero] = useState('');
    const [cor, setcor] = useState('');
    const [bday, setBday] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [ativo, setativo] = useState(false);
    const [bairro, setBairro] = useState('');
    const [cidade, setcidade] = useState('');
    const [uf, setuf] = useState('');
    const [cel, setCel] = useState('');
    const [inep, setInep] = useState('');
    const [escola, setEscola] = useState('');
    let rec
    /* --- HANDLECHANGE --- */
    const handlechangeBday = (e) =>{
        const {value} = e.target
        setBday(maskbday(value))
    } 

    const handlechangeCel = (e) =>{
        const {value} = e.target
        setCel(maskcel(value))
    }

    const handlechangeCep = (e) =>{
        const {value} = e.target
        setCep(maskcep(value))
    }

    const handlechangeCor = (e) =>{
        const {value} = e.target
        setcor(value)
    }

    const handlechangeCpf = (e) =>{
        const {value} = e.target
        setcpf(maskcpf(value))
    }

    const handlechangeGender = (e) =>{
        const {value} = e.target
        setGenero(value)
    }

    const handlechangeInep = (e) =>{
        const {value} = e.target
        setInep(value.substring(0, 8))
    }  

    /* --- FUNÇÕES AUXILIARES --- */

    async function busca(cep){
        const url = `http://educacao.dadosabertosbr.com/api/escola/26124297`
    
        const options = {
            method: 'GET'
        } 
        try {
            const b = await fetch(url, options)
            const c = await b.json()
            
            return c
        } catch (error) {
            console.log(`----> ${error}`)
        }
    }

    async function viacep(e){
        const notify = () =>{
            toast.warn('CEP incorreto!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        try {
            const cep = (e.target.value).replace(/\D/g, "")
            const cons = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const conv = await cons.json()
            if(conv.erro){
                notify()
            } else{
                console.log(conv)
                setRua(conv.logradouro)
                setBairro(conv.bairro)
                setcidade(conv.localidade)
                setuf(conv.uf)
                setativo(true)
            }
        } catch (e) {
            toast.error(e, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }

    return(
        <div className="cad-content">
            <Container maxWidth="xl"> 
                <div className="cad-container">
                    <Title title="Cadastro" />
                    <Form className="form">
                        <Subtitle sub="Dados Pessoais" />
                        <div className="linha">
                            <TextField id="outlined-basic" label="Nome" variant="outlined" required className='input'/>
                            <TextField id="outlined-basic" label="Sobrenome" variant="outlined" required className='input'/>
                            <TextField id="outlined-basic" label="Data de Nascimento" variant="outlined" required className='input' value={bday} onChange={handlechangeBday} />
                        </div>
                        <div className='linha'>
                            <TextField id="outlined-basic" label="CPF" variant="outlined" required value={cpf} onChange={handlechangeCpf} className='input' />
                            <FormControl className='input' required>
                                <InputLabel id="demo-simple-select-label">Gênero</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={genero}
                                    label="Age"
                                    onChange={handlechangeGender}
                                >
                                    <MenuItem value="Homem Cis">Homem Cis</MenuItem>
                                    <MenuItem value= "Homem Trans">Homem Trans</MenuItem>
                                    <MenuItem value="Mulher Cis">Mulher Cis</MenuItem>
                                    <MenuItem value="Mulher Trans">Mulher Trans</MenuItem>
                                    <MenuItem value="não informado">Não responder</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className='input' required>
                                <InputLabel id="demo-simple-select-label">Raça/Etinia</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={cor}
                                    label="Age"
                                    onChange={handlechangeCor}
                                >
                                    <MenuItem value="Amarelo">Amarelo(a)</MenuItem>
                                    <MenuItem value= "Branco">Branco(a)</MenuItem>
                                    <MenuItem value="Indígena">Indígena</MenuItem>
                                    <MenuItem value="Pardo">Pardo(a)</MenuItem>
                                    <MenuItem value="Preto">Preto(a)</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <hr></hr>
                        <Subtitle sub="Dados para Contato"/>
                        <div className="linha">
                            <TextField id="outlined-basic" label="CEP" variant="outlined" required className='input' value={cep} onChange={handlechangeCep} onBlur={viacep} />
                            <TextField id="outlined-basic" label="Rua" variant="outlined" required className='input' value={rua} disabled = {ativo} />
                            <TextField id="outlined-basic" label="Número" variant="outlined" required className='input'/>
                        </div>
                        <div className='linha'>
                            <TextField id="outlined-basic" label="Complemento" variant="outlined" className='input'/> 
                            <TextField id="outlined-basic" label="Bairro" variant="outlined" required className='input' value={bairro} disabled = {ativo} />
                            <TextField id="outlined-basic" label="Cidade" variant="outlined" required className='input' value={cidade} disabled = {ativo} />
                        </div>
                        <div className='linha'>
                            <TextField id="outlined-basic" label="Estado" variant="outlined" required className='input' value={uf} disabled = {ativo} />
                            <TextField id="outlined-basic" label="Celular" variant="outlined" required className='input' value={cel} onChange={handlechangeCel}/>
                            <TextField id="outlined-basic" label="E-mail" variant="outlined" required type="email" className='input'/>
                        </div>
                        <hr></hr>
                        <Subtitle sub="Dados Escolares"/>
                        <Alert variant="primary">
                            Para melhor identificação a sua instituição de ensino, utilizamos o código fornecido pelo INEP. Consulte o código da sua escola <a href='https://inepdata.inep.gov.br/analytics/saw.dll?dashboard' target="_blank" rel="noreferrer" >clicando aqui</a>. 
                        </Alert>
                        <div className='linha'>
                            <TextField id="outlined-basic" label="Código INEP" variant="outlined" required className='input' value={inep} onChange={handlechangeInep} onBlur={busca} />
                            <TextField id="outlined-basic" label="Instituição de Ensino" variant="outlined" required className='input' value={escola} />
                        </div>
                    </Form>
                </div>
            </Container>
        </div>
    )
}

export default Cadastro