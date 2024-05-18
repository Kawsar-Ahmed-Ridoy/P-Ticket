const button = document.getElementById("try");
button.addEventListener("click", function (event) {
  const elementId = event.target.id;
  getId(elementId);
});

const seatCard = [];
function getId(elementId) {
  const index = seatCard.length;
  const getElementId = document.getElementById(elementId);
  seatNumber(getElementId);
  console.log(getElementId.id);
  if (getElementId.id !== "try") {
    console.log(getElementId.id);
    if (seatCard.includes(getElementId.id) === false && index <= 3) {
      seatLeft(index);
      seatTotal(index);
      calculateTotal();
      getElementId.classList.add("bg-green-500");
      getElementId.classList.add("text-white");
      seatCard.push(getElementId.id);
    }
  }
  if (index === 4 && seatCard.includes(getElementId.id) === false) {
    alert("you are select max seat");
  }
  console.log(index);
}
function seatLeft(num) {
  const element = document.getElementById("seat-left");
  const e = parseInt(element.innerText);
  const seatNumber = e - 1;
  element.innerText = seatNumber;
}

function seatTotal() {
  const element = document.getElementById("seat-total");
  const e = parseInt(element.innerText);
  const seatNumber = e + 1;
  element.innerText = seatNumber;
}

function seatNumber(seatNum) {
  console.log(seatNum.id);
  const elementText = seatNum;
  console.log(elementText);
  const element = document.getElementById("seat-number");
  if (seatCard.length <= 3 && seatCard.includes(seatNum.id) === false) {
    if (elementText.id !== "try") {
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
  const grandTotal = document.getElementById("grand-total")
  const total = totalPriceElement.innerText = totalPrice;
  grandTotal.innerText = total
  
}

function discountTotal(){
  const element = document.getElementById("discount-price")
  const input = document.getElementById('input-coupon')
  const grandTotal = document.getElementById("grand-total")
  // const createElement = element.innerHTML
  const inputHide = document.getElementById('input-hide')

const getTotalPrice = document.getElementById("total-price");
const getTotalPriceNum = parseInt(getTotalPrice.innerText)


if(input.value === "Couple 20" ){
  inputHide.classList.add("hidden")
    const discount = getTotalPriceNum - getTotalPriceNum * 0.2
    const discountT = getTotalPriceNum - getTotalPriceNum * 0.2 - getTotalPriceNum
    element.innerHTML = `<p>Discount</p>
    <p>${discountT}</p>`
    grandTotal.innerText = discount;
  }
  if(input.value === "NEW15"){
    inputHide.classList.add("hidden")
    const discount = getTotalPriceNum - getTotalPriceNum * 0.15
    const discountT = getTotalPriceNum - getTotalPriceNum * 0.15 - getTotalPriceNum
    element.innerHTML = `<p>Discount</p>
    <p>${discountT}</p>`
    grandTotal.innerText = discount;
  }
}

