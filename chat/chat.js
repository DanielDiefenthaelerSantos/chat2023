const form = document.querySelector("form");
const submit = document.querySelector(".container form .submit");
const input = document.querySelector(".input input");
const user = document.querySelector("input[name='user']");
const perfil = document.querySelector("input[name='perfil']");


const noti = new Audio('../audio/notificacao.mp3');

user.value = sessionStorage.getItem('user')
perfil.value = (sessionStorage.perfil == null)?"default":sessionStorage.perfil;
input.focus();

if (sessionStorage.getItem('theme') == 'dark') {
    document.body.classList.toggle('dark');
} else {
    document.body.classList.remove('dark');
}

submit.addEventListener('click', () => {
    enviar();
})

document.addEventListener('keypress', (event) => {
    (event.key == "Enter")?enviar():"";
    (event.key == "¨")?window.location.href = "./PHP/actions/deletar.php":"";
<<<<<<< HEAD
=======
})

function enviar(){
    form.submit();
}

/** 
window.addEventListener('blur', function(){
    audio.play(notificacao.mp3);
})
*/

window.addEventListener('focus', function(){
    document.title = "Whatsapp premium"
>>>>>>> 9ae333ea2efe596f376f6d61020a087f4e0178b1
})