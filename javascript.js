let myLibrary = [];

function Book(author, title, pages, read) {
    if (!new.target) {
        throw Error("you gotta use the 'new' keyword bro")
    }

    this.id = self.crypto.randomUUID();
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary(author, title, pages, read) {
    const book = new Book(author, title, pages, read);
    myLibrary.push(book);
}

// create book prototype function to get read status
Book.prototype.getRead = function () {
    return this.read;
}
// create book prototype function to set read status
Book.prototype.setRead = function (status) {
    this.read = status;
}
// create book prototype function 'hasRead' that returns true if book has been read, false otherwise
Book.prototype.hasRead = function () {
    if (this.read === true) return true;
    else return false;
}

// create book prototype function 'toggleRead' that toggles read status
Book.prototype.toggleRead = function () {
    // if hasRead is true
    if (this.hasRead) this.setRead(false);
    // set read status to false

    // if hasRead is false
    if (!(this.hasRead)) this.setRead(true);
    // set read status to true
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

function displayBooks() {
    if (myLibrary.length != 0) {
        for (let i = 0; i < myLibrary.length; i++) {
            const book = myLibrary[i];
            const delBtn = document.createElement("button");
            delBtn.classList.add("del-button");
            delBtn.textContent = "Delete book";
            delBtn.addEventListener("click", () => {
                const bookId = delBtn.parentNode.dataset.id;
                removeBook(bookId);
                const parent = delBtn.parentNode;
                parent.remove();
            });



            // create button for read status with name "readBtn" with class "read-button"
            const readBtn = document.createElement("button");
            readBtn.classList.add("read-button");
            readBtn.textContent = "Toggle read status";
            // place beside the "delete book" button (NOTE: might have to make a container to put the two buttons side by side)


            



            const container = document.createElement("div");
            const bookNumber = document.createElement("div");
            const author = document.createElement("div");
            const title = document.createElement("div");
            const pages = document.createElement("div");
            const read = document.createElement("div");
            const lineBreak = document.createElement("br");
            // create container btnContainer
            const btnContainer = document.createElement("div");
            // set btnContainer class to "button-container"
            btnContainer.classList.add("button-container");
            // place delBtn in btnContainer
            btnContainer.appendChild(delBtn);
            // place readBtn in btnContainer
            btnContainer.append(readBtn);


            setContainerId(container, book.id);

            bookNumber.textContent = `Book ${i + 1}`;
            author.textContent = `Author: ${book.author}`;
            title.textContent = `Title: ${book.title}`;
            pages.textContent = `Number of pages: ${book.pages}`;
            read.textContent = `Has been read: ${book.read}`;

            // on pressing readBtn, change read status as so:
            readBtn.addEventListener("click", () => {
                

                // execute book prototype function 'toggleRead'
                book.toggleRead();

                read.textContent = `Has been read: ${book.getRead()}`;
                console.log(`read status: ${book.getRead()}`);
            });



            container.appendChild(bookNumber);
            // place btnContainer in container
            container.appendChild(btnContainer);
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

    else {
        const div = document.createElement("div");
        div.textContent = "Library is empty";
        bookList.append(div);
    }

}

function setContainerId(container, id) {
    container.dataset.id = id;
}

function clearBookList() {
    while (bookList.firstChild) {
        bookList.removeChild(bookList.lastChild);
    }
}

function removeBook(id) {
    myLibrary = myLibrary.filter((book) => book.id != id);
}







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

    if (dialog.returnValue === "default") {
        outputBox.value = "No return value";
    }
    else if (dialog.returnValue === "cancel") {
        outputBox.value = "Cancelled";
    }

    else {
        outputBox.value = "Book successfully added!";
        addBookToLibrary(author, title, pages, read);
        clearBookList();
        displayBooks();
    }
});

