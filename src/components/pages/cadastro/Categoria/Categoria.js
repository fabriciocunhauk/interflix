import React, { useState, useEffect } from 'react';
import PageDefault from '../../../PageDefault/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../FormField/index';
import Button from '../../../Button/index';

const CadastroCategoria = () => {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    const handleSubmit = (infosDoEvento) => {
        setCategorias([
            ...categorias, values
        ]);

        setValues(valoresIniciais)

        infosDoEvento.preventDefault();
    }

    const handleChange = (infosDoEvento) => {

        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
    }

    useEffect(() => {
        const URL = window.location.hostname.includes('localhost')
            ? 'http://localhost:8080/categorias'
            : "https://interflix.herokuapp.com/categorias";

        fetch(URL)
            .then(async (respostaDoServidor) => {
                const resposta = await respostaDoServidor.json();
                setCategorias([
                    ...resposta,
                ]);
            })
    }, []);

    const setValue = (chave, valor) => {
        setValues({
            ...values,
            [chave]: valor
        })
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={handleSubmit}>

                <FormField
                    type="text"
                    name="nome"
                    label="Nome da Categoria:"
                    value={values.nome}
                    onChange={handleChange}
                />


                <FormField
                    label="Descricao:"
                    type="textarea"
                    value={values.descricao}
                    name="descricao"
                    onChange={handleChange}
                />



                <FormField
                    label="Cor"
                    type="color"
                    value={values.cor}
                    name="cor"
                    onChange={handleChange}
                />

                <Button
                    onClick={() => handleSubmit}>
                    Cadastrar
                </Button>
            </form>

            <ul>
                {categorias.map((categoria) => {
                    return (
                        <li key={`${categoria.nome}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    );
};

export default CadastroCategoria;