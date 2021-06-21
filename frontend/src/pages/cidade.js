import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Cidades() {
    const [cidade, setCidade] = useState({
        nome: '',
        uf: ''
    });
    const [cidades, setCidades] = useState([]);
    const [novaCidade, setNovaCidade] = useState('');
    const [novaUf, setNovaUf] = useState('');
    const [busca, setBusca] = useState('');
    const [count, setCount] = useState(1);


    useEffect(() => {
        // const params = {};
        // if (busca) {
        //     params.nome_like = busca;
        // }
        if (count > 0) {
            axios.get(`http://localhost:3001/cidades/?page=${count}`).then((res) => {
                // console.log(params, res);
                setCidades(res.data);
            })
        }
    }, [count]);

    async function getData(id) {
        await axios.get(`http://localhost:3001/clientes/${id}`).then((res) => {
            setCidade(res.data);
        })
    }

    async function handleDelete(id, index) {
        await axios.delete(`http://localhost:3001/cidades/${id}`);

        cidades.splice(index, 1);
        setCidades([...cidades]);

        if (cidades.length === 0) {
            setCidades([]);
        }
    }

    function handleChange(e) {
        setCidade({ ...cidade, [e.target.name]: e.target.value });
    }

    async function handleUpdate(id, index) {
        await axios.put(`http://localhost:3001/cidades/${id}`, {
            nome: novaCidade,
            uf: novaUf
        });
        setNovaCidade('');
        setNovaUf('');
        cidades.splice(index, 1);
        setCidades([...cidades, { novaCidade, novaUf }]);
    }

    async function handleSubmit(e) {
        await axios.post('http://localhost:3001/cidades', cidade);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Cidade" id="nome" name="nome" type="text" onChange={handleChange} value={cidade.nome} /> - <input placeholder="UF" name="uf" id="uf" type="text" onChange={handleChange} value={cidade.uf} />
                <button type="submit">Enviar</button>
            </form>
            <input placeholder="Buscar" value={busca} onChange={(e) => setBusca(e.target.value)} />
            {cidades.length > 0 ? cidades.filter((value) => {
                if (busca == "") {
                    return value;
                } else if (value.nome.toLowerCase().includes(busca.toLowerCase())) {
                    return value;
                }
            }).map((cidade, index) =>
                <ul className="listItems" >
                    <li key={cidade.id}>
                        <span>{cidade.nome} - {cidade.uf}</span>
                        <button onClick={() => handleDelete(cidade.id, index)}>Delete</button>
                        {/* <input placeholder="Atualizar cidade" onChange={(e) => setNovaCidade(e.target.value)} />
                        <input placeholder="Atualizar UF" onChange={(e) => setNovaUf(e.target.value)} /> */}
                        <button onClick={() => handleUpdate(cidade.id, index)}>Alterar</button>
                    </li>
                </ul>
            ) : <h1>Não há cidades cadastradas</h1>}
            {count > 1 ? <button onClick={() => setCount(count - 1)}>Anterior</button> : <></>}
            {cidades.length === 20 ? <button onClick={() => setCount(count + 1)}>Próximo</button> : <></>}
        </div>
    )
}