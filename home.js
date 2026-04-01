document.getElementById('log-out-button').addEventListener('click', function () {
    window.location.href = 'payoo.html'
})

function activeButton(id) {
    const addMoney = document.getElementById(id)
    const addText = addMoney.querySelector('p')
    addMoney.style.backgroundColor = '#0874F280'
    addMoney.style.border = '2px solid #0874F280'
    addText.style.color = '#0874F2'
    addText.style.fontWeight = 'bold'
}
function removeButton(id) {
    const acButtons = document.getElementsByClassName('btn')

    for (const bt of acButtons) {
        bt.style.backgroundColor = ''
        bt.style.border = ''
        const text = bt.querySelector('p')
        text.style.color = ''
        text.style.fontWeight = ''

    }
    document.getElementById(id).style.display = 'block '
}
function activeForm(id) {
    const forms = document.getElementsByClassName('form')
    for (const form of forms) {
        form.style.display = 'none'
    }
    document.getElementById(id).style.display = 'block'
}
function showHistory(){
    const transContainer = document.getElementById('transContainer')
    transContainer.innerHTML = ''
    for (const data of transactionData) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="bg-red-300 rounded-md my-2">
            <div class="flex justify-between items-center p-4 rounded">
                <div class="flex items-center gap-4">
                    <div class="bg-gray-300 p-2 rounded-full">
                        <img class="m-auto" src="./assets/wallet1.png" alt="">
                    </div>
                    <div>
                        <h1 class="text-[16px] font-semibold text-[#080808]">${data.name}</h1>
                        <p class=" text-[12px] font-regular text-[#080808]">${data.date}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
        </div>
    `
        transContainer.appendChild(div)
    }
}
function dateTime(){
    const data = {
        name: 'Add Money',
        date: new Date().toLocaleString()
    }

    transactionData.push(data)
}
document.getElementById('active-add-money').addEventListener('click', function () {
    removeButton('active-add-money')
    activeButton('active-add-money')
    activeForm('add-money-form')
})
const account = '01912379742'
const pin = 88621
const transactionData = []
document.getElementById('add-money-button').addEventListener('click', function (e) {
    e.preventDefault()
    const originalBalance = document.getElementById('original-balance')
    const originalBal = parseInt(originalBalance.innerText)
    const selectBank = document.getElementById('select').value
    const addAccountNum = document.getElementById('account-number').value
    const addAmount = parseInt(document.getElementById('add-amount').value)
    const addPin = parseInt(document.getElementById('add-money-pin').value)
    if (selectBank !== 'Estern Bank' && selectBank !== 'Bank Asia' && selectBank !== 'Dhaka Bank') {
        alert('Please select a bank')
        return
    } else if (addAccountNum !== account) {
        alert('Please enter valid account number')
        return
    } else if (addAmount === 0 || addAmount === '') {
        alert('Enter a number')
    } else if (addPin !== pin) {
        alert('Incorrect Pin Number')
    } else {
        const newBalance = originalBal + addAmount
        originalBalance.innerText = newBalance
        alert('Add Money Successful')
        dateTime()
    }
})
document.getElementById('active-cash-out').addEventListener('click', function () {
    removeButton('active-cash-out')
    activeButton('active-cash-out')
    activeForm('cash-out-form')
})
document.getElementById('cash-out-button').addEventListener('click', function (e) {
    e.preventDefault()
    const originalBalance = document.getElementById('original-balance')
    const originalBal = parseInt(originalBalance.innerText)
    const agentNumber = document.getElementById('agent-number').value
    const cashAmount = parseInt(document.getElementById('cash-amount').value)
    const cashPin = parseInt(document.getElementById('cash-out-pin').value)
    if (agentNumber !== account) {
        alert('Please enter agent number')
        return
    } else if (isNaN(cashAmount)) {
        alert(`Invalid Amount`)
        return
    } else if (cashAmount > originalBal){
        alert(`You don't have money`)
        return
    }
    else if(cashAmount < 10){
        alert('The cash out amount must be greater than 10 Taka')
        return
    }else if(cashPin !== pin){
        alert('Incorrect Pin')
        return
    }else{
        const newBalance = originalBal - cashAmount
        originalBalance.innerText = newBalance
        alert('Cash Out Successful')
        dateTime()
    }
})
document.getElementById('active-transfer-money').addEventListener('click', function () {
    removeButton('active-transfer-money')
    activeButton('active-transfer-money')
    activeForm('transfer-money-form')

})
document.getElementById('send-money-button').addEventListener('click', function (e) {
    e.preventDefault()
    const originalBalance = document.getElementById('original-balance')
    const originalBal = parseInt(originalBalance.innerText)
    const userAccountNumber = document.getElementById('user-account-number').value
    const transferAmount = parseInt(document.getElementById('transfer-amount').value)
    const transferPin = parseInt(document.getElementById('transfer-money-pin').value)
    if (userAccountNumber !== account) {
        alert('Please enter agent number')
        return
    } else if (isNaN(transferAmount)) {
        alert(`Invalid Amount`)
        return
    } else if (transferAmount > originalBal) {
        alert(`You don't have money`)
        return
    }
    else if (transferAmount < 10) {
        alert('The cash out amount must be greater than 10 Taka')
        return
    } else if (transferPin !== pin) {
        alert('Incorrect Pin')
        return
    } else {
        const newBalance = originalBal - transferAmount
        originalBalance.innerText = newBalance
        alert('Send Money Successful')
        dateTime()
    }
})
document.getElementById('active-get-bonus').addEventListener('click', function () {
    removeButton('active-get-bonus')
    activeButton('active-get-bonus')
    activeForm('get-bonus-form')

})
document.getElementById('get-bonus-button').addEventListener('click', function (e) {
    e.preventDefault()
    const originalBalance = document.getElementById('original-balance')
    const originalBal = parseInt(originalBalance.innerText)
    const bonusCoupon = document.getElementById('coupon-number').value
    if(bonusCoupon === 'payooApp'){
        const newBalance = originalBal + 99
        originalBalance.innerText = newBalance
        alert('You get 99 Tk Bonus')
        dateTime()
    }else{
        alert('Invalid Coupon')
    }
})
document.getElementById('active-pay-bill').addEventListener('click', function () {
    removeButton('active-pay-bill')
    activeButton('active-pay-bill')
    activeForm('pay-bill-form')

})
document.getElementById('pay-bill-button').addEventListener('click', function (e) {
    e.preventDefault()
    const originalBalance = document.getElementById('original-balance')
    const originalBal = parseInt(originalBalance.innerText)
    const selectPay = document.getElementById('select-pay').value
    const billerAccount = document.getElementById('biller-account-number').value
    const payAmount = parseInt(document.getElementById('pay-amount').value)
    const payPin = parseInt(document.getElementById('pay-pin-number').value)
    if (selectPay !== 'WIFI Bill' && selectPay !== 'GAS Bill' && selectPay !== 'Water Bill'){
        alert('Select a bill')
        return
    }else if(billerAccount !== account){
        alert('Invalid account number')
        return
    } else if (payAmount > originalBal) {
        alert(`You don't have money`)
        return
    }else if(payPin !== pin){
        alert('Incorrect Pin')
    }else{
        const newBalance = originalBal - payAmount
        originalBalance.innerText = newBalance
        alert('Payment has been successful')
        dateTime()
    }
})
document.getElementById('active-transaction').addEventListener('click', function () {
    removeButton('active-transaction')
    activeButton('active-transaction')
    activeForm('transaction-history')
    showHistory()


})