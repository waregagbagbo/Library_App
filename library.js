// This is a simple library management system that allows you to add, display, and delete books.
// It uses a constructor function to create book objects and stores them in an array.

const myLibrary = []; // array to store book object created, shelf of books

// create a constructor object
class Book{
    constructor(title, author,pages,status){
        // grab the object properties
        this.id = crypto.randomUUID(); // generate a unique id for each book
        // properties of the book object
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status; // read or Not Read
    }
    // create a method to toggle the status of the book
    toggleStatus() {
        this.status = this.status === 'Read' ? 'Not Read' : 'Read';
    }
}

// The method serves to create objects dynmically and store them on the go
// It takes in the book details as parameters and creates a new book object.
// It then adds the created book object to the myLibrary array.

function addBook(title, author, pages,status){
    const createBook = new Book(title, author,pages,status) // create object
    myLibrary.push(createBook) // add objects created to the array.
    return createBook
}

// We will create a form to add books to the library via DOM manipulation
const btn = document.getElementById('myForm');
// add an event listener to the form to handle the submission
btn.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent the default form submission/ reload the page

    // get input values from the form
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const status = document.getElementById('status').value;

    // validate the input values by creating the book object
    addBook(title, author, pages, status); // add the book to the library
    bookDisplay(); // display the books in the library on the page

});

// let us display the books in the library on the page
// using the existing class in Html and bookDisplay function

function bookDisplay() {
    const bookList = document.getElementById('library-listings');
    bookList.innerHTML = ''; // clear the list before displaying

    // iterate through the myLibrary array and create list items for each book
    myLibrary.forEach(book => {
        const bookItem = document.createElement('li');
        bookItem.textContent = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Status: ${book.status}`;

        // create a delete button for each book
        // The button will remove the book from the library when clicked
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        //deleteBtn.setAttribute('data-index', book.id);
        deleteBtn.textContent = 'Remove Book';

        // Add event listener to the delete button
        deleteBtn.addEventListener('click', () => {
            deleteBook(book.id); // call the deleteBook function with the book id
        });

        // Toggle Status button
        const toggleBtn = document.createElement('button');
        toggleBtn.classList.add('toggle-btn');
        toggleBtn.textContent = 'Toggle Status';
        toggleBtn.addEventListener('click', () => {
            book.toggleStatus();  // toggle the read status
            bookDisplay();        // refresh the list
        });

        // Append buttons
        bookItem.appendChild(deleteBtn);
        bookItem.appendChild(toggleBtn);
        bookList.appendChild(bookItem);
    });
}

// Function to delete a book from the library
function deleteBook(id) {
    const bookIndex = myLibrary.findIndex(book => book.id === id);
    if (bookIndex !== -1) {
        myLibrary.splice(bookIndex, 1);
        bookDisplay();
    }
}