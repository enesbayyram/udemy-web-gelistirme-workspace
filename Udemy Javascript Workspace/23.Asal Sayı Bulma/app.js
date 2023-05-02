//ASAL SAYI BULMA UYGULAMASI

/**

  15    = 2 ,3 ,4 , 5 ,6 ,7

 */

//   let a = Math.floor(7.9);
//   console.log(a);


//15
let sayi = Number(prompt("Lütfen bir sayı giriniz :"));
let sonuc =true;
for(let i=2 ; i<= Math.floor(sayi/2) ; i++){
    if(sayi%i==0){
        //Asal degildir
        sonuc=false;
        break;
    }
}
if(sonuc){
    alert(sayi +" asaldır.");
}else{
    alert(sayi +" asal değildir!");
}