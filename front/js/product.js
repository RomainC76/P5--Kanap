// const kanapData = JSON.parse(localStorage.getItem("productData"));
let colors = document.getElementById('colors');

//Liens entre produit et page d'acceuil
//on recupere l'url de la page
const url = new URL(window.location.href);
//on recupere l'id dans l'url de la page
const id = url.searchParams.get("id");


// recherche de la bonne array de l'api en fonction de l'id de la page
fetch (`http://localhost:3000/api/products/${id}`)
    .then(res=>res.json())
    .then(kanapData=> {


let imgUrl = kanapData.imageUrl
let imgTxt = kanapData.altTxt
let kanapName = kanapData.name
let price = kanapData.price
let desc = kanapData.description

//remplacement du titre de la page
let title = document.querySelector('title')
title.innerText = kanapName

// ajout des elements html
document.querySelector('.item__img')
    .insertAdjacentHTML('afterbegin', `<img src="${imgUrl}" alt="${imgTxt}"></img>`);
document.getElementById('title')
    .insertAdjacentHTML('afterbegin', `${kanapName}`);
document.getElementById('price')
    .insertAdjacentHTML('afterbegin', `${price}`);
document.getElementById('description')
    .insertAdjacentHTML('afterbegin', `${desc}`);
    });