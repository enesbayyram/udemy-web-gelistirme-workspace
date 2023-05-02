class Musteri extends MigrosBase{
    constructor(firstName , lastName , kartiVarmi, urunler){
       super(firstName,lastName,kartiVarmi,urunler)
    }

    hesapla(){
       return super.hesapla();
    }

}