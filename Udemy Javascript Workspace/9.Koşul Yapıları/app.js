// KOŞUL YAPILARI

// let not = 35;

// if(not>50){
//     console.log("Geçtiniz  , notunuz :" + not);
// }

// let yas = Number(prompt("Yaşınız :"));
// console.log(typeof yas);
// let para = Number(prompt("Bütçeniz : "));

// if(yas>=18 && para>=3000){
//     alert("Ehliyet Sınavına katılabilirsiniz");
// }else{
//     alert("Ehliyet sınavına katılamazsınız...");
// }


// ------------DERS ORTALAMASI BULMA------------

// vize1 %30 , vize2 %30  final %40

let vize1 = Number(prompt("Vize 1 notunuzu giriniz :"));
let vize2 = Number(prompt("Vize 2 notunuzu giriniz :"));

let final= Number(prompt("Final notunuzu giriniz :"));


let ortalama = (vize1*0.3) + (vize2*0.3) + (final*0.4);

if(ortalama>=60){
    alert("Dersten geçtiniz tebrikler :)) -->" + ortalama);
    console.log("Dersten geçtiniz tebrikler :))");
}else{
    alert("Kaldınız , geçmiş olsun :( -->" + ortalama);
    console.log("Kaldınız , geçmiş olsun :(");

}
