const myLibrary = [];

function Book(author, title, pages, read){
    if(!new.target){
        throw Error("you gotta use the 'new' keyword bro")
    }

    this.id = self.crypto.randomUUID();
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary(author, title, pages, read){
    const book = new Book(author, title, pages, read);
    myLibrary.push(book);
}

// const book1 = new Book("Hajime Isayama", "Attack on Titan", 500, true);
// const book2 = new Book("Marion Wheeler", "Antimemetics Division", 555, false);
// const book3 = new Book("Caine", "The Amazing Digital Circus", 9, true);

// addBookToLibrary("Hajime Isayama", "Attack on Titan", 500, true);
// addBookToLibrary("Marion Wheeler", "Antimemetics Division", 555, false);
// addBookToLibrary("Caine", "The Amazing Digital Circus", 9, true);


// alert(myLibrary[0].id);
const bookList = document.querySelector('.book-list');
console.log(myLibrary);

function displayBooks(){
    for(let i = 0; i < myLibrary.length; i++){
        const delBtn = document.createElement("button");
        delBtn.classList.add("del-button");

        const container = document.createElement("div");
        // const bookNumber = document.createElement("p");
        const author = document.createElement("div");
        const title = document.createElement("div");
        const pages = document.createElement("div");
        const read = document.createElement("div");
        const lineBreak = document.createElement("br");

        // create id attribute for container 
        // set the value to the book's id
        setContainerId(container, myLibrary[i].id);

        // bookNumber.textContent = `Book ${i+1}`;
        container.textContent = `Book ${i+1}`;
        author.textContent = `Author: ${myLibrary[i].author}`;
        title.textContent= `Title: ${myLibrary[i].title}`;
        pages.textContent = `Number of pages: ${myLibrary[i].pages}`;
        read.textContent = `Has been read: ${myLibrary[i].read}`;

        // container.appendChild(bookNumber);
        container.appendChild(delBtn);
        container.appendChild(author);
        container.appendChild(title);
        container.appendChild(pages);
        container.appendChild(read);
        container.appendChild(lineBreak);
        bookList.append(container);
        // console.log(`Author: ${myLibrary[i].author}`);
        // console.log(`Title: ${myLibrary[i].title}`);
        // console.log(`Number of pages: ${myLibrary[i].pages}`);
        // console.log(`Has been read: ${myLibrary[i].read}`);
        // console.log('');
    }
}

function setContainerId(container, id){
    container.dataset.id = id;
}

function clearBookList(){
    while(bookList.firstChild){
        bookList.removeChild(bookList.lastChild);
    }
}

function removeBook(index){
    // get the index of the book
    // remove the book at that index
}

// on clicking the remove button on the book's display
    // get the book's index
    // pass the index as the parameter value for removeBook()
    // update display using displayBooks()

displayBooks();

// select the dialog
const dialog = document.querySelector("#book-dialog")
// select the button that opens the dialog
const showDialog = document.querySelector(".add-book");
// select button that closes the dialog
const closeDialog = document.getElementById("closeDialog");
// select confirm button
const confirmBtn = document.getElementById("confirmBtn");
// select author, title, number of pages, read status input value
const authorValue = dialog.querySelector("#author");
const titleValue = dialog.querySelector("#title");
const pagesValue = dialog.querySelector("#pages");
const readValue = dialog.querySelector("#read-status");
// select output tag to display input value
const outputBox = document.querySelector("output");



// create function to open dialog
showDialog.addEventListener("click", () => {
    dialog.showModal();
});

// create function that gets the author input value and places it in output tag
confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close([authorValue.value, 
        titleValue.value,
        pagesValue.value,
        readValue.value
    ]);
})

// create function to close dialog using close button
dialog.addEventListener("close", (e) => {
    const bookValues = dialog.returnValue.split(",");
    const author = bookValues[0];
    const title = bookValues[1];
    const pages = bookValues[2];
    const read = bookValues[3];
    console.log(`book values: ${bookValues}`);
    console.log(pages);

    // outputBox.value = 
    // dialog.returnValue === "default" ?
    // "no return value" :
    // `Return value: ${dialog.returnValue[0]}`;

    if(dialog.returnValue === "default"){
        outputBox.value = "No return value";
    }
    else if(dialog.returnValue === "cancel"){
        outputBox.value = "Cancelled";
    }

    else{
        outputBox.value = "Book successfully added!";
        addBookToLibrary(author, title, pages, read);
        clearBookList();
        displayBooks();
    }
});

