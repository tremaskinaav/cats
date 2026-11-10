function checkPassword() {
    let password = document.getElementById("password").value;
    let result = document.getElementById("result");

    let haszagl = /[A-Z]/.test(password);
    let hasstroch = /[a-z]/.test(password);
    let hasnumber = /[0-9]/.test(password);
    let islong = password.length >= 8;
    let isshort = password.length < 8;

    
    
    else if (!hasstroch) {
        result.textContent = "добавьте буквы разных регистров";
    }
    else if (!hasnumber) {
        result.textContent = "добавьте цифры";
    }
    else if (isshort) {
        result.textContent = "пароль должен быть не менее 8 символов";
    }
    else if (islong) {
        result.textContent = "все хорошо";
    }
}