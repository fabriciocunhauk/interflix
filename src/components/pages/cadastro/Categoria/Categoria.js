import React, { useState, useEffect } from 'react';
import PageDefault from '../../../PageDefault/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../FormField/index';
import Button from '../../../Button/index';
import useForm from '../../../../hooks/useForms'

const CadastroCategoria = () => {
    const valoresIniciais = {
        nome: '',
        titulo: '',
        cor: ''
    }

    const { handleChange, values, clearForm } = useForm(valoresIniciais);

    const [categorias, setCategorias] = useState([]);

    const handleSubmit = (infosDoEvento) => {
        infosDoEvento.preventDefault();

        setCategorias([
            ...categorias, values
        ]);

        clearForm();
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
                    name="titulo"
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
                        <li key={`${categoria.titulo}`}>
                            {categoria.titulo}
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