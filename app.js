let myLibrary = []
const container = document.getElementById('#container')
    

function Book(title, author, pages, read){
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return this.title, this.author, this.pages, this.read;
    }
    
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function libraryUpdate(){


    for (let i in myLibrary) {
        let book = document.createElement('div')
        book.classList.add('bookcard')
        let title = document.createElement('h4')
        let author = document.createElement('p')
        let pages = document.createElement('p')
        let read = document.createElement('div')
        read.classList.add('readbutt')
        let readTitle = document.createElement('p')
        let readButton = document.createElement('button')
        let del = document.createElement('button')
        del.textContent = 'Remove'

        //add card information.
        title.textContent = 'Title:  ' + myLibrary[i].title
        author.textContent='Author:  ' + myLibrary[i].author
        pages.textContent='Pages:  ' + myLibrary[i].pages
        readTitle.textContent = "Read? "
        if (myLibrary[i].read) {
            readButton.textContent = 'Yes'
            readButton.classList.add('yes')
        } else {
            readButton.textContent = 'no'
            readButton.classList.add('no')
        }
        
        read.appendChild(readTitle)
        read.appendChild(readButton)
        book.appendChild(title)
        book.appendChild(author)
        book.appendChild(pages)
        book.appendChild(read)
        book.appendChild(del)
        container.appendChild(book);
        
        
        
       
    }
}


let pirates = new Book("pirates of the caribean", "paul", 876, true);
let dog = new Book("dog", "woof", 546, true );
myLibrary.push(pirates)
myLibrary.push(dog)
libraryUpdate();
console.log(myLibrary)
