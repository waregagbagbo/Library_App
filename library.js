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
function addBook(title, author, pages,status){
    const createBook = new Book(title, author,pages,status) // create object
    myLibrary.push(createBook) // add objects created to the array.
    return createBook
}
//console.log(addBook('The Hobbit', 'J.R.R. Tolkien', 310, 'Read')); // add a book to the library


// function to display the books in the library
/*function displayBooks(){
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        return `ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Status: ${book.status}`;
    }
}
console.log(displayBooks()); // display the books in the library*/


// We will create a form to add books to the library via DOM manipulation
const btn = document.getElementById('myForm');
// add an event listener to the form to handle the submission
btn.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent the default form submission

    // get input values from the form
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const status = document.getElementById('status').value;

    // validate the input values by creating the book object
    addBook(title, author, pages, status); // add the book to the library
    bookDisplay(); // display the books in the library
   //btn.reset(); // reset the form after submission
});

// let us display the books in the library on the page
// using the existing class in Html and and bookDisplay function
function bookDisplay() {
    const bookList = document.querySelector('.library-listings');
    bookList.innerHTML = ''; // clear the list before displaying
    // iterate through the myLibrary array and create list items for each book
    myLibrary.forEach(book => {
        const bookItem = document.createElement('li');
        bookItem.textContent = `ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Status: ${book.status}`;
        bookList.appendChild(bookItem);
    });
}
