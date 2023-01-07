import './style.css'
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Title from '../../Components/Title'
import Subtitle from './subtitle'
import { TextField } from '@mui/material';
import {Container} from '@mui/material';
import { maskcpf } from './mascara-cpf';
import { maskbday } from './mascara-data';
import {maskcep} from './mascara-cep';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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

    /* --- HANDLECHANGE --- */
    const handlechangeBday = (e) =>{
        const {value} = e.target
        setBday(maskbday(value))
    } 

    const handlechangeCep = (e) =>{
        const {value} = e.target
        setCep(maskcep(value))
    }

    const handlechangeCpf = (e) =>{
        const {value} = e.target
        setcpf(maskcpf(value))
    }

    const handlechangeGender = (e) =>{
        const {value} = e.target
        setGenero(value)
    }

    const handlechangeCor = (e) =>{
        const {value} = e.target
        setcor(value)
    }

    /* --- FUNÇÕES AUXILIARES --- */
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

                        </div>
                    </Form>
                </div>
            </Container>
        </div>
    )
}

export default Cadastro