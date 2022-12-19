//on recupere l'url de la page
const url = new URL(window.location.href);
//on recupere l'id dans l'url de la page
const idCanap = url.searchParams.get("id");


//Récupération des données du produit correspondant à l'id dans le json + affichage des éléments du canapé
const urlCanap = `http://localhost:3000/api/products/${idCanap}`;

function affichageDonnees() {
  fetch(urlCanap)  //connection à l'api
    .then((response) => response.json()) //test connexion json
    .then(function (idCanap) {
      affichagePageCanape(idCanap); // affichage données Canap
    })
}
affichageDonnees();

// construction la fiche du canape
const affichagePageCanape = (id) => {
  //remplacement du titre de la page
  let title = document.querySelector("title")
  title.innerText = `${id.name}`;
  //image produit
  let img = document.querySelector(".item__img");
  img.innerHTML = `<img src="${id.imageUrl}" alt="${id.altTxt}"></img>`;
  //Nom du produit
  let titre = document.getElementById("title");
  titre.innerHTML = `${id.name}`;
  //Prix
  let prix = document.getElementById("price");
  prix.innerHTML = `${id.price}`;
  //Description
  let description = document.getElementById("description");
  description.innerHTML = `${id.description}`;
  // Couleurs
  let couleur = document.getElementById("colors");
  for (let i of id.colors) {
    couleur.innerHTML += `<option value="${i}">${i}</option>`;
  }
}

// PANIER

