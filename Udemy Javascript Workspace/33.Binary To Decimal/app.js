//Binary To Decimal Conversion (İkilik sayıdan 10 luk sayıya çevirmek)



let sonuc = topla(5 ,10);
console.log("Sonuç :" + sonuc);




let binary = "10110010101";

function convertBinaryToDecimal(binary){
    let toplam =0;
    let ust =0;

    for(let i=binary.length-1 ; i>=0 ; i--){
        if(Number(binary.charAt(i))!=0){
            toplam+= Number(binary.charAt(i)) * Math.pow(2,ust);
        }
        ust++;
    }

    console.log("Sonuç : " + toplam);
}
// convertBinaryToDecimal(binary);