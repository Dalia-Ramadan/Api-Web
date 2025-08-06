let productCard = document.getElementById("productCard");
let url = "https://fakestoreapi.com/products";
fetch(url)
  .then((Response) => Response.json())
  .then((product) => {
    product.forEach((element) => {
      let card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
            <img src="${element.image}" alt="${element.title}">
            <div class="title">${element.title}</div>
            <p>${element.description.substring(0, 80)}.....</p>
            <span>${element.price}$</span>
            <button>add to card</button>
        `;
      productCard.appendChild(card);
    });
  });
