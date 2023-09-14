function CheckEmail(){
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;

    if(email.includes("@")){
        alert("Ihre Anfrage wurde gesendet");
    }
    else if(email.length < 6){
        alert("Ihre E-Mail Adresse ist zu kurz");
    }
    else {
        alert("E-Mail Adresse nicht gültig");
    }
    email.innerHTML = "";
    name.innerHTML = "";
}