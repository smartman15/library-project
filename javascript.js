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

addBookToLibrary("Hajime Isayama", "Attack on Titan", 500, true);
addBookToLibrary("Marion Wheeler", "Antimemetics Division", 555, false);
addBookToLibrary("Caine", "The Amazing Digital Circus", 9, true);


// alert(myLibrary[0].id);
const bookList = document.querySelector('.book-list');
console.log(myLibrary);

function displayBooks(){
    for(let i = 0; i < myLibrary.length; i++){
        const author = document.createElement("div");
        author.textContent = `Author: ${myLibrary[i].author}`;
        bookList.appendChild(author);
        // console.log(`Author: ${myLibrary[i].author}`);
        // console.log(`Title: ${myLibrary[i].title}`);
        // console.log(`Number of pages: ${myLibrary[i].pages}`);
        // console.log(`Has been read: ${myLibrary[i].read}`);
        console.log('');
    }
}

displayBooks();

