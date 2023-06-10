class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

class Library {
  constructor() {
    this.myLibrary = [];
  }

  createBook(title, author, pages, read) {
    return new Book(title, author, pages, read);
  }

  addBook(title, author, pages, read) {
    let newBook = this.createBook(title, author, pages, read);
    this.myLibrary.push(newBook);
    this.displayBooks();
  }

  displayBooks() {
    const booksGrid = document.getElementById('library');
    booksGrid.innerHTML = '';

    for (let i = 0; i < this.myLibrary.length; i++) {
      const book = this.myLibrary[i];
      const bookCard = document.createElement('div');
      bookCard.style.border = '1px solid black';

      const title = document.createElement('p');
      const author = document.createElement('p');
      const pages = document.createElement('p');
      const read = document.createElement('p');

      title.textContent = `Title: ${book.title}`;
      author.textContent = `Author: ${book.author}`;
      pages.textContent = `Pages: ${book.pages}`;
      read.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;

      bookCard.appendChild(title);
      bookCard.appendChild(author);
      bookCard.appendChild(pages);
      bookCard.appendChild(read);

      booksGrid.appendChild(bookCard);
    }
  }

  handleFormSubmit(event) {
    event.preventDefault();

    const title = document.getElementById('titleInput').value;
    const author = document.getElementById('authorInput').value;
    const pages = document.getElementById('pagesInput').value;
    const read = document.getElementById('readInput').checked;

    if (title === '' || author === '' || pages === '') {
      return;
    }

    this.addBook(title, author, pages, read);

    document.getElementById('titleInput').value = '';
    document.getElementById('authorInput').value = '';
    document.getElementById('pagesInput').value = '';
    document.getElementById('readInput').checked = false;

    this.showBookForm();
  }

  showBookForm() {
    const bookFormContainer = document.getElementById('bookFormContainer');
    bookFormContainer.style.display = 'block';
    bookFormContainer.style.border = '2px solid black';
  }
}

const library = new Library();

const addBookButton = document.getElementById('addBookButton');
addBookButton.addEventListener('click', library.showBookForm.bind(library));

const form = document.getElementById('bookForm');
form.addEventListener('submit', library.handleFormSubmit.bind(library));
