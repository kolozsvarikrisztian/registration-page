function ell(){
    pattern = /[0-9]/;
    password = document.getElementById("psw").value;
    result = password.match(pattern);
    if (result){
        alert(result);
    }
    else {
        alert("nincs");
    }
    
}