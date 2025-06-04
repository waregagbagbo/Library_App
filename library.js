const myLibrary = [];
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
// The method serves to create objects dynmically and store them on the go
function addBookToLibrary(title, author, pages,status){
    const createBook = new Book(title, author,pages,status) // create object
    myLibrary.push(createBook) // add objects created to the array.
    return createBook
}
console.log(addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, 'Read')); // add a book to the library
console.log(addBookToLibrary('1984', 'George Orwell', 328, 'Not Read')); // add another book to the library
// create a form to add books to the library

// function to display the books in the library
function displayBooks(){
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        //console.log(`ID: ${book.id}`); // Display the ID of the book
        return(`Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Status: ${book.status}`);
    }
}
displayBooks(); // display the books in the library

function openForm(){
    document.getElementById('myForm').style.display ="block"
}
function closeForm(){
    document.getElementById('myForm').style.display='none';
}
