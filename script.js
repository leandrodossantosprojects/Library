//DOM elements management
const mainContainer = document.querySelector("#main-container");
const newBookBtn = document.querySelector("#new-book");
const modal = document.createElement("div");
const bookName = document.createElement("input");
const bookAuthor = document.createElement("input");
const bookPages = document.createElement("input");
const bookGenre = document.createElement("input");
const addBtn = document.createElement("button");
const modalHeader = document.createElement("div");
const modalBody = document.createElement("div");
const requiredText = document.createElement("p");

Object.assign(bookName, {
  type: "text",
  name: "bookName",
  placeholder: "Book name here...",
  class: "modal-input",
});

Object.assign(bookAuthor, {
  type: "text",
  name: "bookAuthor",
  placeholder: "Author name here...",
  class: "modal-input",
});

Object.assign(bookPages, {
  type: "number",
  name: "bookPages",
  placeholder: "Pages here...",
  class: "modal-input",
});

Object.assign(bookGenre, {
  type: "text",
  name: "bookGenre",
  placeholder: "Book genre here...",
  class: "modal-input",
});

Object.assign(addBtn, {
  class: "btn",
  textContent: "Add book",
});

Object.assign(modal, {
  id: "book-modal",
});

Object.assign(modalHeader, {
  id: "modal-header",
  textContent: "Add book to library",
});

Object.assign(modalBody, {
  id: "modal-body",
});

Object.assign(requiredText, {
  id: "requiredText",
});

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
}

newBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.appendChild(modalHeader);
  modal.appendChild(modalBody);
  modalBody.appendChild(bookName);
  modalBody.appendChild(bookAuthor);
  modalBody.appendChild(bookPages);
  modalBody.appendChild(bookGenre);
  modalBody.appendChild(requiredText);
  modalBody.appendChild(addBtn);
  mainContainer.appendChild(modal);

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("addBtn clicked");
  });
});
