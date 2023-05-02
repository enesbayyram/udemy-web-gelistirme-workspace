//Elementleri Seçmek

const amountElement  =document.querySelector("#amount");
const firstCurrencyOptionElement = document.querySelector("#firstCurrencyOption");
const secondCurrencyOption = document.querySelector("#secondCurrencyOption");
const resultElement  =document.querySelector("#result");

const currency = new Currency();
runEventListeners();

function runEventListeners(){
    amountElement.addEventListener("input",exchange);
}

function exchange(){
    const firstCurrency = firstCurrencyOptionElement.options[firstCurrencyOptionElement.selectedIndex].textContent;

    const secondCurrency = secondCurrencyOption.options[secondCurrencyOption.selectedIndex].textContent;

    const amount = Number(amountElement.value.trim());

    currency.exchange(amount , firstCurrency,secondCurrency)
    .then((res)=> {
        resultElement.value = res.toFixed(3);
    })
    .catch(err => alert("Hata oluştu :"+err))

}
