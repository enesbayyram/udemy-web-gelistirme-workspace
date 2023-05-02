//MOUSE EVENTLARI

//DOMContentLoaded
//load
//click
//dblclick
//mouseover
//mouseout
//mouseenter
//mouseleave


// window.addEventListener("load",run);

// function run(){
//     console.log("Sayfa Yüklendi");
// }

const cardTitle = document.querySelectorAll(".card-title")[1];
const cardBody = document.querySelectorAll(".card-body")[1];

// cardBody.addEventListener("mouseover",run);
// cardBody.addEventListener("mouseout",run);

cardBody.addEventListener("mouseenter",run);
cardBody.addEventListener("mouseleave",run);

function run(e){
    console.log(e.type);
}