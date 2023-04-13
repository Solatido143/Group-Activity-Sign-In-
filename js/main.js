function submithandler() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "" || password === "") {
        document.getElementById("error-message").innerHTML = "Please enter a username and password.";
        alert("Invalid input");
        return false;
    } else {
        document.getElementById("error-message").innerHTML = "";
        return true;
    }
}
