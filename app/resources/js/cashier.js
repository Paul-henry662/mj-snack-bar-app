/**
 * Mike & Julia Hotel Snack Bar App Project
 * cashier.js
 * 
 * @author Paul-henry NGOUNOU
 */

const toPrintList = document.getElementById("to-print-list");
const toValidateList = document.getElementById("to-validate-list");

function updatePrintList(infos){
    toPrintList.innerHTML = "";

    let commands = infos.commands;
    let quantities = infos.quantities;
    let waiters = infos.waiters;

    for(let cmd of commands){
        const newLi = document.createElement("li");
        const newFacade = document.createElement("div");
        const newContent = document.createElement("div");
        const newPriceCard = document.createElement("div");
        const newFacadeList = document.createElement("div");
        const newContentList = document.createElement("div");
        const newFacadeName = document.createElement("div");
        const newContentName = document.createElement("div");
        const newTime = document.createElement("div");
        const newPrintBtn = document.createElement("button");

        const cmdQtities = quantities[cmd.id];

        newFacadeName.innerHTML = waiters[cmd.id].first_name;
        newContentName.innerHTML = waiters[cmd.id].first_name + " " + waiters[cmd.id].last_name;
        
        for(drink in cmdQtities){
            newFacadeList.innerHTML += cmdQtities[drink] + " " + drink + ", ";
        }
        newContentList.innerHTML = newFacadeList.innerHTML;

        newFacade.appendChild(newFacadeList);
        newFacade.appendChild(newFacadeName);

        newPriceCard.innerHTML = cmd.amount;

        const date = new Date(cmd.created_at);
        const hh = (date.getHours()) >= 10? date.getHours() : "0" + date.getHours();
        const mm = (date.getMinutes()) >= 10? date.getMinutes() : "0" + date.getMinutes();
        newTime.innerHTML = hh + "h" + mm;

        newPrintBtn.innerHTML = "Imprimer";

        newPrintBtn.addEventListener("click", () => {
            updateCommandState(cmd.id);
        })

        newContent.appendChild(newContentList);
        newContent.appendChild(newPriceCard);
        newContent.appendChild(newContentName);
        newContent.appendChild(newTime);
        newContent.appendChild(newPrintBtn);

        newLi.appendChild(newFacade);
        newLi.appendChild(newContent);
        toPrintList.appendChild(newLi);
    }
}

function updateValidateList(infos){
    toValidateList.innerHTML = "";

    let commands = infos.commands;
    let quantities = infos.quantities;
    let waiters = infos.waiters;

    for(let cmd of commands){
        const newLi = document.createElement("li");
        const newFacade = document.createElement("div");
        const newContent = document.createElement("div");
        const newPriceCard = document.createElement("div");
        const newFacadeList = document.createElement("div");
        const newContentList = document.createElement("div");
        const newFacadeName = document.createElement("div");
        const newContentName = document.createElement("div");
        const newTime = document.createElement("div");
        const newPrintBtn = document.createElement("button");

        const cmdQtities = quantities[cmd.id];

        newFacadeName.innerHTML = waiters[cmd.id].first_name;
        newContentName.innerHTML = waiters[cmd.id].first_name + " " + waiters[cmd.id].last_name;
        
        for(drink in cmdQtities){
            newFacadeList.innerHTML += cmdQtities[drink] + " " + drink + ", ";
        }
        newContentList.innerHTML = newFacadeList.innerHTML;

        newFacade.appendChild(newFacadeList);
        newFacade.appendChild(newFacadeName);

        newPriceCard.innerHTML = cmd.amount;

        const date = new Date(cmd.created_at);
        const hh = (date.getHours()) >= 10? date.getHours() : "0" + date.getHours();
        const mm = (date.getMinutes()) >= 10? date.getMinutes() : "0" + date.getMinutes();
        newTime.innerHTML = hh + "h" + mm;

        newPrintBtn.innerHTML = "Valider";

        newPrintBtn.addEventListener("click", () => {
            updateCommandState(cmd.id);
        })

        newContent.appendChild(newContentList);
        newContent.appendChild(newPriceCard);
        newContent.appendChild(newContentName);
        newContent.appendChild(newTime);
        newContent.appendChild(newPrintBtn);

        newLi.appendChild(newFacade);
        newLi.appendChild(newContent);
        toValidateList.appendChild(newLi);
    }
}

function updateCommandState(commandId){
    $.ajax({
        "url" : "http://localhost:8000/command/updateState/" + commandId,
        "method" : "post",
        "headers" : {"X-CSRF-TOKEN" : localStorage.getItem("token")},

        "success" : (result, status, xhr) => {
            console.log(result, status, xhr);
        },

        "error" : (xhr, status, error) => {
            console.error(error, status, xhr);
        },
    })
}

function fetchNewCommands(){
    $.ajax({
        "url" : "http://localhost:8000/commands/new",
        "method" : "get",
        "headers" : {"X-CSRF-TOKEN" : localStorage.getItem("token")},

        "success" : (result, status, xhr) => {
            //console.log(result, status, xhr);
            updatePrintList(result);
        },

        "error" : (xhr, status, error) => {
            console.error(error, status, xhr);
        },
    })

    //console.log("fetched");
}

function fetchPrintedCommands(){
    $.ajax({
        "url" : "http://localhost:8000/commands/printed",
        "method" : "get",
        "headers" : {"X-CSRF-TOKEN" : localStorage.getItem("token")},

        "success" : (result, status, xhr) => {
            //console.log(result, status, xhr);
            updateValidateList(result);
        },

        "error" : (xhr, status, error) => {
            console.error(error, status, xhr);
        },
    })

    //console.log("fetched");
}

function main(){
    fetchNewCommands();
    fetchPrintedCommands();
    setInterval(fetchNewCommands, 2000);
    setInterval(fetchPrintedCommands, 1000);
}

main();