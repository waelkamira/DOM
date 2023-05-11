let inputFeild = document.querySelector('.input-feild');
let submit = document.querySelector('.submit');
let paragraph = document.querySelector('.paragraph');
let donateBtns = document.querySelectorAll('.donate');
let totalDonated = document.querySelector('.total--donated');
let inputCustom = document.querySelector('.input-custom');
let card = document.querySelector('.hidden');
let myName = document.getElementById('name');
let subscripeBtn = document.querySelector('.subscripe');
let blur = document.querySelector('.blur');

paragraph.textContent = ' ';
let donate = 0;

// let inputValue = 0;



totalDonated.textContent = donate;

window.onload = function (){
    card.classList.remove('hidden');
    myName.focus();
    
    subscripeBtn.addEventListener('click', function (){
    card.classList.add('hidden');
    blur.classList.remove('blur');
    })
}


submit.addEventListener('click', function (){ 
    paragraph.textContent+= '\n' + '-';
    paragraph.textContent = paragraph.textContent + ' ' + inputFeild.value;
    inputFeild.value = '';
})

for (let i = 0; i < donateBtns.length; i++) {
    donateBtns[i].addEventListener('click', function () {
        donate = donate + Number(donateBtns[i].textContent) + Number(inputCustom.value);
        totalDonated.textContent = donate;

    })
}


inputCustom.addEventListener('input', function (){
    const myTimeout = setTimeout(removeValue, 2000);
})

function removeValue () {
    donate = donate + Number(inputCustom.value);
    totalDonated.textContent = donate;
    inputCustom.value = '';
}






