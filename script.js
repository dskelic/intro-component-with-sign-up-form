function Validation_data() {
    if(FirstName()) {
        if(LastName()) {
            if(Email()) {
                if(Password()) {
                    return true;
                }
            }
        }
    }
    return false;
}

function FirstName() {
    var first = document.getElementById("f")[0].value;
    var first_1 = first.length;

    if(first_1 == 0) {
        document.querySelector(".error-msg-f").style.display = 'block';
        document.querySelector(".error-f").style.visibility = 'visible';
        return false;
    }
        return true;
}

function LastName() {
    var last = document.getElementsByName("1")[0].value;
    var last_1 = last.length;

    if(last_1 == 0) {
        document.querySelector(".error-msg-1").style.display = 'block';
        document.querySelector(".error-1").style.visibility = 'visible';
        return false;
    }
        return true;
}

function Email() {
    var email = document.getElementsByName("e")[0];
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.value.match(mailformat)){
        return true;
    }
    document.querySelector(".error-msg-e").style.display = 'block';
    document.querySelector(".error-e").style.visibility = 'visible';
    return false;
}

function Password() {
    var pass = document.getElementsByName("p")[0].value;
    var pass_1 = pass.length;

    if(pass_1 == 0) {
        document.querySelector(".error-msg-p").style.display = 'block';
        document.querySelector(".error-p").style.visibility = 'visible';
        return false;
    }
    return true;
}