const fname = document.getElementById('fName')
const lname = document.getElementById('lName')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const fnameLabel = document.querySelector('.first_name label')
const lnameLabel = document.querySelector('.last_name label')
const emailLabel = document.querySelector('.email label')
const phoneLabel = document.querySelector('.phone label')
//const test = document.querySelector('.phone label')
//const test = document.querySelector('.phone label')




function checkFirstname() {
    if(fname.value.length > 0){
        fnameLabel.classList.add("active")
    }else{
        fnameLabel.classList.remove("active")
    }
    console.log(fname);
}

function checkLastname() {

    if(fname.value.length > 0){
        lnameLabel.classList.add("active")
    }else{
        lnameLabel.classList.remove("active")
    }
}

function checkEmail() {
    if(email.value.length > 0){
        emailLabel.classList.add("active")
    }else{
        emailLabel.classList.remove("active")
    }
}

function checkPhone() {

    if(phone.value.length > 0){
        phoneLabel.classList.add("active")
    }else{
        phoneLabel.classList.remove("active")
    }
}

// alert modal functions 

const sentPop = document.querySelector('.alert_pop_send')
const textArea = document.querySelector('.textArea')
const mailPop = document.querySelector('.alert_pop_send_email')
const failPop = document.querySelector('.alert_pop_send_fail')
const messSent = document.getElementById('sentMessage');

messSent.addEventListener('click', function (evt) {
    evt.preventDefault()

    setTimeout(function () {
        messSent.innerHTML = 'LOADING'
    
    },0)

    setTimeout(() => {

        if (fname.value.length == 0 && lname.value.length == 0 && email.value.length == 0 && phone.value.length == 0 && textArea.value.length == 0) {
            failPop.classList.add('alert_pop_fail_show');
        } else {
            sentPop.classList.add('alert_pop_show');
    
            setTimeout(function () {
                mailPop.classList.add('alert_pop_email_show');
            }, 2000);
        }

    }, 2000);

    
    setTimeout(function () {
        failPop.classList.remove('alert_pop_fail_show');
        sentPop.classList.remove('alert_pop_show');
        mailPop.classList.remove('alert_pop_email_show');
        messSent.textContent = 'SUBMIT'
    }, 4000);
});


const mobileIcon = document.querySelector('.mobile_Icon')
const nav_links = document.querySelector('.nav_links');

mobileIcon.addEventListener('click', function () {
    nav_links.classList.toggle('nav_show')
})