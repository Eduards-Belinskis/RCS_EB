// async function getProduct() {}
// const getProduc = async () => {};

const getProduct = async () => {
  const response = await fetch("https://dummyjson.com/products/1");

  const data = await response.json();

  console.log(data);

  const divElement = document.querySelector("div");

  console.log(data);

  divElement.innerHTML = `
    <h3>${data.title}</h3>
    <p>${data.description}</p>
    <img src="${data.thumbnail}"/>
    `;
};

getProduct();
