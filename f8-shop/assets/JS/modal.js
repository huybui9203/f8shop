const modal = document.getElementById('modal');
const modal_overlay = document.getElementById('modal__overlay');
const register = document.getElementById('register-form');
const login = document.getElementById('login-form'); 

function showModal(){
    modal.style.display = 'flex';
}

function HiddenModal(){
    modal.style.display = 'none';
}



function showRegisterForm(){
    showModal();
    register.style.display = 'block';

   
   
}

function HiddenRegisterForm(){
    HiddenModal();
    register.style.display = 'none';
    
}

function showLoginForm(){
    showModal();
    login.style.display = 'block';
 
}

function HiddenLoginForm(){
    HiddenModal();
    login.style.display = 'none';

}

const sl = document.querySelector('.header__search-select-lable');
// console.log(sl.innerHTML);

const items = document.querySelector('.header__search-options');
const listitem = Array.from(document.querySelectorAll('.header__search-options-item'));

for (x in listitem) {
    
}





