let order = [];
let total = 0;

function addItem(name, price, qtyId) {
  const qty = parseInt(document.getElementById(qtyId).value);
  const cost = price * qty;

  order.push(`${qty} x ${name} = KES ${cost}`);
  total += cost;

  renderOrder();
}

function renderOrder() {
  const list = document.getElementById("orderList");
  list.innerHTML = "";
  order.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
  document.getElementById("total").textContent = total;
}

function sendWhatsApp() {
  const name = document.getElementById("customerName").value;
  const location = document.getElementById("customerLocation").value;

  if (!name || !location || order.length === 0) {
    alert("Please fill your name, location, and add items.");
    return;
  }

  let message =
    `Hello Bungofarm,%0A` +
    `Name: ${name}%0A` +
    `Location: ${location}%0A%0A` +
    `Order:%0A` +
    order.join('%0A') +
    `%0A%0ATotal: KES ${total}`;

  const phone = "254723058258"; // CHANGE TO YOUR NUMBER
  window.open(`https://wa.me/${phone}?text=${message}`);
}
