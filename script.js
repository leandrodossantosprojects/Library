//DOM elements management
const mainContainer = document.querySelector("#main-container");
const newBookBtn = document.querySelector("#new-book");
const mainContent = document.querySelector("#main-content");
const modal = document.querySelector("#modal");
const bookName = document.querySelector("#bookName");
const bookAuthor = document.querySelector("#bookAuthor");
const bookPages = document.querySelector("#bookPages");
const bookRead = document.querySelector("#bookGenre");
const addBtn = document.querySelector("#modal-btn");
const modalHeader = document.querySelector("#modal-header");
const modalBody = document.querySelector("#modal-body");
const requiredText = document.querySelector("#required-inputs");
const emptyLibrary = document.querySelector("#empty-library");

//Book creation and library logic
function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = "No read yet";
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
  let cardRead = document.createElement("p");
  let deleteBtn = document.createElement("button");
  cardHeader.appendChild(cardTitle);
  cardBody.appendChild(cardAuthor);
  cardBody.appendChild(cardPages);
  cardBody.appendChild(cardRead);
  cardBody.appendChild(deleteBtn);
  card.appendChild(cardHeader);
  card.appendChild(cardBody);
  card.appendChild(cardHeader);
  card.appendChild(cardBody);
  mainContent.appendChild(card);

  cardTitle.textContent = `${i.name}`;
  cardAuthor.textContent = `Author: ${i.author}`;
  cardPages.textContent = `Pages: ${i.pages}`;
  cardRead.textContent = `Genre: ${i.genre}`;

  card.className = "card";
  cardHeader.className = "card-header";
  cardBody.className = "card-body";

  deleteBtn.className = "btn delete-btn";
  deleteBtn.innerText = "Delete";

  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let title = cardTitle.innerText;
    let bookIndex = library.findIndex((book) => book.name === title);
    library.splice(bookIndex, 1);
    card.remove();
  });
}

function submitBook() {
  let name = bookName.value;
  let author = bookAuthor.value;
  let pages = bookPages.value;

  let newBook = new Book(name, author, pages);
  library.push(newBook);

  bookName.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  mainContent.innerHTML = "";
  for (let book of library) {
    insertData(book);
  }
}
