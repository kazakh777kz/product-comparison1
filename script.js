const productsDB = [

/* ================= SMARTPHONES ================= */

{ name:"iPhone 15 Pro", marketplace:"Kaspi", seller:"Kaspi Official", price:629000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
{ name:"iPhone 15 Pro", marketplace:"Wildberries", seller:"WB Store", price:615000, delivery:2000, term:"4 дня", url:"https://wildberries.kz" },
{ name:"iPhone 15 Pro", marketplace:"Ozon", seller:"Ozon Seller", price:610000, delivery:3000, term:"5 дней", url:"https://ozon.kz" },

{ name:"iPhone 14 Pro", marketplace:"Kaspi", seller:"Kaspi Official", price:575000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
{ name:"iPhone 14 Pro", marketplace:"Ozon", seller:"Ozon Seller", price:560000, delivery:2500, term:"4 дня", url:"https://ozon.kz" },

{ name:"Samsung Galaxy S23", marketplace:"Kaspi", seller:"Samsung Store", price:540000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
{ name:"Samsung Galaxy S23", marketplace:"Ozon", seller:"Ozon", price:535000, delivery:2500, term:"3 дня", url:"https://ozon.kz" },
{ name:"Samsung Galaxy S23", marketplace:"Technodom", seller:"Technodom", price:548000, delivery:1500, term:"2 дня", url:"https://technodom.kz" },

{ name:"Samsung Galaxy A54", marketplace:"Kaspi", seller:"Samsung Store", price:245000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
{ name:"Samsung Galaxy A54", marketplace:"Wildberries", seller:"WB Mobile", price:238000, delivery:2000, term:"4 дня", url:"https://wildberries.kz" },

{ name:"Xiaomi 13 Pro", marketplace:"Kaspi", seller:"Xiaomi Official", price:420000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
{ name:"Xiaomi 13 Pro", marketplace:"Ozon", seller:"Ozon", price:410000, delivery:3000, term:"5 дней", url:"https://ozon.kz" },

/* ================= LAPTOPS ================= */

{ name:"MacBook Air M2", marketplace:"Kaspi", seller:"Apple Store", price:820000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
{ name:"MacBook Air M2", marketplace:"Sulpak", seller:"Sulpak", price:835000, delivery:3000, term:"2 дня", url:"https://sulpak.kz" },
{ name:"MacBook Air M2", marketplace:"Ozon", seller:"Ozon Tech", price:810000, delivery:4000, term:"5 дней", url:"https://ozon.kz" },

{ name:"MacBook Pro M3", marketplace:"Kaspi", seller:"Apple Store", price:1150000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
{ name:"MacBook Pro M3", marketplace:"Ozon", seller:"Ozon Tech", price:1135000, delivery:5000, term:"6 дней", url:"https://ozon.kz" },

{ name:"ASUS TUF Gaming F15", marketplace:"Kaspi", seller:"ASUS Official", price:520000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
{ name:"ASUS TUF Gaming F15", marketplace:"Technodom", seller:"Technodom", price:535000, delivery:2000, term:"2 дня", url:"https://technodom.kz" },

{ name:"HP Pavilion 15", marketplace:"Kaspi", seller:"HP Store", price:390000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
{ name:"HP Pavilion 15", marketplace:"Ozon", seller:"Ozon", price:380000, delivery:3000, term:"4 дня", url:"https://ozon.kz" },

/* ================= AUDIO ================= */

{ name:"AirPods Pro 2", marketplace:"Kaspi", seller:"Apple Official", price:145000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
{ name:"AirPods Pro 2", marketplace:"Wildberries", seller:"WB Audio", price:139000, delivery:1500, term:"3 дня", url:"https://wildberries.kz" },

{ name:"Sony WH-1000XM5", marketplace:"Kaspi", seller:"Sony Official", price:215000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
{ name:"Sony WH-1000XM5", marketplace:"Ozon", seller:"Ozon Audio", price:208000, delivery:2500, term:"4 дня", url:"https://ozon.kz" },

/* ================= GAMING ================= */

{ name:"PlayStation 5", marketplace:"Kaspi", seller:"Sony Official", price:320000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
{ name:"PlayStation 5", marketplace:"Technodom", seller:"Technodom", price:330000, delivery:2000, term:"2 дня", url:"https://technodom.kz" },
{ name:"PlayStation 5", marketplace:"Ozon", seller:"Ozon Games", price:315000, delivery:3500, term:"4 дня", url:"https://ozon.kz" },

{ name:"Xbox Series X", marketplace:"Kaspi", seller:"Microsoft Store", price:310000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
{ name:"Xbox Series X", marketplace:"Ozon", seller:"Ozon Games", price:305000, delivery:3000, term:"4 дня", url:"https://ozon.kz" }

];

/* ================= SEARCH LOGIC ================= */

function normalize(text) {
  return text.toLowerCase().replace(/ё/g, "е");
}

function searchProducts() {
  const query = normalize(document.getElementById("productInput").value);
  const selectedMarkets = [...document.querySelectorAll(".marketplace:checked")].map(c => c.value);
  const container = document.getElementById("results");

  container.innerHTML = "";

  let results = productsDB.filter(p =>
    normalize(p.name).includes(query) &&
    selectedMarkets.includes(p.marketplace)
  );

  if (!results.length) {
    container.innerHTML = "<p>Ничего не найдено</p>";
    return;
  }

  const minTotal = Math.min(...results.map(p => p.price + p.delivery));

  results.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    const isBest = (p.price + p.delivery) === minTotal;

    card.innerHTML = `
      ${isBest ? `<div class="badge">Самое выгодное</div>` : ""}
      <h3>${p.name}</h3>
      <div class="marketplace">${p.marketplace} · ${p.seller}</div>
      <div class="price">${p.price.toLocaleString()} ₸</div>
      <div class="delivery">Доставка: ${p.delivery} ₸ · ${p.term}</div>
      <div class="total">Итого: ${(p.price + p.delivery).toLocaleString()} ₸</div>
      <a href="${p.url}" target="_blank">Перейти в магазин</a>
    `;

    container.appendChild(card);
  });
}


Add extended product database
