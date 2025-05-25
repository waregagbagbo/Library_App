// create a constructor object
class Book{
    constructor(title, author,pages,status){
        // grab the object properties
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }

}
// create an object instance
const books = new Book('Atomic Habits','Musk',345,'Read')

// script for adding/create a book grabbing the parameters of the object
function addBookToLibrary(){

}
const myLibrary = [];
myLibrary.push(books)
console.log(myLibrary)
