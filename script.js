let order = [];

function addItem(item) {
  order.push(item);
  renderOrder();
}

function renderOrder() {
  const list = document.getElementById("orderList");
  list.innerHTML = "";
  order.forEach(i => {
    const li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  });
}

function sendWhatsApp() {
  if (order.length === 0) {
    alert("Please add items first");
    return;
  }
  const message = "Hello Bungofarm, I want to order:\n" + order.join("\n");
  const phone = "254723058258"; // CHANGE to your WhatsApp number
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
}
