const titleParagraph = document.getElementById('title-field');
const titleField = document.getElementById('title');
let titleError = document.querySelector('#title + span');

titleField.addEventListener('input', (event) => {
    if(titleField.validity.valid){
        titleError.textContent = '';
    }

    else{
        showTitleError();
    }
})


function showTitleError(){
    if(titleField.validity.valueMissing){
        titleError.textContent = 'Title cannot be empty!';
    }
}

form.addEventListener('submit', (event) => {
    if(!titleField.validity.valid){
        event.preventDefault();
        showTitleError();
    }
})