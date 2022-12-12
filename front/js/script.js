// recuperation de l'api et stockage dans LocalStorage

function fetchApi() {fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => localStorage.setItem("productData", JSON.stringify(data)))
}

// ajout du du product data en tant que JSON car local storage ne lit que les chaines

const kanapData = JSON.parse(localStorage.getItem("productData"));

// Test cours opc

// Récuprération de l'api et stockage en localstorage

// function fetchApi() {fetch("http://localhost:3000/api/products")
//   .then(function(res) {
//     if (res.ok) {
//       return res.json()
//     .then ((data) => localStorage.setItem("productData",JSON.stringify(data)));
//     }

// ajout du du product data en tant que JSON car local storage ne lit que les chaines

// const KanapData = JSON.parse(localStorage.getItem("productData"));     

// **Ajouts des items sur la page index

// Creer une fonction en appelant l'id puis restitue les chose contenu dedans
// Appeler dabord l id du canap


//   .then(function(value) {
//     document
//         .getElementById("hello-result")
//         .innerText = value.queryString.greetings;
//   })
//   .catch(function(err) {
//     // Une erreur est survenue
//   });
// }**



// Ajout des canapes 

{/* <a href="107fb5b75607497b96722bda5b504926">
            <article>
              <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
              <h3 class="productName">Kanap name1</h3>
              <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
            </article>
          </a> */}