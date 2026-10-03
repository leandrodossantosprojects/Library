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
class Book {
  constructor(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this._read = false;
  }

  get read() {
    return this._read;
  }
  set read(v) {
    this._read = v;
  }
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
class Card extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    if (this.hasChildNodes()) return;
    this.innerHTML = `
      <div class="card">
        <div class="card-header">
          <p class="name"></p>
        </div>
        <div class="card-body">
          <p class="author"></p>
          <p class="pages"></p>
          <p class="read-status"></p>
          <div class="btn-container">
            <button class="btn read-btn">Toggle read</button>
            <button class="btn delete-btn">Delete</button>
          </div>
        </div>
      </div>
    `;
  }
}

  set data({ name, author, pages, read }) {
    this.querySelector(".name").textContent = name;
    this.querySelector(".author").textContent = `Author: ${author}`;
    this.querySelector(".pages").textContent = `Pages: ${pages}`;
    this.querySelector(".read-status").textContent =
      `Read: ${read === false ? "Not read yet" : "Already read"}`;
  }
}

customElements.define("book-card", Card);

function createLibrary() {
  library.forEach((book) => {
    const card = document.createElement("book-card");
    mainContent.appendChild(card);
    card.data = book;

    card.querySelector(".read-btn").addEventListener("click", () => {
      book.read = !book.read;
      card.querySelector(".read-status").textContent =
        `Read: ${book.read === false ? "Not read yet" : "Already read"}`;
    });

    card.querySelector(".delete-btn").addEventListener("click", () => {
      const index = library.indexOf(book);
      if (index > -1) library.splice(index, 1);
      card.remove();
    });
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
  createLibrary();
}
