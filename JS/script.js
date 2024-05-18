const button = document.getElementById("all-seat");
button.addEventListener("click", function (event) {
  const elementId = event.target.id;
  getId(elementId);
});

const seatCard = [];
function getId(elementId) {
  const index = seatCard.length;
  const getElementId = document.getElementById(elementId);
  seatNumber(getElementId);
  if (getElementId.id !== "all-seat") {
    if (seatCard.includes(getElementId.id) === false && index <= 3) {
      seatLeft();
      seatTotal();
      calculateTotal();
      getElementId.classList.add("bg-green-500");
      getElementId.classList.add("text-white");
      seatCard.push(getElementId.id);
    }
  }
  if (index === 4 && seatCard.includes(getElementId.id) === false) {
    alert("you are select max seat");
  }
}
function seatLeft() {
  const element = document.getElementById("seat-left");
  const num = parseInt(element.innerText);
  const seatNumber = num - 1;
  element.innerText = seatNumber;
}

function seatTotal() {
  const element = document.getElementById("seat-total");
  const num = parseInt(element.innerText);
  const seatNumber = num + 1;
  element.innerText = seatNumber;
}

function seatNumber(seatNum) {
  const elementText = seatNum;
  const element = document.getElementById("seat-number");
  if (seatCard.length <= 3 && seatCard.includes(seatNum.id) === false) {
    if (elementText.id !== "all-seat") {
      const elementContainer = element.appendChild(
        document.createElement("div")
      );
      elementContainer.classList.add(
        "flex",
        "justify-between",
        "my-4",
        "gap-x-16",
        "text-gray-500",
        "font-normal"
      );
      elementContainer.innerHTML = `<span>${elementText.id}</span>
    <span>Economy</span> <span id="taka" >550</span>`;
    }
  }
}
let totalPrice = 0;
function calculateTotal() {
  totalPrice += 550;
  const totalPriceElement = document.getElementById("total-price");
  const grandTotal = document.getElementById("grand-total");
  const total = (totalPriceElement.innerText = totalPrice);
  grandTotal.innerText = total;
}

function discountTotal() {
  const element = document.getElementById("discount-price");
  const input = document.getElementById("input-coupon");
  const grandTotal = document.getElementById("grand-total");
  // const createElement = element.innerHTML
  const inputHide = document.getElementById("input-hide");

  const getTotalPrice = document.getElementById("total-price");
  const getTotalPriceNum = parseInt(getTotalPrice.innerText);

  if (input.value === "Couple 20") {
    inputHide.classList.add("hidden");
    const discount = getTotalPriceNum - getTotalPriceNum * 0.2;
    const discountT = (getTotalPriceNum * 20) / 100;
    element.innerHTML = `<p>Discount</p>
    <p>${discountT}</p>`;
    grandTotal.innerText = discount;
  }
  if (input.value === "NEW15") {
    inputHide.classList.add("hidden");
    const discount = getTotalPriceNum - getTotalPriceNum * 0.15;
    const discountT = (getTotalPriceNum * 15) / 100;
    element.innerHTML = `<p>Discount</p>
    <p>${discountT}</p>`;
    grandTotal.innerText = discount;
  }
}
const phnElement = document.getElementById("phnNumber");
phnElement.addEventListener("keyup", function (e) {
  const value = e.target.value;
  btnNext(value);
});

function btnNext(value) {
  const element = document.getElementById("next");
  if (value) {
    element.removeAttribute("disabled", "true");
  } else {
    element.setAttribute("disabled", "true");
  }
}
