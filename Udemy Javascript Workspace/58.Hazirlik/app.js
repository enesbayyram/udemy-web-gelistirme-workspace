// console.log("Merhaba");

//Event(click , klavye vs.) 
//Timing işlemleri 
//HTTP istekleri hepsi asenkron çalışmaktadır.

// setTimeout(() => {
//     console.log("200 ms sonra çalıştı.")
// }, 200);

// setTimeout(() => {
//     console.log("150 ms bekledi ve çalıştı")
// }, 150);

// console.log("Son satır.")


//CALLBACK : Bir fonksiyonu bir fonksiyona parametre olarak geçmek için kullanılır.


// setTimeout(() => {
//     console.log("Enes")
// }, 200);

// setTimeout(() => {
//     console.log("Bayram")
// }, 150);


// function getName(callback) {
//     callback("xEnes");
// }

// function getSurname(callback,name){
//     if(name==="Enes"){
//         callback("Bayram")
//     }else{
//         callback("Bilinmeyen Soyisim")
//     }

// }


// getName((name)=>{
//    getSurname((surname)=>{
//     console.log(name , surname)
//    } , name);
// })


// function greet(name ,callback){
//     console.log("Hi " , name)
//     callback();
// }

// function callMe(){
//     console.log("I am a callback function.")
// }

// greet("Enes" , callMe);

// const posts = [
//     {
//         userId: 1,
//         firstName : "Enes",
//         post: "Callback function nedir"
//     },
//     {
//         userId: 2,
//         post: "Promise Nedir ?"
//     },
//     {
//         userId: 3,
//         post: "Async Await Nedir ?"
//     }
// ]


// function getUserId(callback){
//     //Ekrandan işlem yapan kişinin ID sini yakaladık.
//     callback(2)
// }

// function getPostById(userId){
//    for(let post of posts){
//     if(post.userId===userId){
//         console.log(post)
//     }
//    }
// }

// getUserId(getPostById);


// function getUserId(callback) {
//     setTimeout(() => {
//        callback(1)
//     }, 2000);
// }

// function getPostById(userId) {

//     setTimeout(() => {
//         for (let post of posts) {
//             if(post.userId === userId){
//                 console.log(post)
//             }
//         }
//     },1000);
// }

// let userId = getUserId();
// getPostById(userId);

// getUserId(getPostById);


// const orders = [
//     {
//         orderId: 1,
//         kuryeId : 12,
//         customerId: 25,
//         productName: "Lahmacun",
//         price: "25"
//     },
//     {
//         orderId: 2,
//         kuryeId : 12,
//         customerId: 25,
//         productName: "Hamburger",
//         price: "55"
//     },
//     {
//         orderId: 1,
//         kuryeId : 18,
//         customerId: 26,
//         productName: "İskender",
//         price: "100"
//     }
// ]


// function getCustomerId(callback){
//     setTimeout(() => {
//        callback(25)
//     }, 1000);
// }

// function getKuryeId(callback){
//    setTimeout(() => {
//     callback(12)
//    }, 1000);
// }


// getCustomerId((customerId)=>{
//     getKuryeId((kuryeId)=>{
//         // console.log(customerId , kuryeId)
//         list(customerId , kuryeId);
//     })
// })



// function list(customerId , kuryeId){
//     // console.log(customerId , kuryeId)
//   setTimeout(() => {
//     let count = 0;
//     orders.forEach((order)=>{
//         if(order.customerId==customerId && order.kuryeId===kuryeId){
//             count++;
//         }
//     })
//     console.log(kuryeId+ " id li kuryenin sipariş sayısı : " , count)
//   }, 500);
// }

// let customerId = getCustomerId();
// let kuryeId = getKuryeId();
// list(customerId, kuryeId);




function getUsers(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status == 200) {
            console.log(JSON.parse(xhr.responseText));
            console.log("*****************************")
            callback("https://jsonplaceholder.typicode.com/posts")
        }
    });

    xhr.open("GET", url);
    xhr.send();
}

function getPosts(url) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status == 200) {
            console.log(JSON.parse(xhr.responseText));
        }
    })

    xhr.open("GET", url);
    xhr.send();
}


// getUsers("https://jsonplaceholder.typicode.com/users" , getPosts);
// console.log("user metodundan önce calisti garip")


// function getData(url) {
//     return new Promise((resolve, reject) => {
//         try {
//             return resolve(fetch(url));
//         } catch (error) {
//             return reject(error)
//         }
//     })
// }


// getData("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))


// async function  getData(url){
//     const response = await fetch(url);
//     return response;
// }

// const getData =async (url)=>{
//     const response = await fetch(url);
//     return response;
// }


// getData("https://jsonplaceholder.typicode.com/users")
// .then((res)=> res.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))

// const p1 = Promise.resolve(5);
// const p2 = Promise.reject("hata var enooo:");

// Promise.all([p1 , p2])
// .then((data) => {
//     data.forEach((value)=>console.log(value))
// })
// .catch((err) => console.log(err , "promiste hata var."))



// function write() {
//     let check = true;
//     return new Promise((resolve, reject) => {
//         if (check) {
//             resolve("başarılı reyiz");
//         } else {
//             reject("hata oluştu patron");
//         }
//     })
// }

// console.log(write())
