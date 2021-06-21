import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Clientes() {
    const [clientes, setClientes] = useState([]);
    const [cidades, setCidades] = useState([]);
    const [idCidade, setIdCidade] = useState('');
    const [cliente, setCliente] = useState({
        nome: '',
        sexo: '',
        rg: '',
        cpf: '',
        dt_nascimento: '',
        salario: 0,
    });
    // const [count, setCount] = useState(0)

    useEffect(() => {
        axios.get('http://localhost:3001/clientes').then((res) => {
            setClientes(res.data);
            axios.get('http://localhost:3001/cidades').then((res) => {
                setCidades(res.data);
            })
        })
    }, []);

    async function getData(id) {
        await axios.get(`http://localhost:3001/clientes/${id}`).then((res) => {
            setCliente(res.data);
        })
    }

    async function handleDelete(id, index) {
        await axios.delete(`http://localhost:3001/clientes/${id}`);

        clientes.splice(index, 1);
        setClientes([...clientes]);

        if (clientes.length === 0) {
            setClientes([]);
        }
    }

    async function handleSubmit(e, values) {
        if (!cliente.id) {
            const cidade_id = parseInt(idCidade);
            await axios.post('http://localhost:3001/clientes', { ...cliente, cidade_id });
        } else {
            await axios.put(`http://localhost:3001/clientes/${cliente.id}`, cliente);
        }
    }

    function handleChange(e) {
        setCliente({ ...cliente, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <form className="cliente" onSubmit={handleSubmit}>
                <input placeholder="Nome" type="text" onChange={handleChange} name="nome" value={cliente.nome} />
                <input type="radio" id="masculino" name="sexo" onChange={handleChange} value="masculino" />
                <label for="masculino">Masculino</label>
                <input type="radio" id="feminino" name="sexo" onChange={handleChange} value="feminino" />
                <label for="feminino">Feminino</label>
                <input placeholder="RG" type="text" onChange={handleChange} name="rg" value={cliente.rg} />
                <input placeholder="CPF" type="text" onChange={handleChange} name="cpf" value={cliente.cpf} />
                <label for="dt_nascimento">Data de nascimento:</label>
                <input onChange={handleChange} id="dt_nascimento" type="date" name="dt_nascimento" value={cliente.dt_nascimento} />

                <label for="salario">Salário</label>
                <input placeholder="Salário" id="salario" onChange={handleChange} type="number" name="salario" value={cliente.salario} />
                <label for="cidades">Escolha a sua cidade:</label>
                <select name="cidade_id" onChange={(e) => setIdCidade(e.target.value)} id="cidades">
                    {cidades.map(cidade =>
                        <option key={cidade.id} value={cidade.id}>{cidade.nome}</option>
                    )}
                </select>
                <div>
                    <button type="submit">Enviar</button>
                    <button type="reset">Limpar</button>
                </div>
            </form>
            <h2>Lista de Clientes</h2>
            {
                clientes.length > 0 ? clientes.map((cliente, index) =>
                    <ul className="listItems">
                        <li key={cliente.id}>
                            <span onClick={() => getData(cliente.id)}>{cliente.nome}</span>
                            <button onClick={() => handleDelete(cliente.id, index)}>Delete</button>
                        </li>
                        <hr />
                    </ul>

                ) : <h1>Não há clientes cadastrados</h1>
            }
        </div >
    )
}