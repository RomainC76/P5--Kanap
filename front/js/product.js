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

//ajout canape au panier
let boutonAjoutPanier = document.getElementById("addToCart");

boutonAjoutPanier.addEventListener('click', function (event) {//fonction qui se lance au clic
  ///recuperation quantité
  const quantite = document.getElementById("quantity").value;
  ////recuperation couleur   
  const couleurChoisie = document.getElementById("colors").value;
  ////recuperation idproduit   
  const idProduit = idCanap;
  let select = document.getElementById("selectElement");
  let Panier = [];
  let canapChoisi = {
    id: idCanap,
    quantite: quantite,
    couleur: couleurChoisie
  };
  //si pas de couleur ou de quantite choisie
  if (couleurChoisie == "" || quantite <= 0 || quantite > 100) {
    //demander à l'utilisateur de faire une sélection
    alert("Veuillez choisir une couleur et une quantité")

  } else { //si l'utilisateur a fait son choix
    // recuperation du contenu du panier

    let panierActuel = localStorage.getItem("Panier");

    // si panier vide

    if (panierActuel === null) {

      //ajout du produit sélectionné

      panierActuel = [];
      panierActuel.push(canapChoisi);
      let panierLocalStorage = JSON.stringify(panierActuel);
      console.table(panierLocalStorage);
      localStorage.setItem("Panier", panierLocalStorage); //panier stocké 
      alert("Vous avez commandé un autre canapé")
    } else { //si panier contient déjà un canap

      const Panier = JSON.parse(panierActuel);
      console.table(Panier);
      idem = false;

      //on parcourt le panier

      Panier.forEach((canap) => {
        if (canap.id === idCanap && canap.couleur === couleurChoisie) { //si canap présente même ID + même couleur
          canap.quantite = parseInt(quantite) + parseInt(canap.quantite);//nouvelle quantité du même produit
          idem = true;
        }
      })

      if (idem === false) {
        Panier.push(canapChoisi);

      }

      let panierLocalStorage = JSON.stringify(Panier);
      localStorage.setItem("Panier", panierLocalStorage); //panier stocké 

    }
  }


});
