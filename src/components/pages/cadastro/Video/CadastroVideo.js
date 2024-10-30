import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageDefault from '../../../PageDefault/PageDefault.js';
import useForm from '../../../../hooks/useForms.js';
import FormField from '../../../FormField/index.js';
import Button from '../../../Button/index.js';
import videosRepository from '../../../../repositories/videos.js';
import categoriasRepository from '../../../../repositories/categorias.js';

const CadastroVideo = () => {
    const history = useNavigate();
    const [categorias, setCategorias] = useState([])
    const { handleChange, values } = useForm({
        titulo: '',
        url: '',
        categoria: '',
    });

    useEffect(() => {
        categoriasRepository
            .getAll()
            .then(categoriasFromServer => {
                setCategorias(categoriasFromServer)
            })
    }, []);

    return (
        <PageDefault>
            <h1>Cadastro de Video</h1>

            <form onSubmit={(event) => {
                event.preventDefault();

                const categoriaEscolhida = categorias.find(categoria => {
                    return categoria.titulo.toLowerCase() === values.categoria.toLowerCase();
                });

                videosRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: categoriaEscolhida.id,
                })
                    .then(() => {
                        history.push("/");
                    })
            }}>
                <FormField
                    label="Titulo do video"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />

                <FormField
                    label="URL"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                />

                <FormField
                    label="Categoria"
                    name="categoria"
                    value={values.categoria}
                    onChange={handleChange}
                />

                <Button type="submit">
                    Cadastrar
                </Button>
            </form>

            <Link to="/cadastro/categoria">
                Cadastro categoria
            </Link>
        </PageDefault>
    );
};

export default CadastroVideo;