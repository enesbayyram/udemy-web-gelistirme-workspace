
//?---------------------------------ASENKRON BÖLÜMÜ ÖZET----------------------------------------------------

/*

Senkron  : Sırayla çalışan işlem parçacıkları.
Asenkron : Eş zamanlı birden fazla iş yapmak için kullanılır.

1. function
2. function
3. function

Javascript SENKRON çalışan bir programlama dilidir...


ASENKRON ÇALIŞMASINA SEBEP OLAN DURUMLAR

1-Timing(Zaman)
2-Event(Olay)
3-HTTP İSTEKLERİ 
    -XmlHttpRequest
    -Fetch Api
    -Axios 


ASENKRONU YÖNETMEK İÇİN;

1-CALLBACK  -ES6 ÖNCESİ
2-PROMISE   - ES6 2015
3-ASYNC AWAİT ES7 hatırlıyorum.


*/




























// PROMISE THEN ZİNCİRİ

// then(){
//     the().{
//         then(){
//              console.log("sdfsfs")
//         }
//     }
// }


// async function hello(){
//     return "Hello World";
// }

// console.log(hello())
// hello()
// .then((res)=>console.log(res));


// document.querySelector("#button").addEventListener("click",()=>{
//    fetch("https://jsonplaceholder.typicode.com/posts/1")
//    .then((response) => response.json())
//    .then((post)=>{
//         console.log(post)    
//         fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//         .then((response) => response.json())
//         .then((comments)=> console.log(comments))
//    })
// })

// //Async Await ile yapılışı.
// document.querySelector("#button").addEventListener("click",async ()=>{
//  const post= await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
//  const comments =await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json();
//  console.log(post,comments)
// })





























