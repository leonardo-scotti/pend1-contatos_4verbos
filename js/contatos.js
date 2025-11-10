'use strict'

export async function lerContatos() {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/`;

    const response = await fetch(url);
    const contatos = await response.json();

    return contatos
};

export async function criarContatos(contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/`;

    const options = {
        'method': 'POST',
        'headers': {
            'content-type': 'application/json'
        },
        'body': JSON.stringify(contato)
    };

    const response = await fetch(url, options)
    console.log(response.ok);
    return response.ok;
};

async function atualizarContatos(id, contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`;

    const options = {
        'method': 'PUT',
        'headers': {
            'content-type': 'application/json'
        },
        'body': JSON.stringify(contato)
    };

    const response = await fetch(url, options)

    return response.ok;
};

export async function deletarContato(id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`;

    const options = {
        method: 'DELETE'
    };

    const response = await fetch(url, options);
    
    return response.ok;
}

const novoContato = {
    "nome": "JULIO TINHOSO",
    "celular": "66 6 6666-6666",
    "foto": "capeta.jpg",
    "email": "CAPETA@DIABO.com",
    "endereco": "RUA DOS DEMÔNIOS, 666",
    "cidade": "INFERNO"
}

const contatoAtualizado = {
    "nome": "Leonardo Scotti ATUALIZADO",
    "celular": "11 9 7171-1111",
    "cidade": "Itapevi",
    "email": "leonardo@gmail.com",
    "endereco": "Rua de JESUS, 111",
    "foto": "https://img.freepik.com/psd-gratuitas/renderizacao-3d-do-estilo-de-cabelo-para-o-design-do-avatar_23-2151869121.jpg"
}