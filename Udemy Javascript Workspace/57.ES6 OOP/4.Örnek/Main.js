
let mesaj = `
Migros'a hoşgeldiniz
Money kartınız var mı ?
1-Evet
2-Hayır
`;

let urunler = [
    {
        urunIsmi: "Bitter Çikolata",
        fiyat: 12
    },
    {
        urunIsmi: "Mercimek",
        fiyat: 22
    },
    {
        urunIsmi: "Süt",
        fiyat: 7
    }

]


let sonuc = confirm(mesaj);
if (sonuc) {
    let isim, soyisim;
    isim = prompt("Adınızı giriniz");
    soyisim = prompt("Soyadınızı giriniz");

    const musteri = new Musteri(isim, soyisim, sonuc, urunler);

    alert(
        `
        Müşteri Bilgisi : ${musteri.getIsim()} ${musteri.getSoyisim()}
        Ödenecek Tutar :  ${musteri.hesapla()}`)
    
} else {
    const musteri = new Musteri("", "", sonuc, urunler)
    alert(`Ödenecek Tutar :  ${musteri.hesapla()}`)
}

