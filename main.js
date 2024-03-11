const inputbox = document.getElementById("inputBox");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputbox.value===""){
        window.alert("there must be some input added");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    inputbox.value ="";
    HoldData();
}

listContainer.addEventListener("click", event=>{
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        HoldData();
        }
        else if(event.target.tagName === "SPAN"){
            event.target.parentElement.remove();
            HoldData();
        }
},false)


function HoldData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();