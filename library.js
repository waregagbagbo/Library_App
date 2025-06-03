const bookListings = document.getElementById('bookList');
const formSubmit = document.getElementById('myForm');

// Function to handle form submission
formSubmit.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const status = document.getElementById('read').value; // Get the status checkbox value
        addBookToLibrary(title, author, pages,status); // Add book to library
        displayBooks(); // Display updated book listings
        closeForm(); // Close the form
        //formSubmit.reset(); // Reset the form fields
    
});

const myLibrary = [];
// create a constructor object
class Book{
    constructor(title, author,pages,status){
        // grab the object properties
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status
    }
}
// The method serves to create objects dynmically and store them on the go
function addBookToLibrary(title, author, pages,status){
    const createBook = new Book(title, author,pages,status) // create object
    myLibrary.push(createBook) // add objects created to the array.
    return createBook
}

// function to display the books in the library
function displayBooks(){
    bookListings.innerHTML = ''; // clear the book listings
    myLibrary.forEach((book) => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Status: ${book.status ? 'Read' : 'Not Read'}</p>
            <button class="remove-btn" onclick="removeBook('${book.id}')">Remove</button>
        `;
        bookListings.appendChild(bookItem);
    });
}

function openForm(){
    document.getElementById('myForm').style.display ="block"
}
function closeForm(){
    document.getElementById('myForm').style.display='none';
}