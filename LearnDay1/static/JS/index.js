let username = document.getElementById('username');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');
let email = document.getElementById('email');
let usernameLabel = document.querySelector(".username label");
let passwordLabel = document.querySelector(".password label");
let password2Label = document.querySelector(".password2 label");
let emailLabel = document.querySelector(".email label");
let toastSuccess = document.querySelector('.toast_message_success')
let toastFail = document.querySelector('.toast_message_fail')
const loader = document.querySelector('.spinner_load')
const checkPass = document.getElementById('switch');


checkPass.addEventListener('click', () => {
    password.type === 'password' ? password.type = 'text' : password.type = 'password'
})


function checkUserValue() {
    if(username.value.length > 0){
        usernameLabel.classList.add("active")
    }else{
        usernameLabel.classList.remove("active")
    }
}

function checkEmailValue() {
    if(email.value.length > 0){
        emailLabel.classList.add("active")
    }else{
        emailLabel.classList.remove("active")
    }
}

function checkPasswordValue() {

    if(password.value.length > 0){
        passwordLabel.classList.add("active")
    }else{
        passwordLabel.classList.remove("active")
    }
}

function checkPassword2Value() {

    if(password2.value.length > 0){
        password2Label.classList.add("active")
    }else{
        password2Label.classList.remove("active")
    }
}

const login = document.getElementById('login')

// login.addEventListener('click', function(evt) {
//     evt.preventDefault()

//     loader.classList.add('loader')
//     login.textContent = ''

//     if (username.value === '' && password.value === '') {
//         setTimeout(function () {
//             loader.classList.add('loader');
    
//             setTimeout(function () {
//                 loader.classList.remove('loader');
    
//                 toastSuccess.classList.add('toast_message_active');
//                 login.textContent = 'LOGIN'; 

//                 setTimeout(function () {
//                     toastSuccess.classList.remove('toast_message_active');

//                     document.location.href = '/'
//                 }, 2000);
//             }, 3000);
//         }, 0); 
//     }
//     else{

//         setTimeout(function () {
//             loader.classList.remove('loader')
//             toastFail.classList.add('toast_message_active');
//             login.textContent = 'LOGIN'

//             setTimeout(function () {
//                 toastFail.classList.remove('toast_message_active');
//             }, 2000)
//         }, 3000);

        
        
//     }

// })

const loginError = document.querySelector('.login_error')
const registerError = document.querySelector('.register_error')


setTimeout(() => {
    loginError.style.display = 'none'
}, 5000)

setTimeout(() => {
    registerError.style.display = 'none'
}, 5000)

const back_home = document.querySelector('.back_home button')

back_home.addEventListener('click', () => {
    alert()
})