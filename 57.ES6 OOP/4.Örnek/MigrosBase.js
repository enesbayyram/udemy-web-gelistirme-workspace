//MİGROS SANAL KART - ALIŞVERİŞ UYGULAMASI

class MigrosBase {
    indirimOrani = 15;
    constructor(firstName, lastName, kartiVarmi, urunler) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.kartiVarmi = kartiVarmi;
        this.urunler = urunler;
    }

    hesapla() {
       let odenecekTutar = 0.0;
        if (this.kartiVarmi) {
            //Kartı olanlara her bir ürün %20 indirimli
            if (this.urunleriKontrolEt(this.urunler)) {
                this.urunler.forEach((urun) => {
                    odenecekTutar += (urun.fiyat * (100 - this.indirimOrani)) / 100;
                })
            } else {
                prompt("En az 1 tane ürün girmelisiniz.")
            }


        } else {
            this.urunler.forEach((urun) => {
                odenecekTutar += urun.fiyat;
            })
        }
        return odenecekTutar;
    }

    urunleriKontrolEt(urunler) {
        if (urunler != null && urunler.length > 0) {
            return true;
        }
        return false;
    }

    getIsim(){
        return this.firstName;
    }
    getSoyisim(){
        return this.lastName;
    }

    
}