import { servicesProducts } from "../controller/services/services-products.js";

const productContainer = document.querySelector("[data-product]");
const form = document.querySelector("[data-form]");







function createElement(name, price, image, id){
  const card = document.createElement("div")
  card.classList.add("card")
  card.setAttribute("data-id", id)

  card.innerHTML = `
  <div class="imagem">
  <img src="${image}" alt="${name}">
  <div class="card-container--info">
      <p>${name}</p>
      <div class="card-container--value">
          <p>R$ ${price}</p>
          <button class="delete-button" data-id="${id}">
          <img src="./images/lixeira.svg" alt="lixeira icone" data-lixeira>
          </button>
   </div>
   </div>
   </div>
   `
   const btnDelete = card.querySelector('[data-lixeira]')
   btnDelete.addEventListener('click', async() =>{
     /* const id= card.getAttribute('data-id')  */

       var confirmacao = confirm("Tem certeza que deseja excluir o produto? ");
       if (confirmacao == true) { 
        try {
       card.remove()
       await servicesProducts.deleteProduct(id);
       alert("Produto apagado com sucesso.");
 
  } catch (error) {
    console.error(error);
  }
} else {
alert("Nenhum produto foi apagado.");
}  
  
})
   productContainer.appendChild(card)
   return card

}




const render = async() => {
  try {
    const listProduct = await servicesProducts.productList()

    listProduct.forEach((product => {
      productContainer.appendChild(
        createElement(product.name, product.price, product.image, product.id)
      );
     
    }));

  }catch(error){
    console.log(error)
  }
};





form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("[data-name]").value;
  const price = document.querySelector("[data-price]").value;
  const image = document.querySelector("[data-image]").value;

  servicesProducts
  .createProduct(name, price, image)
  alert('Produto guardado com sucesso!')
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
  
});

render()











