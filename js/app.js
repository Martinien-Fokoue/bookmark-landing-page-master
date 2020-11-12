let questions = document.querySelectorAll('.link__question');

// Dérouler et réduire les informations sur la section des questions
for (let i = 0; i < questions.length; i++) {
    const question = questions[i];

    question.addEventListener('click', function(e){

        let arrowDown = this.querySelector('.arrow_down');
        let hideText = this.parentNode.querySelector('.hide__text');
        
        arrowDown.classList.toggle('active');        
        hideText.classList.toggle('active');
    });
}

// Vérification de l'emai
let emailInput = document.querySelector('.email'),
    fieldInput = document.querySelector('.field__input'),
    form = document.querySelector('.form__contact'),
    errorText = document.querySelector('.error__text'),
    errorSvg = document.querySelector('.error__svg');


form.addEventListener('submit', function(e){
    e.preventDefault();
    if (emailInput.value.length === 0) {
        errorText.innerHTML = 'This field can\'t be empty';
        errorText.classList.add('active__error');
        errorSvg.classList.add('active__error');
        fieldInput.classList.add('active__error');
        emailInput.placeholder = 'example@gmail/com';


    }else { // Une valeur estbien entrée et on vérifie si elle correspond à une email valide

        let validEmail = /^[\w\d._-]+@[\w\d._-]+[\.][\w\d]{2,6}$/;
            if (!validEmail.test(emailInput.value)) {
                errorText.innerHTML = 'whoops, make sure it\'s an email';
                errorText.classList.add('active__error');
                errorSvg.classList.add('active__error');
                fieldInput.classList.add('active__error');
                emailInput.placeholder = 'example@gmail/com';
            }
    }
});

emailInput.addEventListener('focus', function(e){
    if(errorText.classList.contains('active__error')){
        errorText.classList.remove('active__error');
        errorSvg.classList.remove('active__error');
        fieldInput.classList.remove('active__error');
        emailInput.placeholder = 'Enter your email address';
    }
});