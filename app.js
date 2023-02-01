let myLibrary = []
const container = document.getElementById('#container')
const newButton = document.getElementById('addNew')
const form = document.getElementById('bookForm')
form.style.display = 'none'
newButton.addEventListener("click", addNew);
const submit = document.getElementById('submit')
submit.addEventListener("click", submitForm)
let bookCounter = 1

function submitForm() {
    
    let titleEntry = document.getElementById('title').value
    let authorEntry =  document.getElementById('author').value
    let pagesEntry = document.getElementById('pages').value
    let readEntry = document.getElementById('read').checked
    let book = new Book(titleEntry, authorEntry, pagesEntry, readEntry)
    addBookToLibrary(book);
    form.style.display = 'none'
    console.log(myLibrary)
}

function addNew(){
    form.style.display = 'inline-block'
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('pages').value = ''
    
    

}

function Book(title, author, pages, read){
    
    this.key = bookCounter
    bookCounter++
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
        book.dataset.book = x.key 
        let title = document.createElement('h4')
        let author = document.createElement('p')
        let pages = document.createElement('p')
        let read = document.createElement('div')
        read.classList.add('readbutt')
        let readTitle = document.createElement('p')
        let readButton = document.createElement('button')
        let del = document.createElement('button')
        del.textContent = 'Remove' 
        del.classList.add('remove')
        del.dataset.number = x.key
        del.addEventListener("click", function(e){
            const dele = document.querySelector('[data-book="' + x.key + '"]')
            for (let i in myLibrary) {
                if (myLibrary[i].key === x.key) {
                    myLibrary.splice(i, 1)
                }
            }       
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

        readButton.addEventListener("click", function(e){
            if(x.read === true) {
                x.read = false;
                readButton.textContent = 'no'
                readButton.classList.add('no')
                readButton.classList.remove('yes')
            } else {
                x.read = true;
                readButton.textContent = 'Yes'
                readButton.classList.add('yes')
                readButton.classList.remove('no')
            }
            console.log(x.read)
        })
        
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


