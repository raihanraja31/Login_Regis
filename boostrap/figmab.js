//tombol disable

//getElemenNamaId
//getElemenByClassName
//querySelector
//querySelectorAll


let InputEmail = document.querySelector(".email");
let InputPassword = document.querySelector(".password");
let tombol = document.querySelector(".tombol");

tombol.disabled = true;

InputEmail.addEventListener("input", succes);
InputPassword.addEventListener("input",succes);

function succes(){
    if(InputEmail.value.length > 0 && InputPassword.value.length > 0){
        tombol.disabled = false;
    }else{
        tombol.disabled = true;
    }
}


//toogle password

const Password = document.querySelector(".password");
const togglePassword = document.querySelector("#toogle-password");

togglePassword.addEventListener("click", intip);

function intip(){
    //toogle type input
    const type = Password.getAttribute("type") === "password" ? "text" : "password";
    Password.setAttribute("type", type);

    //toogle icon
    togglePassword.classList.toggle("eye-slash");

};
