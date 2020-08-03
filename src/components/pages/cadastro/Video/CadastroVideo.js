import React from 'react';
import PageDefault from '../../../PageDefault/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../../hooks/useForms';
import FormField from '../../../FormField';
import Button from '../../../Button/index';
import videosRepository from '../../../../repositories/videos';

const CadastroVideo = () => {
    const history = useHistory();
    const { handleChange, values } = useForm({
        titulo: '',
        url: '',
        categoriaL: '',
    });

    return (
        <PageDefault>
            <h1>Cadastro de Video</h1>

            <form onSubmit={(event) => {
                event.preventDefault();

                videosRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: 1,
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