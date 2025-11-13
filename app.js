/* ============toggle icon navbar================ */

let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navBar.classList.toggle('active');
}

/* ================validate =====================*/

function validateNumber(){
    let numberInput = document.getElementById("number").value

    if (!/^\d{10}$/.test(numberInput)){
        alert("mobile number must be 10 digits")
        return false
    }
    

    setTimeout(() => {
        document.getElementById('contactForm').reset()
    },1000)
    return true
}

/* ============scroll section active navbar================ */


let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');


const typed = new Typed('.multiple-text',{
    strings:['Frontend Developer','Web Designer','Python Developer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
})

