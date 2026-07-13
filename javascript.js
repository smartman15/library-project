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

// create book prototype function 'toggleRead' that toggles read status
    // if hasRead is true
        // set read status to false

    // if hasRead is false
        // set read status to true


// create book prototype function to get read status
// create book prototype function to set read status
// create book prototype function 'hasRead' that returns true if book has been read, false otherwise



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
            const delBtn = document.createElement("button");
            delBtn.classList.add("del-button");
            delBtn.textContent = "Delete book";
            delBtn.addEventListener("click", () => {
                const bookId = delBtn.parentNode.dataset.id;
                removeBook(bookId);
                const parent = delBtn.parentNode;
                parent.remove();
            });

            

            // create button for read status with name "readBtn"
            // place beside the "delete book" button (NOTE: might have to make a container to put the two buttons side by side)
            

            // on pressing readBtn, change read status as so:
            // execute book prototype function 'toggleRead'

            // if the book read status is true (use hasRead book function)
                // update book read status display to false

            // if book read status is false
                // update book read status display to true

            


            const container = document.createElement("div");
            const bookNumber = document.createElement("div");
            const author = document.createElement("div");
            const title = document.createElement("div");
            const pages = document.createElement("div");
            const read = document.createElement("div");
            const lineBreak = document.createElement("br");
            // create container btnContainer
            // place delBtn in btnContainer
            // place readBtn in btnContainer


            setContainerId(container, myLibrary[i].id);

            bookNumber.textContent = `Book ${i + 1}`;
            author.textContent = `Author: ${myLibrary[i].author}`;
            title.textContent = `Title: ${myLibrary[i].title}`;
            pages.textContent = `Number of pages: ${myLibrary[i].pages}`;
            read.textContent = `Has been read: ${myLibrary[i].read}`;
            

            
            container.appendChild(bookNumber);
            // place btnContainer in container
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

