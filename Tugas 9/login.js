function validationLogin() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");

    if (username.value === "wildanfrananda" && password.value === "admin") {
        alert("success");
    } else {
        alert("username or password is wrong")
    }
}