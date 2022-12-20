// recuperation du contenu du panier
let panierActuel = localStorage.getItem("Panier");
let Panier = JSON.parse(panierActuel);

//recupération de la balise CSS pour l'affichage
let carteArticle = document.getElementById("cart__items");
let titre = document.querySelector("h1");
let affichageTotalQuantite = document.getElementById("totalQuantity");
let affichagePrixTotal = document.getElementById("totalPrice");

// initialisation pour les Totaux
let sumQuantite = 0;
let sumPrix = 0;

//PANIER VIDE
if (Panier == null) {

    titre.innerHTML = `Votre panier est vide`;

} else {  ////PANIER NON VIDE - AFFICHAGE ELEMENTS CANAPES SELECTIONNES -

    Panier.forEach((element) => {
        const urlCanap = `http://localhost:3000/api/products/${element.id}`;
        fetch(urlCanap)
            .then(response => response.json())
            .then((data) => {
                infoJson = data;
                affichageElement(element, infoJson);

                //CALCUL QUANTITE & TOTAL
                sumPrix += infoJson.price * element.quantite;
                sumQuantite += parseInt(element.quantite);

                //AFFICHAGE TOTAUX APRES FIN DES PROMISES (incrémentation à chaque passage)
                affichageTotalQuantite.innerHTML = sumQuantite;
                affichagePrixTotal.innerHTML = sumPrix;
            });

    })

}
function affichageElement(article, infoJsonArticle) {

    // insertion des articles
    let createArticle = document.createElement('article');
    createArticle.className = 'cart__item';
    createArticle.setAttribute('data-id', article.id);
    createArticle.setAttribute('data-color', article.couleur);
    carteArticle.appendChild(createArticle);
}