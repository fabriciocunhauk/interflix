const URL_CATEGORIES = `${process.env.REACT_APP_BACKEND_URL}/categorias`;

const createCategory = async (objetoDoVideo) => {
    return await fetch(`${URL_CATEGORIES}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(objetoDoVideo)
    });
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

    const respostaDoServidor = await fetch(`${URL_CATEGORIES}?_embed=videos`);
        if (respostaDoServidor.ok) {
            const resposta = await respostaDoServidor.json();

            return resposta;
        }
    throw new Error('Nao foi possivel pegar os dados');
}

const exportedObject = {
    createCategory,
    getAllWithVideos,
    getAll
};

export default exportedObject;