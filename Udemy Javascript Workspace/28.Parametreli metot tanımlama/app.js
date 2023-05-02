//Parametreli metot tanımlamak

// function yazdir(isim,soyisim){
//     debugger;
//     console.log(isim + " " + soyisim);
// }

// debugger;
// yazdir("Enes","Bayram");
// yazdir("Ali","Cevher");



// cube(5);
// cube(3);

// function cube(sayi){
//     console.log(sayi*sayi*sayi);
// }
let yas = Number(prompt("Yaşınızı giriniz"));
kontrolEt(yas);



function kontrolEt(yas){
    if(yas>18){
        console.log("Ehliyeti alabilirsiniz");
    }else{
        console.log("Ehliyeti alamazsınız");
    }
}



