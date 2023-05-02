// 1 den 10 a kadar yazdıralım

// let sayac =1;

// do{
//     console.log(sayac);
//     sayac++;
// }while(sayac<=10);


// let yas = 23;

// do{
//     console.log("Ehliyeti alabilirsiniz");

    
// }while(yas>=25);


//1 den 20 ye kadar olan tek sayıların toplamınıı bululaım.


let sayac = 1;
let toplam =0;
do{
    if(sayac%2==1){
        toplam+=sayac;
    }
    sayac++;
}while(sayac<=20);
console.log("Toplam :" , toplam);