function submithandler() {
    // Get the values of the username and password inputs
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Check if the username and password inputs are empty
    if (username === "" || password === "") {
      // If either input is empty, display an error message and prevent the form from submitting
        document.getElementById("error-message").innerHTML = "Please enter a username and password.";
        alert("Invalid input");
        return false;
    } else {
      // If both inputs have a value, clear any existing error message and allow the form to submit
        document.getElementById("error-message").innerHTML = "";
        return true;
    }
}