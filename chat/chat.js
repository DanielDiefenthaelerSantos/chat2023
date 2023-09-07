const form = document.querySelector("form");
const datetime_input = document.querySelector("form input[name='datetime']")
const submit = document.querySelector(".container form .submit");
const input = document.querySelector(".input input");
const user = document.querySelector("input[name='user']");
const perfil = document.querySelector("input[name='perfil']");

user.value = sessionStorage.getItem('user')
perfil.value = sessionStorage.getItem('perfil')

function enviar(){
    datetime_input.value = (new Date().toLocaleString('sv-SE').replace(',', ''));
    form.submit();
}

submit.addEventListener('click', () => {
    enviar();
})

document.addEventListener('keypress', (event) => {
    (event.key == "Enter")?enviar():"";
    (event.key == "¨")?window.location.href = "./PHP/actions/deletar.php":"";
})