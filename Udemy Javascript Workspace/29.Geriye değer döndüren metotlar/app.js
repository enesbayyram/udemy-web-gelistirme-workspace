//Geriye değer döndüren metot tanımlamak --- return : geriye döndürmek


let donenDeger = cube(2);
// kareAl(donenDeger);


function kareAl(sayi){
    let sonuc = sayi*sayi;
    return sonuc;
}

/*
    1- Bir değeri metodun dışarısına cıkarmak , taşımak için kullanılır.
    2- Bir metodu bitiren anahtar kelimedir.

*/
function cube(sayi){
    
    let sonuc = sayi*sayi*sayi;
   let kareSonuc =  kareAl(sonuc);
    console.log(kareSonuc);
}




// function yazdir(){
//     console.log("Enes");
//     // void : geriye değer döndürmeyen demektir.
// }


