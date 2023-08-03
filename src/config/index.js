const URL_BACKEND = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080'
    : "https://interflix.herokuapp.com";

    const URL = {
    URL_BACKEND,
};

export default URL