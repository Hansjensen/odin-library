function book(title, author, pages, read){
    book.title = title;
    book.author = author;
    book.pages = pages;
    book.read = read;
    book.info = function () {
        return book.title, book.author, book.pages, book.read;
    }
};