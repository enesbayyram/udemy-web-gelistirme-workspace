//? ---------FETCH API ------------

// callback  - promise
//ajax(xmlhttprequest) - fetch api


// console.log(this)

// function getStudents(url) {
//     fetch(url)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => console.log(data))
//         .catch((err) => console.log(err))
// }

// getStudents("students.json");


// function getData(url){
//     const promise = fetch("https://jsonplaceholder.typicode.com/albums")

//     console.log(promise)
// }

// getData("https://jsonplaceholder.typicode.com/albums");


// function saveStudents(){
//     fetch("https://jsonplaceholder.typicode.com/albums",{
//         method:"POST",
//         headers : {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify( {
//             "id" : 2,
//             "firstname" : "Harun",
//             "lastname" : "Kaymazalp"
//         })
        
//     })
// }
