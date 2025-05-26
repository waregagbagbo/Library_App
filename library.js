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

addBookToLibrary('Marco','Gab', 56,true)
addBookToLibrary('Jerry','Mark',57,false)
addBookToLibrary('Habits','Yello',57,false)
addBookToLibrary('Devil','Lorna',57,true)
addBookToLibrary('Laws','Chelsea',357,true)
// let us loop through the objects in the arr
const listBooks = () => {
    for(let book of myLibrary){
        console.log(book)
    }
}
listBooks()
