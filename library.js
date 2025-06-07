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
//addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, 'Read'); // add a book to the library


// function to display the books in the library
function displayBooks(){
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        return `ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Status: ${book.status}`;
    }
}

// We will create a form to add books to the library via DOM manipulation
const btn = document.getElementById('myForm');
const listings = document.querySelector('.library-listings');
// add an event listener to the form to handle the submission
myForm.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent the default form submission

    // get input values from the form
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const status = document.getElementById('status').value;

    // validate the input values by creating the book object
    addBookToLibrary(title, author, pages, status); // add the book to the library
});

// let us add display books via createElement in dom manipulation
const bookList = document.createElement('div');
bookList.classList.add('library-listings');
document.body.appendChild(bookList);

