import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageDefault from '../../../PageDefault/PageDefault.js';
import useForm from '../../../../hooks/useForms.js';
import FormField, { Select } from '../../../FormField/index.js';
import Button from '../../../Button/index.js';
import videosRepository from '../../../../repositories/videos.js';
import categoriasRepository from '../../../../repositories/categorias.js';
import { NavLink } from '../../../NavLink/index.js';

const CadastroVideo = () => {
    const navigate = useNavigate();
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

    const onSubmit = (event) => {
        event.preventDefault();
        const categoriaEscolhida = categorias.find(categoria => {
            return categoria.titulo.toLowerCase() === values.categoria.toLowerCase();
        });

        videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaEscolhida.id,
        }).then((res) => {
            if (res.ok) {
                return navigate("/")
            }
            throw new Error('Nao foi possivel cadastrar os dados');
        })
    }

    return (
        <PageDefault>
            <h1>Cadastro de Video</h1>

            <form onSubmit={onSubmit}>
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

                <Select name="categoria" onChange={handleChange}>
                    {categorias.map((categoria) => {
                        return (
                            <option key={categoria.id} value={categoria.categoria}>
                                {categoria.titulo}
                            </option>
                        )
                    })}
                </Select>

                <Button type="submit">
                    Cadastrar
                </Button>
            </form>

            <NavLink to="/cadastro/categoria">
                Cadastar categoria
            </NavLink>
        </PageDefault>
    );
};

export default CadastroVideo;