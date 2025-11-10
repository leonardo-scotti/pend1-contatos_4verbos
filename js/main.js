'use strict'

import { lerContatos } from "./contatos.js"
import { criarContatos } from "./contatos.js";
import { deletarContato } from "./contatos.js";

async function criarCardContatos() {
    const contatos = await lerContatos();
    const main = document.querySelector('main')
    main.classList.replace('form-show', 'card-show')
    

    const container = document.getElementById('container');

    contatos.forEach(contato => {
        const cardContato = document.createElement('div');
        cardContato.classList.add('card-contato');
        cardContato.addEventListener('click', (event) => {
            abrirFormularioByCard(contato);
            deletarContatoById(contato);
        });

        const img = document.createElement('img');
        img.src = contato.foto;

        const h2 = document.createElement('h2');
        h2.textContent = contato.nome;

        const p = document.createElement('p');
        p.textContent = contato.celular;

        cardContato.append(img, h2, p);

        container.appendChild(cardContato);
    });
}

function abrirFormulario() {
    const main = document.querySelector('main');

    const btnNovoContato = document.getElementById('novo-contato');
    btnNovoContato.addEventListener('click', () => {
        main.classList.replace('card-show', 'form-show');

        const inputText = document.querySelectorAll('.input-text');
        inputText.forEach(input => {
            input.value = '';
        })
    })
}

async function inserirContato() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value
    const celular = document.getElementById('celular').value
    const endereco = document.getElementById('endereco').value
    const cidade = document.getElementById('cidade').value
    const foto = document.getElementById('preview-image').src;

    const contato = {
        nome,
        email,
        celular,
        endereco,
        cidade,
        foto
    }

    criarContatos(contato);
}

function cancelarFormulario() {
    const main = document.querySelector('main');

    const btnCancelar = document.getElementById('cancelar');
    btnCancelar.addEventListener('click', () => {
        main.classList.replace('form-show', 'card-show');
    })
}

function abrirFormularioByCard(contato) {
    const main = document.querySelector('main');
    main.classList.replace('card-show', 'form-show');

    const nome = document.getElementById('nome');
    nome.value = contato.nome;

    const email = document.getElementById('email');
    email.value = contato.email;

    const celular = document.getElementById('celular');
    celular.value = contato.celular;

    const endereco = document.getElementById('endereco');
    endereco.value = contato.endereco;

    const cidade = document.getElementById('cidade');
    cidade.value = contato.cidade;

    const foto = document.getElementById('preview-image');
    foto.src = contato.foto
}

function btnSalvar() {
    const btnSalvar = document.getElementById('salvar');
    btnSalvar.addEventListener('click', (event) => {
        inserirContato()
    })
}

function preview({ target }) {
    document.getElementById('preview-image').src = URL.createObjectURL(target.files[0])
}

async function deletarContatoById(contato) {
    const btnDeletar = document.getElementById('deletar');
    btnDeletar.addEventListener('click', (event) => {
        const escolha = confirm(`Você deseja excluir o contato '${contato.nome}'?`)
        if(escolha) {
            deletarContato(contato.id);
            window.location.reload();
        } 
    })
}

document.getElementById('foto').addEventListener('change', preview)

criarCardContatos();
abrirFormulario();
cancelarFormulario();
btnSalvar();
// apagar();
// function apagar() {
//     let i = 1;
//     while(i < 1000) {
//         deletarContato(i)
//         i++;
//         console.log(i)
//     }
// }