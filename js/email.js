function sendMail (){
    let parms = {
        full_name :  document.getElementById("full_name").value,
        email :  document.getElementById("email").value, 
        subject :  document.getElementById("subject").value,
        message :  document.getElementById("message").value,
    }
    emailjs.sendForm("service_7wn1hhc","template_tg9504m",parms)