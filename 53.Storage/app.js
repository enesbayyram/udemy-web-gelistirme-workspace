//Session Storage

//Değer Ekleme
// sessionStorage.setItem("350","Enes");
// sessionStorage.setItem("216","Yasin");
// sessionStorage.setItem("154","Bilal");
// sessionStorage.setItem(552,37);

//Değer Silme
// sessionStorage.removeItem("154");

// let value =  sessionStorage.getItem("350");
// if(value ===null){
//     console.log("Değer bulunamadı.");
// }else{
//     console.log("Değer bulundu :",value);
// }


//Hepsini Silme
// sessionStorage.clear();


// let value = sessionStorage.getItem(552);
// console.log(typeof value);


//Session Storage - Array Yazdırma

// let names = ["Ali","Enes","Kübra","Adem","Ayşenur"];
// sessionStorage.setItem("names",JSON.stringify(names));

// let value = JSON.parse(sessionStorage.getItem("names"));
// value.forEach(function(name){
//     console.log(name);
// })

//Local Storage Kullanımı

//Değer Ekleme
// localStorage.setItem("motion1","Push up");
// localStorage.setItem("motion2","Barfix");
// localStorage.setItem("motion3","Burpee");
// localStorage.setItem("motion4","Squat");


//Değeri Almak

// let value = localStorage.getItem("motion1");
// console.log(value);

//Değer Silmek
// localStorage.removeItem("motion4");

//Tümünü Temizle
// localStorage.clear();

// localStorage.clear();
// let motions = ["Push up","Barfix","Burpee","Squat","Chin Up"];
// localStorage.setItem("motions",JSON.stringify(motions));

// let value =  JSON.parse(localStorage.getItem("motions"));

// value.forEach(function(motion){
//     console.log(motion);
// });