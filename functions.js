function validatePassword() {
    // Get the password values from forms
    var passwordFirst = document.getElementById("pass1").value;
    var passwordSecond = document.getElementById("pass2").value;

    // Check if the passwords match and if they are over 8 letters
    if (passwordFirst.length < 8) {
        alert("Length of the first password must be at least 8 letters!")
    } else if (passwordSecond.length < 8) {
        alert("Length of the second password must be at least 8 letters!")
    } else if (passwordFirst != passwordSecond) {
        alert("Two passwords don't match! Please type the same password twice.")
    } else {
        alert("Passwords match and are valid!")
    }
}

function changeColor() {
    // Border RGB Values
    var border_R = document.getElementById("border_R").value;
    var border_G = document.getElementById("border_G").value;
    var border_B = document.getElementById("border_B").value;

    // Border Width
    var border_width = document.getElementById("border_width").value;

    // Background RGB Values
    var bg_R = document.getElementById("bg_R").value;
    var bg_G = document.getElementById("bg_G").value;
    var bg_B = document.getElementById("bg_B").value;

    // Set Values
    var tag = document.getElementById("paragraph");
    tag.style.borderColor = `rgb(${border_R},${border_G},${border_B})`;
    tag.style.borderWidth = border_width
    tag.style.backgroundColor = `rgb(${bg_R},${bg_G},${bg_B})`;
}
