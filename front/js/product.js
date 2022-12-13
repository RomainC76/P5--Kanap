const kanapData = JSON.parse(localStorage.getItem("productData"));
let colors = document.getElementById('colors');

//Liens entre produit et page d'acceuil
let i =0;
//on recupere l'url de la page
const url = new URL(window.location.href);
//on recupere l'id dans l'url de la page
const id = url.searchParams.get("id");


// recherche de la bonne array de l'api en fonction de l'id de la page
while (id != (kanapData[i]._id) ) {
    i++ ;
}

let imgUrl = kanapData[i].imageUrl
let imgTxt = kanapData[i].altTxt
let kanapName = kanapData[i].name
let price = kanapData[i].price
let desc = kanapData[i].description
let quantite = parseInt(document.getElementById('quantity').value)

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
