// recuperation de l'api et stockage dans LocalStorage
function fetchApi() {fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => localStorage.setItem("productData", JSON.stringify(data)))
}

const kanapData = JSON.parse(localStorage.getItem("productData"));