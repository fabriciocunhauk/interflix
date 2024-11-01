import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageDefault from '../../../PageDefault/PageDefault.js';
import FormField from '../../../FormField/index.js';
import Button from '../../../Button/index.js';
import useForm from '../../../../hooks/useForms.js';
import categoryRepository from '../../../../repositories/categorias.js';

const URL_CATEGORIES = `${process.env.REACT_APP_BACKEND_URL}/categorias`;

const CadastroCategoria = () => {
    const navigate = useNavigate();
    const { handleChange, values, clearForm } = useForm({
        nome: '',
        titulo: '',
        cor: ''
    });


    const [categorias, setCategorias] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        categoryRepository.createCategory({
            nome: values.nome,
            titulo: values.titulo,
            cor: values.cor,
        }).then(() => navigate("/"))

        clearForm();
    }

    useEffect(() => {
        fetch(URL_CATEGORIES)
            .then(async (respostaDoServidor) => {
                const resposta = await respostaDoServidor.json();
                setCategorias([
                    ...resposta,
                ]);
            })
    }, []);

    return (
        <PageDefault paddingAll="50px 50px">
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

                <Button onClick={() => handleSubmit}>
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