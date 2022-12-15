//on recupere l'url de la page
const url = new URL(window.location.href);
//on recupere l'id dans l'url de la page
const idCanap = url.searchParams.get("id");
console.log(idCanap)


//Récupération des données du produit correspondant à l'id dans le json + affichage des éléments du canapé
  const urlCanap = `http://localhost:3000/api/products/${idCanap}`;

 function affichageDonnees (){
      fetch(urlCanap)  //connection à l'api
        .then((response) => response.json()) //test connexion json
        .then(function(idCanap) {
          affichagePageCanape(idCanap); // affichage données Canap
              console.log(idCanap._id);
     })   
  }
affichageDonnees();

// construction la fiche du canape
const affichagePageCanape  = (id) => {
   //remplacement du titre de la page
let title = document.querySelector("title")
title.innerText = `${id.name}`;
  //image produit
  let img = document.querySelector(".item__img");
  img.innerHTML = `<img src="${id.imageUrl}" alt="${id.altTxt}"></img>`;
  //Nom du produit
  let titre = document.getElementById("title");
  titre.innerHTML =`${id.name}`;
  //Prix
  let prix = document.getElementById("price");
  prix.innerHTML =`${id.price}`;
  //Description
  let description = document.getElementById("description");
  description.innerHTML =`${id.description}`;
   // Couleurs
   let couleur = document.getElementById("colors");
      for (let i of id.colors) {
        couleur.innerHTML += `<option value="${i}">${i}</option>`;
      }
}
//surveillance du bouton "ajouter au panier" puis export des données dans le localStorage
// bouton.addEventListener('click',)


// � Recommandations :
// ● Techniquement parlant, le panier peut être un array qui
// contiendrait trois choses :
// ○ l’id du produit ;
// ○ la quantité du produit ;
// ○ la couleur du produit.
// ● Il est nécessaire d’utiliser localStorage pour pouvoir accéder à cet
// array depuis la page Panier.
// ● Lorsqu’on ajoute un produit au panier, si celui-ci n'était pas déjà
// présent dans le panier, on ajoute un nouvel élément dans l’array.
// ● Lorsqu’on ajoute un produit au panier, si celui-ci était déjà présent
// dans le panier (même id + même couleur), on incrémente
// simplement la quantité du produit correspondant dans l’array.


// Message qui indique que les produits ont été ajoutés au panier

// // Ecouter les changements sur nombre et couleur (le choix de couleur nécessitera une boucle ?for of? car le nombre de couleurs disponibles dépend de l'objet)

// Définir un local storage ? Y envoyer le nombre et la couleur choisis

//  Transmettre les données du local storage à la page panier (?)