function convert() {
    // Get input values
    let amount = document.getElementById('amount').value;
    let fromCurrency = document.getElementById('from').value;
    let toCurrency = document.getElementById('to').value;

    // Fetch exchange rate from API (you can use any reliable API)
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            // Calculate conversion
            let exchangeRate = data.rates[toCurrency];
            let result = amount * exchangeRate;

            // Display result
            document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
        })
        .catch(error => {
            console.log('Error fetching data', error);
            document.getElementById('result').innerText = 'Error fetching data';
        });
}
