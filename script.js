function checkPassword(form) {
    username = form.username.value;
    pwd = form.pwd.value;
    pcom = document.querySelector('#pcom');


    if (username =='') 
        alert('Please enter password');
    else if (pwd =='')
        alert('please enter confirm password');
    else if(username !=pwd) {
        pcom.textContent += "password ain't match"
        return false;
    }
    else {
        alert('password match')
        return true;
    }
}