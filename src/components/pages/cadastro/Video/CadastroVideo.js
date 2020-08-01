import React from 'react';
import PageDefault from '../../../PageDefault/PageDefault'
import { Link } from 'react-router-dom';
import useForm from '../../../../hooks/useForms';
import FormField from '../../../FormField';
import Button from '../../../Button/index'

const CadastroVideo = () => {
    const { handleChange, values } = useForm({

    });

    return (
        <PageDefault>
            <h1>Pagina de cadastro de video</h1>

            <form>
                <FormField
                    label="Titulo do video"
                    name="titulo"
                    value={values.titulo}
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