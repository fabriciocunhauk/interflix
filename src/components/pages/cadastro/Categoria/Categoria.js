import React, { useState } from 'react';
import PageDefault from '../../../PageDefault/PageDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../FormField/index'

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
                    label="Nome da Categoria: "
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

                <button
                    onClick={() => handleSubmit}>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, index) => {
                    return (
                        <li key={`${categoria}${index}`}>
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