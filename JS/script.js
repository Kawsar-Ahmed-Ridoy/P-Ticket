const button = document.getElementById("try");
button.addEventListener("click", function (event) {
  const elementId = event.target.id;
  getId(elementId);
});

const seatCard = [];
function getId(elementId) {
  const index = seatCard.length;
  const getElementId = document.getElementById(elementId);
  seatNumber(getElementId)
  console.log(getElementId.id);
  if (getElementId.id !== "try") {
    console.log(getElementId.id);
    if (seatCard.includes(getElementId.id) === false && index <= 3 ) {
      
      seatLeft(index)
      seatTotal(index)
      getElementId.classList.add("bg-green-500");
      getElementId.classList.add("text-white");
      seatCard.push(getElementId.id);
    }
    
  }
  if(index === 4 && seatCard.includes(getElementId.id) === false){
alert('you are select max seat')
  }
  console.log(index);
}
function seatLeft (num){
  const element = document.getElementById('seat-left');
  const e = parseInt(element.innerText)
  const seatNumber = e - 1
  element.innerText = seatNumber
}

function seatTotal (){
  const element = document.getElementById('seat-total');
  const e = parseInt(element.innerText)
  const seatNumber = e + 1
  element.innerText = seatNumber;
}

function seatNumber (seatNum){
  console.log(seatNum.id);
  const elementText = seatNum.innerText;
  const element = document.getElementById('seat-number');
  if(seatCard.length <= 3 && seatCard.includes(seatNum.id) === false){
    const elementContainer = element.appendChild(document.createElement("div")) ;
  elementContainer.classList.add("flex", "justify-between", "my-4", "gap-x-16", "text-gray-500", "font-normal")
  elementContainer.innerHTML = `<span>${elementText}</span>
  <span>Economy</span> <span>550</span>`
  }
  

  // const seatElement = document.getElementById('single-seat')
  // seatElement.innerText = elementText;
  // element.appendChild(seatElement)

}
