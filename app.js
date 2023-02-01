let myLibrary = []
const container = document.getElementById('#container')
const newButton = document.getElementById('addNew')
const form = document.getElementById('bookForm')
form.style.display = 'none'
newButton.addEventListener("click", addNew);
let titleEntry = document.getElementById('title')
let authorEntry =  document.getElementById('author')
let pagesEntry = document.getElementById('pages')
let readEntry = document.getElementById('read')
const submit = document.getElementById('submit')
submit.addEventListener("click", submitForm)

function submitForm() {
    
    let titleEntry = document.getElementById('title').value
    let authorEntry =  document.getElementById('author').value
    let pagesEntry = document.getElementById('pages').value
    let readEntry = document.getElementById('read').value
    let book = new Book(titleEntry, authorEntry, pagesEntry, readEntry)
    addBookToLibrary(book);
    form.style.display = 'none'
    titleEntry.textContent = ""
    authorEntry.textContent = ""
    pagesEntry.textContent = ""
    readEntry.textContent = ""
}

function addNew(){
    form.style.display = 'inline-block'
}

function Book(title, author, pages, read){
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return this.title, this.author, this.pages, this.read;
    }
    
}

function addBookToLibrary(x){
    myLibrary.push(x);
    let book = document.createElement('div')
        book.classList.add('bookcard')
        book.dataset.book = myLibrary.length 
        console.log(typeof book.dataset.book)
        let title = document.createElement('h4')
        let author = document.createElement('p')
        let pages = document.createElement('p')
        let read = document.createElement('div')
        read.classList.add('readbutt')
        let readTitle = document.createElement('p')
        let readButton = document.createElement('button')
        let del = document.createElement('button')
        del.textContent = 'Remove'
        let datanum = myLibrary.length 
        del.dataset.number = datanum
        del.addEventListener("click", function(e){
            const dele = document.querySelector('[data-book="' + datanum + '"]')
            dele.remove();
        })
        title.textContent = 'Title:  ' + x.title
        author.textContent='Author:  ' + x.author
        pages.textContent='Pages:  ' + x.pages
        readTitle.textContent = "Read? "
        if (x.read === true) {
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

function libraryUpdate(){


    for (let i in myLibrary) {

        let book = document.createElement('div')
        book.classList.add('bookcard')
        book.dataset.book = i + 1
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
        if (myLibrary[i].read === true) {
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


