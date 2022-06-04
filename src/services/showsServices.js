import axios from 'axios';

const baseURL = 'https://backend-seucaneco.herokuapp.com';

const showsServices = axios.create({
    baseURL,
    headers: { 'Constent-Type': 'application/json' },
});

export async function getShows() {
    return showsServices.get('/shows');
}

export async function deleteShow(id) {
    return showsServices.delete(`/shows/${id}`);
}

export async function editShow(id, nome_atracao, data, hora) {
    return showsServices.put(`/shows/${id}`, {
        nome_atracao,
        data,
        hora,
    });
}

export async function createShow(nome_atracao, data, hora) {
    return showsServices.post('/shows', {
        nome_atracao,
        data,
        hora,
    });
}

export default showsServices;
