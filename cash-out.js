document.getElementById('cash-out-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const money = document.getElementById('amount').value;
        const pin = document.getElementById('pin').value;
        if (pin === '1234') {
            const balance = document.getElementById('current-balance').innerText;
            const newBalance = parseFloat(balance) - parseFloat(money);
            document.getElementById('current-balance').innerText = newBalance;
        }
    })