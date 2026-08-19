//DOM elements management
const mainContainer = document.querySelector("#main-container");
const newBookBtn = document.querySelector("#new-book");
const mainContent = document.querySelector("#main-content");
const modal = document.querySelector("#modal");
const bookName = document.querySelector("#bookName");
const bookAuthor = document.querySelector("#bookAuthor");
const bookPages = document.querySelector("#bookPages");
const bookGenre = document.querySelector("#bookGenre");
const addBtn = document.querySelector("#modal-btn");
const modalHeader = document.querySelector("#modal-header");
const modalBody = document.querySelector("#modal-body");
const requiredText = document.querySelector("#required-inputs");
const emptyLibrary = document.querySelector("#empty-library");

//Book creation and library logic
function Book(name, author, pages, genre) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.genre = genre;
}

const library = [];

newBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.showModal();
});

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  submitBook();
  modal.close();

  if (library.length > 0) {
    emptyLibrary.remove();
  }
});

// Render cards in container

function insertData(i) {
  let card = document.createElement("div");
  let cardHeader = document.createElement("div");
  let cardBody = document.createElement("div");
  let cardTitle = document.createElement("p");
  let cardAuthor = document.createElement("p");
  let cardPages = document.createElement("p");
  let cardGenre = document.createElement("p");
  let deleteBtn = document.createElement("button");
  cardHeader.appendChild(cardTitle);
  cardBody.appendChild(cardAuthor);
  cardBody.appendChild(cardPages);
  cardBody.appendChild(cardGenre);
  cardBody.appendChild(deleteBtn);
  card.appendChild(cardHeader);
  card.appendChild(cardBody);
  card.appendChild(cardHeader);
  card.appendChild(cardBody);
  mainContent.appendChild(card);

  cardTitle.textContent = `${i.name}`;
  cardAuthor.textContent = `Author: ${i.author}`;
  cardPages.textContent = `Pages: ${i.pages}`;
  cardGenre.textContent = `Genre: ${i.genre}`;

  card.className = "card";
  cardHeader.className = "card-header";
  cardBody.className = "card-body";

  deleteBtn.className = "btn delete-btn";
  deleteBtn.innerText = "Delete";
}

function appendCard() {
  let lastIndex = library.length - 1;
  insertData(library.at(lastIndex));
}

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
  appendCard();
}
