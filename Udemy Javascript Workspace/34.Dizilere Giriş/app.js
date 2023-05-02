//DİZİLERE BAŞLAYALIM

// ALT GR + 8 ve 9
//ArrayIndexOutOFBoundException
// let sayilar = [0,1,2,3,4,5,"Enes",7,8,9, "Ali"];
// sayilar[sayilar.length-1]="Mehmet";
// console.log(sayilar[10]);


// let isimler = ["Enes","Kübra","Bilal","Yusuf"];
// isimler[2] = "Yakup";
// console.log(isimler);


// let karisikDizi = [1,"Enes",5.7,true,null,undefined];
// console.log(karisikDizi[3]);


// let isimler = new Array("Enes","Ahmet");
// console.log(isimler);

// let isimler = [];

// function topla() {
//     console.log(15);
// }

// let personel1 = {
//     isim: "Enes",
//     soyisim: "Bayram",
//     yas: 23,
// }

// let personel2 = {
//     isim: "Ali",
//     soyisim: "Günel",
//     yas: 26,
// }

// let rakamlar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// let personelArray = [personel1, personel2, 1, true, rakamlar];
// console.log(personelArray[4][5]);
// console.log(personelArray[0].isim)

// personelArray[4]();

// let dizi1 = ["Enes","Ali"];
// let dizi2 = new Array("Enes","Ali");

// //number , string , boolean , undefined null , object(array)

// console.log(typeof dizi2);


//For döngüsü , While döng  . , do while  , foreach

//foreach : dizilerde kullanıyoruz.

//FOREACH DÖNGÜSÜ

let isimler = ["Enes","Yakup","Bilal","Kübra","Ayşenur","Adem"];
let sayac = 0;
while (sayac<isimler.length){
    console.log(isimler[sayac]);
    sayac++;
}


// for(let i=0 ; i<isimler.length ; i++){
//     console.log(isimler[i]);
// }

// isimler.forEach(function(isim){
//     console.log(isim);
// });

