// fetch("http://localhost:3000/api/products/${element.id}")
//     .then(res => res.json())
//     .then(data => {
//         infoJson = data
//         let display = ''
//         for (let article of data) {
//             // Le += permet d'insérer l'html sans ecraser le reste(concatenation à la volée, il se rempli au fur et a mesure)
//             //creer un template est bcp plus rapide que de creer avec appenchild ect
//             display += `
//                     <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
//                 <div class="cart__item__img">
//                   <img src="../images/product01.jpg" alt="Photographie d'un canapé">
//                 </div>
//                 <div class="cart__item__content">
//                   <div class="cart__item__content__description">
//                     <h2>Nom du produit</h2>
//                     <p>Vert</p>
//                     <p>42,00 €</p>
//                   </div>
//                   <div class="cart__item__content__settings">
//                     <div class="cart__item__content__settings__quantity">
//                       <p>Qté : </p>
//                       <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
//                     </div>
//                     <div class="cart__item__content__settings__delete">
//                       <p class="deleteItem">Supprimer</p>
//                     </div>
//                   </div>
//                 </div>
//               </article>
//                   `
//         }
//         document.getElementById('cartAndFormContainer').insertAdjacentHTML('beforeend', display)
