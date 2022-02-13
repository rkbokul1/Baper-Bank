document.getElementById('deposite-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposite-input');
    const depositInputText = depositInput.value;
    const deposite = parseFloat(depositInputText);

    // add depositeTotal 
    const depositeTotal = document.getElementById('deposite-total');
    const TotalDeposite = depositeTotal.innerText;
    const total = parseFloat(TotalDeposite);
    const add = deposite + total;

    // add value 
    depositeTotal.innerText = add;
    depositInput.value = '';

    // add in balanced
    const balance = document.getElementById('balanced');
    const balanceText = balance.innerText;
    const totalBalance = parseFloat(balanceText);
    const totalB = totalBalance + deposite;

    balance.innerText = totalB;
});

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawText);

    // acces withdraw
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldText = withdrawField.innerText;
    const withdrawFieldAmount = parseFloat(withdrawFieldText);

    const addWithdraw = withdrawAmount + withdrawFieldAmount;
    withdrawField.innerText = addWithdraw;

    withdrawInput.value = '';

    // sub in balanced
    const balance = document.getElementById('balanced');
    const balanceText = balance.innerText;
    const totalBalance = parseFloat(balanceText);
    const totalB = totalBalance - addWithdraw;

    if(totalB <= 0){
        alert('Insufficient Blance');
    }

    balance.innerText = totalB;
    
    document.createElement
})