import config from '../config/index.js';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

const createCategory = async (objetoDoVideo) => {

    const respostaDoServidor = await fetch(`${URL_CATEGORIES}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(objetoDoVideo)
    });
    if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();

        return resposta;
    }
    throw new Error('Nao foi possivel cadastrar os dados');
}

const getAll = async () => {

    const respostaDoServidor = await fetch(`${URL_CATEGORIES}`);
    if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();

        return resposta;
    }
    throw new Error('Nao foi possivel pegar os dados');
}

const getAllWithVideos = async () => {

    const response = await fetch(`${URL_CATEGORIES}?_embed=videos`).then(categories => categories.json());
  
    return response;
}


const exportedObject = {
    createCategory,
    getAllWithVideos,
    getAll
};

export default exportedObject;