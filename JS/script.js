const button = document.getElementById("try");
button.addEventListener("click", function (event) {
  const elementId = event.target.id;
  getId(elementId);
});

const seatCard = [];
function getId(elementId) {
  const index = seatCard.length;
  const getElementId = document.getElementById(elementId);
  console.log(getElementId);
  if (getElementId.id !== "try") {
    console.log(getElementId.id.length);
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
  element.innerText = seatNumber
}
