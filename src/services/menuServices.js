import axios from 'axios';

const baseURL = 'https://backend-seucaneco.herokuapp.com';

const menuServices = axios.create({
    baseURL,
    headers: { 'Constent-Type': 'application/json' },
});

export async function getDrinks() {
    return menuServices.get('/drinks');
}

export async function getSnacks() {
    return menuServices.get('/snacks')
}

export async function deleteProduct(id) {
    return menuServices.delete(`/products/${id}`);
}

export async function editProduct(id, codigo, nome, nome_fornecedor, email_fornecedor) {
    return menuServices.put(`/products/${id}`, {
        codigo,
        nome,
        nome_fornecedor,
        email_fornecedor,
        // tipo,
        // preco,
    });
}

export async function createProduct(codigo, nome, nome_fornecedor, email_fornecedor, tipo, preco) {
    const product = {
        codigo: codigo,
        nome: nome,
        nome_fornecedor: nome_fornecedor,
        email_fornecedor: email_fornecedor,
        tipo: tipo,
        preco: preco
    }

    console.log(product)
    return menuServices.post('/products', {
        codigo,
        nome,
        nome_fornecedor,
        email_fornecedor,
        tipo,
        preco,
    });
}

export default menuServices;
