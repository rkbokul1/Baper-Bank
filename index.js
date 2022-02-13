document.getElementById('login-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
   
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'sontan@bap.com' && userPassword == 'secret'){
        window.location.href = 'depowith.html';
    }else{
        alert('Invalid email or Password!');
    }
    
})

// handle deposite and withdraw
document.getElementById('deposite-button').addEventListener('click', function(){
    console.log('cliked')
})