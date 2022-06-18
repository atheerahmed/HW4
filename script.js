const api="https://www.breakingbadapi.com/api/characters/";

async function viewActors() {
    const response = await fetch(api)
    const data = await response.json();

    print(data);
    
}


function print(data) {
    const header= document.querySelector("#header");
    const content= document.querySelector("#content");

    header.innerHTML += `
    <select class = "form-control" onchange = "getActor(this.value)">
    <option> Select Actor </option> ${data.map( actor=> `<option>${actor.name}</option>`)}
     </select>`
}

async function getActor(params) {
    const response = await fetch(`${api}?name=${params}`)
    const data = await response.json();
    console.log(data);
    content.innerHTML= `<h2 > ${data[0].name} </h2 ><h2 style="color:rgb(165, 255, 165);; font-size: 30px; padding-top: 20px;" >NickName : ${data[0].nickname}</h2>

    <img src=" ${data[0].img}" width=300 padding-top: 50%;>`
    
   
}

viewActors();
