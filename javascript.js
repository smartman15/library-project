const myLibrary = [];

function Book(author, title, pages, read){
    if(!new.target){
        throw Error("you gotta use the 'new' keyword bro")
    }
    
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}