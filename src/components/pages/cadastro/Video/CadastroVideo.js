import React from 'react';
import PageDefault from '../../../PageDefault/PageDefault'
import { Link } from 'react-router-dom';

const CadastroVideo = () => {
    return (
        <PageDefault>
            <h1>Pagina de cadastro de video</h1>

            <Link to="/cadastro/categoria">
                Cadastro categoria
            </Link>
        </PageDefault>
    );
};

export default CadastroVideo;