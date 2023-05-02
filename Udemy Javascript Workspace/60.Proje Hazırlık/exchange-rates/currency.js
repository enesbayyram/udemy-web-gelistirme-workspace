
class Currency {

    constructor() {
        this.url="https://api.freecurrencyapi.com/v1/latest?apikey=DwubsVWBQzrAI1rY529XjbZy1rny84BA3XaIujP0&base_currency=";
        
    }

    exchange(amount, firstCurrency, secondCurrency) {
        return new Promise((resolve, reject) => {
            fetch(`${this.url}${firstCurrency}`)
                .then(response => response.json())
                .then(currencyRates => {
                  const total = amount * Number(currencyRates.data[secondCurrency])
                  resolve(total)
                })
                .catch(err => {
                    reject(err);
                })
        })


    }
}