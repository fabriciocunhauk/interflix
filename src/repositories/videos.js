
const URL_VIDEOS = `${process.env.REACT_APP_BACKEND_URL}/videos`;

const create = async (objetoDoVideo) => {

    const respostaDoServidor = await fetch(`${URL_VIDEOS}?_embed=videos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(objetoDoVideo)
    });
    if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();

        return resposta;
    }
    throw new Error('Nao foi possivel cadastrar os dados');
}

const deleteVideo = (idDoVideo) => {

    return fetch(`${URL_VIDEOS}/${idDoVideo}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

const exportedObject = {
    create,
    deleteVideo
};

export default exportedObject;