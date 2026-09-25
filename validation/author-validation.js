const form = document.querySelector('form');
const authorParagraph = document.querySelector('.author-field')
const authorField = document.getElementById('author');
let authorError = document.querySelector('#author + span');


authorField.addEventListener('input', (event) => {
    if(authorField.validity.valid){
        authorError.textContent = '';
    }

    else{
        showAuthorError();
    }
});


function showAuthorError(){
    if(authorField.validity.valueMissing){
        authorError.textContent = 'Author cannot be empty!';
    }
}

