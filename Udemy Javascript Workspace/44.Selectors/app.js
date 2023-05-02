//Selectors (Seçiciler) - Style Özellikleri

//classname , id , tag name

//getElementById : id ye göre elementi yakalar
//getElementByClassName : class ismine göre yakalar.
//getElementByTagName : etiket ismine göre yakalar.





// const button = document.getElementById("todoAddButton");

// console.log(button);
// console.log(button.id);
// console.log(button.getAttribute("id"));

// console.log(button.className);
// console.log(button.getAttribute("class"));

// const classListesi = button.classList[3];
// const classListesi = button.classList[2];

// const classListesi = button.classList;

// classListesi.forEach(function(className){
//     console.log(className);
// })

// console.log(classListesi);


// let buttonText = button.textContent;
// let buttonText2 = button.innerHTML;


// console.log(buttonText);
// console.log(buttonText2);



// button.innerHTML="<b>Todo Ekleyin</b>";


// const todoList = Array.from(document.getElementsByClassName("list-group-item"));
// todoList.forEach(function(todo){
//     console.log(todo.textContent);
// })
// console.log(todoList);



// const forms = Array.from(document.getElementsByTagName("form"));
// forms.forEach(function(form){
//     console.log(form);
// })
// console.log(forms[1]);


// const todoList = document.getElementsByTagName("li");
// console.log(todoList);



// getElementById - getElementByClassName - getElementByTagName


//querySelector - querySelectorAll


// const clearButton = document.querySelector("#todoClearButton");
// console.log(clearButton);

// console.log(document.getElementById("todoClearButton")));


// const todoList = document.querySelector(".list-group");
// console.log(todoList);

//odd ve even
const todoList = Array.from(document.querySelectorAll("li:nth-child(odd)"));

todoList.forEach(function(todo){
    todo.style.backgroundColor = "lightgrey";
})

console.log(todoList);