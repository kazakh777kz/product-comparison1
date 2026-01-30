const productsDB = [
  // ===== iPhone 15 Pro =====
  {
    name: "iPhone 15 Pro",
    marketplace: "Kaspi",
    seller: "Kaspi Official",
    price: 629000,
    delivery: 0,
    term: "1 день",
    url: "https://kaspi.kz"
  },
  {
    name: "iPhone 15 Pro",
    marketplace: "Wildberries",
    seller: "WB Store",
    price: 615000,
    delivery: 2000,
    term: "4 дня",
    url: "https://wildberries.kz"
  },
  {
    name: "iPhone 15 Pro",
    marketplace: "Ozon",
    seller: "Ozon Seller",
    price: 610000,
    delivery: 3000,
    term: "5 дней",
    url: "https://ozon.kz"
  },

  // ===== Samsung Galaxy S23 =====
  {
    name: "Samsung Galaxy S23",
    marketplace: "Kaspi",
    seller: "Samsung Official",
    price: 540000,
    delivery: 0,
    term: "1 день",
    url: "https://kaspi.kz"
  },
  {
    name: "Samsung Galaxy S23",
    marketplace: "Technodom",
    seller: "Technodom",
    price: 548000,
    delivery: 1500,
    term: "2 дня",
    url: "https://technodom.kz"
  },
  {
    name: "Samsung Galaxy S23",
    marketplace: "Ozon",
    seller: "Ozon Seller",
    price: 535000,
    delivery: 2500,
    term: "3 дня",
    url: "https://ozon.kz"
  },

  // ===== MacBook Air M2 =====
  {
    name: "MacBook Air M2",
    marketplace: "Kaspi",
    seller: "Apple Store",
    price: 820000,
    delivery: 0,
    term: "1 день",
    url: "https://kaspi.kz"
  },
  {
    name: "MacBook Air M2",
    marketplace: "Sulpak",
    seller: "Sulpak",
    price: 835000,
    delivery: 3000,
    term: "2 дня",
    url: "https://sulpak.kz"
  },
  {
    name: "MacBook Air M2",
    marketplace: "Ozon",
    seller: "Ozon Tech",
    price: 810000,
    delivery: 4000,
    term: "5 дней",
    url: "https://ozon.kz"
  },

  // ===== AirPods Pro 2 =====
  {
    name: "AirPods Pro 2",
    marketplace: "Kaspi",
    seller: "Apple Official",
    price: 145000,
    delivery: 0,
    term: "1 день",
    url: "https://kaspi.kz"
  },
  {
    name: "AirPods Pro 2",
    marketplace: "Wildberries",
    seller: "WB Audio",
    price: 139000,
    delivery: 1500,
    term: "3 дня",
    url: "https://wildberries.kz"
  },

  // ===== PlayStation 5 =====
  {
    name: "PlayStation 5",
    marketplace: "Kaspi",
    seller: "Sony Official",
    price: 320000,
    delivery: 0,
    term: "1 день",
    url: "https://kaspi.kz"
  },
  {
    name: "PlayStation 5",
    marketplace: "Technodom",
    seller: "Technodom",
    price: 330000,
    delivery: 2000,
    term: "2 дня",
    url: "https://technodom.kz"
  },
  {
    name: "PlayStation 5",
    marketplace: "Ozon",
    seller: "Ozon Games",
    price: 315000,
    delivery: 3500,
    term: "4 дня",
    url: "https://ozon.kz"
  }
];

function searchProducts() {
  const input = document.getElementById("productInput").value.toLowerCase();
  const selectedMarkets = Array.from(
    document.querySelectorAll(".marketplace:checked")
  ).map(cb => cb.value);

  const tableBody = document.querySelector("#comparisonTable tbody");
  tableBody.innerHTML = "";

  if (!input) {
    alert("Введите название товара");
    return;
  }

  const results = productsDB.filter(p =>
    p.name.toLowerCase().includes(input) &&
    selectedMarkets.includes(p.marketplace)
  );

  if (results.length === 0) {
    tableBody.innerHTML =
      "<tr><td colspan='8'>Ничего не найдено</td></tr>";
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

    const link = document.createElement("a");
    link.href = p.url;
    link.target = "_blank";
    link.textContent = "Перейти";

    row.insertCell(7).appendChild(link);
  });
}
