
const URL_VIDEOS = `${process.env.REACT_APP_BACKEND_URL}/videos`;

const create = async (objetoDoVideo) => {
    return await fetch(`${URL_VIDEOS}?_embed=videos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(objetoDoVideo)
    });
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