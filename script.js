function Book(name, author, pages, genre) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.genre = genre;
}

const library = [];

function pushBook() {
  let newBook = new Book(inputName, inputAuthor, inputPages, inputGenre);
  library.push(newBook);
}

let inputName;
let inputAuthor;
let inputGenre;
let inputPages;
