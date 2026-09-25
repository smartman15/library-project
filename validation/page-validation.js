const pageField = document.getElementById('pages');
let pageError = document.querySelector('#pages + span');

pageField.addEventListener('input', (event) => {
    if(pageField.validity.valid){
        pageError.textContent = '';
    }

    else{
        showPageError();
    }
})


function showPageError(){
    if(pageField.validity.valueMissing){
        pageError.textContent = "Page amount can't be empty!";
    }
}