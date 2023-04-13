function submithandler() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username == "" && password == "") {
        document.getElementById("error-message").innerHTML = "Please enter a username and password.";
        return false;
    } else if (username === "") {
        document.getElementById("error-message").innerHTML = "Please enter a username.";
        return false;
    } else if (password === "") {
        document.getElementById("error-message").innerHTML = "Please enter a password";
        return false;
    } else {
        document.getElementById("error-message").innerHTML = "";
        document.getElementById('success-message').innerHTML = "Logging In";
        return true;
    }
}
