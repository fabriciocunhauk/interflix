
const URL_VIDEOS = `${process.env.REACT_APP_BACKEND_URL}/videos`;
const URL_CATEGORY = `${process.env.REACT_APP_BACKEND_URL}/categorias`;

const create = async (objetoDoVideo) => {
    return await fetch(`${URL_VIDEOS}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(objetoDoVideo)
    });
}

const deleteVideo = (videoId) => {
    return fetch(`${URL_VIDEOS}/${videoId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

const deleteCategory = (categoryId) => {
    return fetch(`${URL_CATEGORY}/${categoryId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

const exportedObject = {
    create,
    deleteVideo,
    deleteCategory
};

export default exportedObject;