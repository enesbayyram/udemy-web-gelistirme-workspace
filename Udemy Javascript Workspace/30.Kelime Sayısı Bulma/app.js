// Kelime sayısı bulma uygulaması


let metin ="Şuanda Yalova 'da Javascript eğitimi çekmekteyim.";

// let harf = prompt("Harfi giriniz");

// let sonuc = bul(harf);
// alert("Harf Sayısı : " + sonuc);

bul("a");
bul("e");
bul("s");


function bul(harf){
    let toplam =0;
    for(let i =0; i<metin.length ; i++){
        if(metin.charAt(i).toLowerCase()===harf.toLowerCase()){
            toplam+=1;
        }
    }
   console.log("Harf Sayısı : " + toplam);
}


