

// recuperation de l'api et modification du dom(une fois chargé)

const start = () => {

  fetch("http://localhost:3000/api/products")
    .then(res => res.json())
    .then(kanapData => {
      // la variable display est la a cause de la portée des variables + simple de faire un "template"  que de tout créer comme sur la page produit    
      let display = ''
      for (let article of kanapData) {
        // Le += permet d'insérer l'html sans ecraser le reste(concatenation à la volée, il se rempli au fur et a mesure)
        //creer un template est bcp plus rapide que de creer avec appenchild ect
        display += `  
                    <a href="./product.html?id=${article._id}">
                        <article>
                          <img src="${article.imageUrl}" alt="${article.altTxt}">
                          <h3 class="productName">${article.name}</h3>
                          <p class="productDescription">${article.description}</p>
                        </article>
                      </a>
                  `
      }
      document.getElementById('items').insertAdjacentHTML('beforeend', display)
    })
    .catch(err => console.log(err))
}

window.addEventListener('load', start)





