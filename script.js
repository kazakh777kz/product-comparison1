// Прототип базы данных товаров
const productsDB = [
  {name:"iPhone 15 Pro", marketplace:"Kaspi", seller:"Kaspi Official", price:629000, delivery:0, term:"1 день", url:"https://kaspi.kz/shop/p/iphone-15-pro-1051234"},
  {name:"iPhone 15 Pro", marketplace:"Wildberries", seller:"WB Store", price:615000, delivery:2000, term:"4 дня", url:"https://www.wildberries.kz/catalog/iphone-15-pro"},
  {name:"iPhone 15 Pro", marketplace:"Ozon", seller:"Ozon Seller", price:610000, delivery:3000, term:"5 дней", url:"https://www.ozon.kz/product/iphone-15-pro"},
  {name:"Samsung Galaxy S23", marketplace:"Kaspi", seller:"Kaspi Official", price:540000, delivery:0, term:"1 день", url:"https://kaspi.kz/shop/p/samsung-galaxy-s23-123456"},
  {name:"Samsung Galaxy S23", marketplace:"Ozon", seller:"Ozon Seller", price:535000, delivery:2500, term:"3 дня", url:"https://www.ozon.kz/product/samsung-galaxy-s23"},
];

function searchProducts(){
  const input = document.getElementById("productInput").value.trim().toLowerCase();
  const selectedMarketplaces = Array.from(document.querySelectorAll(".marketplace:checked")).map(cb => cb.value);
  const tableBody = document.getElementById("comparisonTable").getElementsByTagName("tbody")[0];

  // Очистка предыдущих результатов
  tableBody.innerHTML = "";

  if(input === "") {
    alert("Введите название товара!");
    return;
  }

  const results = productsDB.filter(p => 
    p.name.toLowerCase().includes(input) && selectedMarketplaces.includes(p.marketplace)
  );

  if(results.length === 0){
    tableBody.innerHTML = "<tr><td colspan='8'>Товары не найдены</td></tr>";
    return;
  }

  results.forEach(p => {
    const row = tableBody.insertRow();
    row.insertCell(0).innerText = p.name;
    row.insertCell(1).innerText = p.marketplace;
    row.insertCell(2).innerText = p.seller;
    row.insertCell(3).innerText = p.price;
    row.insertCell(4).innerText = p.delivery;
    row.insertCell(5).innerText = p.term;
    row.insertCell(6).innerText = p.price + p.delivery;
    const linkCell = row.insertCell(7);
    const a = document.createElement("a");
    a.href = p.url;
    a.target = "_blank";
    a.innerText = "Перейти";
    linkCell.appendChild(a);
  });
}
