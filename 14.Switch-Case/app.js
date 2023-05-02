
// let sayi = prompt("Lütfen 1 ile 5 arasında bir sayı giriniz");

// switch(sayi) // "1"  "2"  "3"  "4"  "5"
// {
//     case "1" :
//         //kodlarınız
//         console.log("Girilen sayı 1'dir");
//     break;

//     case "2":
//         console.log("Girilen sayi 2 'dir");
//     break;

//     case "3":
//         console.log("Girilen sayı 3' tür");

//     break;
//     case "4":
//         console.log("Girilen sayı 4'dür");


//     case "5":
//         console.log("Girilen sayı 5'dir");
//     break;

//     default:
//         console.log("Girilen sayı 1 ile 5 arasında olmalıdır!");
//         break;
// }

let yeniSatir = "\r\n";
let metin = "1-Pazartesi" + yeniSatir
    + "2-Salı" + yeniSatir
    + "3-Çarşamba" + yeniSatir
    + "4-Perşembe" + yeniSatir
    + "5-Cuma" + yeniSatir
    + "6-Cumartesi" + yeniSatir
    + "7-Pazar"+yeniSatir
    +"Lütfen bir seçim yapınız";

let deger = prompt(metin);
switch (deger) {
    case "1":
        console.log("Pazartesi Günü");
        break;
    case "2":
        console.log("Salı Günü");
        break;

    case "3":
        console.log("Çarşamba Günü");
        break;

    case "4":
        console.log("Perşembe Günü");
        break;

    case "5":
        console.log("Cuma Günü");
        break;

    case "6":
        console.log("Cumartesi Günü");
        break;

    case "7":
        console.log("Pazar Günü");
        break;
    default:
        console.log("lütfen geçerli bir değer giriniz!");
}