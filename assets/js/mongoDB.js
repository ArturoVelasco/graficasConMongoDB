var formulario = document.getElementsByClassName("fechaesperada");
var userName = document.getElementsByName("electrom");
var userEmail = document.getElementsByName("acustica");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("funciona");

    console.log(userName.value);
    console.log(userEmail.value);
});