const pinNumber = 88621
const mobileNumber = '01912379742'

document.getElementById('login-button').addEventListener('click', function(e){
    e.preventDefault()
    const pin = parseInt(document.getElementById('pin').value) 
    const number = document.getElementById('number').value
    if(mobileNumber !== number){
        alert('Please enter mobile number')
        return
    }else if(pinNumber !== pin){
        alert('Please enter valid pin number')
        return
    }else{
        window.location.href = 'home.html'
    }
})
