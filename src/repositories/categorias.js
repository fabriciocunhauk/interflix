import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

const getAll = () => {

    return fetch(`${URL_CATEGORIES}`)
        .then(async (respostaDoServidor) => {
            if (respostaDoServidor.ok) {
                const resposta = await respostaDoServidor.json();

                return resposta
            }
            throw new Error('Nao foi possivel pegar os dados')
        });
}

const getAllWithVideos = () => {

    return fetch(`${URL_CATEGORIES}?_embed=videos`)
        .then(async (respostaDoServidor) => {
            if (respostaDoServidor.ok) {
                const resposta = await respostaDoServidor.json();

                return resposta
            }
            throw new Error('Nao foi possivel pegar os dados')
        });
}


export default {
    getAllWithVideos,
    getAll
}