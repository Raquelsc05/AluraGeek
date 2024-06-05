const productList = () => {
  return fetch("https://665fd5975425580055b10a9b.mockapi.io/api/v1/:products")
  .then((res) => res.json())
  .catch((err) => console.log(err));
};

const createProduct = (name, price, image) => {
  return fetch("https://665fd5975425580055b10a9b.mockapi.io/api/v1/:products",{
    method: "POST",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      price,
      image, 
    }),
  })
  .then((res) => res.json())
  .catch((err) => console.log(err));
 
};

 async function deleteProduct(id) {
  const url = `https://665fd5975425580055b10a9b.mockapi.io/api/v1/:products/${id}`;
  try {
    const resposta = await fetch(url, {
      method: "DELETE",
    });
    if(!resposta.ok){
      throw new Error(`Erro ao deletar o produto com ID: ${id}`);
    }
    } catch (error) {
        console.erro(`erro ao deletar o produto com ID: ${id}`, error);
        throw error;
    }
  }

 


export const servicesProducts = {
    productList, 
    createProduct,
    deleteProduct
   
    
};