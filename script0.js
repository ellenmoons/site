let menuKnop = document.querySelector(".menu");
let navMenu = document.querySelector(".navi");
function toonMenu() {
	if (navMenu.style.display === "flex") {
		navMenu.style.display = "none";
	} else {
		navMenu.style.display = "flex";
    console.log("klik werkt")

	}
}
menuKnop.addEventListener("click",toonMenu);

let mainGedeelte = document.querySelector("main");
function verbergMenu() {
	if (navMenu.style.display === "flex") {
		navMenu.style.display = "none";
	} else {
		navMenu.style.display = "flex";
	}
  console.log("klik 2 werkt")
}
mainGedeelte.addEventListener("click",verbergMenu);

document.getElementById("buttonSubmit")
    .addEventListener("click", function () {
        pushBoodschappen()
    });

function pushBoodschappen()
{
    //Neem waarde van het inputField
    let inputText = document.getElementById('input').value;

    //maak de div met opmaak van class "element"
    let blokElement = document.createElement("div");
    blokElement.className = "element";
    blokElement.innerText = inputText;

    //voeg div toe
    document.getElementById("output").appendChild(blokElement);
}
