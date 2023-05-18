let myLibrary = []; // Declara un array vacío llamado myLibrary para almacenar los libros

function createBook(title, author, pages, read) {
  return {
    title: title,
    author: author,
    pages: pages,
    read: read,
  };
}
// Función createBook crea y devuelve un objeto de libro con las propiedades dadas

function addBook(title, author, pages, read) {
  let newBook = createBook(title, author, pages, read); // Crea un nuevo libro usando la función createBook
  myLibrary.push(newBook); // Agrega el nuevo libro al array myLibrary
  displayBooks(); // Llama a la función displayBooks para mostrar los libros actualizados en pantalla
}

function displayBooks() {
  const booksGrid = document.getElementById('library'); // Obtiene el elemento con el ID 'library'
  booksGrid.innerHTML = ''; // Limpia el contenido anterior del elemento 'library'

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i]; // Obtiene el libro actual del array myLibrary
    const bookCard = document.createElement('div'); // Crea un elemento <div> para representar la tarjeta del libro
    bookCard.style.border = '1px solid black'; // Agrega un borde a la tarjeta del libro

    const title = document.createElement('p'); // Crea un elemento <p> para mostrar el título del libro
    const author = document.createElement('p'); // Crea un elemento <p> para mostrar el autor del libro
    const pages = document.createElement('p'); // Crea un elemento <p> para mostrar las páginas del libro
    const read = document.createElement('p'); // Crea un elemento <p> para mostrar el estado de lectura del libro

    title.textContent = `Title: ${book.title}`; // Establece el texto del elemento 'title' con el título del libro
    author.textContent = `Author: ${book.author}`; // Establece el texto del elemento 'author' con el autor del libro
    pages.textContent = `Pages: ${book.pages}`; // Establece el texto del elemento 'pages' con el número de páginas del libro
    read.textContent = `Read: ${book.read ? 'Yes' : 'No'}`; // Establece el texto del elemento 'read' con el estado de lectura del libro (Yes o No)

    bookCard.appendChild(title); // Agrega el elemento 'title' como hijo de la tarjeta del libro
    bookCard.appendChild(author); // Agrega el elemento 'author' como hijo de la tarjeta del libro
    bookCard.appendChild(pages); // Agrega el elemento 'pages' como hijo de la tarjeta del libro
    bookCard.appendChild(read); // Agrega el elemento 'read' como hijo de la tarjeta del libro

    booksGrid.appendChild(bookCard); // Agrega la tarjeta del libro al elemento 'library'
  }
}

function handleFormSubmit(event) {
  event.preventDefault(); // Evita que el formulario se envíe y la página se recargue

  const title = document.getElementById('titleInput').value; // Obtiene el valor del campo de entrada de título del formulario
  const author = document.getElementById('authorInput').value; // Obtiene el valor del campo de entrada de autor del formulario
  const pages = document.getElementById('pagesInput').value; // Obtiene el valor del campo de entrada de páginas del formulario
  const read = document.getElementById('readInput').checked; // Obtiene el estado de lectura (true o false) del checkbox del formulario

  if (title === '' || author === '' || pages === '') {
    return; // Si falta algún campo obligatorio (título, autor o páginas), retorna sin hacer nada
  }

  addBook(title, author, pages, read); // Llama a la función addBook para agregar un nuevo libro con los valores del formulario

  document.getElementById('titleInput').value = ''; // Limpia el campo de entrada de título del formulario
  document.getElementById('authorInput').value = ''; // Limpia el campo de entrada de autor del formulario
  document.getElementById('pagesInput').value = ''; // Limpia el campo de entrada de páginas del formulario
  document.getElementById('readInput').checked = false; // Desmarca el checkbox de lectura del formulario

  showBookForm(); // Muestra el formulario después de agregar un libro
}

function showBookForm() {
  const bookFormContainer = document.getElementById('bookFormContainer'); // Obtiene el contenedor del formulario
  bookFormContainer.style.display = 'block'; // Muestra el contenedor del formulario estableciendo su propiedad 'display' en 'block'
  bookFormContainer.style.border = '2px solid black'; // Agrega un borde al contenedor del formulario
}

const addBookButton = document.getElementById('addBookButton'); // Obtiene el botón "Add Book"
addBookButton.addEventListener('click', showBookForm); // Agrega un event listener para mostrar el formulario al hacer clic en el botón

const form = document.getElementById('bookForm'); // Obtiene el formulario
form.addEventListener('submit', handleFormSubmit); // Agrega un event listener para manejar el envío del formulario y agregar un libro
