/**
 * Mike & Julia Hotel Snack Bar App Project
 * command.js
 * 
 * @author Paul-henry NGOUNOU
 */

//Local storage
const storedQuantities = localStorage.getItem("quantities");

//Command objects
let quantities = (storedQuantities != undefined)? JSON.parse(storedQuantities) : {};
let prices = {};

//DOM
const commandList = document.querySelector(".command__list");
const priceContainer = document.querySelector(".command__pricing").firstElementChild;
const cardCaptions = document.querySelectorAll(".card__caption");
const submitBtn = document.querySelector(".command__btn");
const catalogGrid = document.querySelector(".catalog__grid");
const searchBar = document.querySelector(".catalog__search");

function addToCommand(drinkName){
    if(quantities[drinkName]){
        quantities[drinkName]++;
    }
    else{
        quantities[drinkName] = 1;
    }

    localStorage.setItem("quantities", JSON.stringify(quantities));
}

function removeFromCommand(drinkName){
    delete quantities[drinkName];
    localStorage.setItem("quantities", JSON.stringify(quantities));
}

function updateCommandList(){
    commandList.innerHTML = "";

    for(let drink in quantities){
        const newLi = document.createElement("li");
        const newTextNode = document.createTextNode(drink);
        const newSpan = document.createElement("span");
        const newDelIcon = document.createElement("span");

        newDelIcon.classList.add("item__del-icon");
        newDelIcon.innerHTML = "&times;";

        newDelIcon.addEventListener("click", () => {
            removeFromCommand(drink);
            updateCommandList();
            updatePrice();
        });

        newSpan.classList.add("item__quantity");
        newSpan.innerHTML = quantities[drink];
        newLi.classList.add("list__item");

        newLi.appendChild(newSpan);
        newLi.appendChild(newTextNode);
        newLi.appendChild(newDelIcon);

        commandList.appendChild(newLi);
    }
}

function updatePrice(){
    let totalAmount = 0;

    for(drink in quantities){
        totalAmount += quantities[drink] * prices[drink];
    }

    priceContainer.innerHTML = totalAmount;
}

/*function updateCatalogFromSearch(){
    if
}*/

//Functions
function main(){
    cardCaptions.forEach(caption => {
        const drinkName = caption.firstElementChild.innerHTML.toLowerCase();
        const drinkPrice = caption.firstElementChild.nextElementSibling.innerHTML.split(" ")[0];
        const addBtn = caption.lastElementChild;
        
        prices[drinkName] = parseInt(drinkPrice);

        addBtn.addEventListener("click", () => {
            addToCommand(drinkName);
            updateCommandList();
            updatePrice();
        })
    })

    updateCommandList();
    updatePrice();

    submitBtn.addEventListener("click", () => {
        let data = quantities;

        $.ajax({
            "url" : "http://localhost:8000/command/create",
            "data" : quantities,
            "method" : "POST",
            "headers" : {"X-CSRF-TOKEN" : localStorage.getItem("token")},
            "success" : (result, status, xhr) => {
                console.log(quantities);
                localStorage.removeItem("quantities");
                quantities = {};
                updateCommandList();
                updatePrice();
            },

            "error" : (xhr, status, error) => {
                console.error(error, status, xhr);
            },
        });
    });
}

main();