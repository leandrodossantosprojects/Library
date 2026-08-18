//DOM elements management
const mainContainer = document.querySelector("#main-container");
const newBookBtn = document.querySelector("#new-book");
const modal = document.querySelector("#modal");
const bookName = document.querySelector("#bookName");
const bookAuthor = document.querySelector("#bookAuthor");
const bookPages = document.querySelector("#bookPages");
const bookGenre = document.querySelector("#bookGenre");
const addBtn = document.querySelector("#modal-btn");
const modalHeader = document.querySelector("#modal-header");
const modalBody = document.querySelector("#modal-body");
const requiredText = document.querySelector("#required-inputs");

//Book creation and library logic
function Book(name, author, pages, genre) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.genre = genre;
}

const library = [];

function submitBook() {
  let name = bookName.value;
  let author = bookAuthor.value;
  let pages = bookPages.value;
  let genre = bookGenre.value;

  let newBook = new Book(name, author, pages, genre);
  library.push(newBook);

  bookName.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  bookGenre.value = "";
  console.log(library);
}

newBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.showModal();
});

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  submitBook();
  modal.close();
});
