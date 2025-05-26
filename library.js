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

// let me create some objects to test this functionliity

//console.log(addBookToLibrary('Marco','Gab', 56,true))
addBookToLibrary('Jerry','Mark',57,false)

