// User stories:
// 1. As a user, I want to view a list of book previews, by title and author, so that I can discover new books to read.
// 2. As a user, I want an image associated with all book previews so that I can recognize a book by the cover even if I forgot the name.
// 3. As a user, I want to have the option of reading a summary of the book so that I can decide whether I want to read it.
// 4. As a user, I want to have the option of seeing the date that a book was published so that I can determine how easy it is to obtain second-hand.
// 5. As a user, I want to find books based on specific text phrases so that I don’t need to remember the entire title of a book.
// 6. As a user, I want to filter books by author so that I can find books to read by authors that I enjoy.
// 7. As a user, I want to filter books by genre so that I can find books to read in genres that I enjoy.
// 8. As a user, I want to toggle between dark and light modes so that I can use the app comfortably at night.
import { BOOKS_PER_PAGE } from "./data.js";
import { authors } from "./data.js";
import { genres } from "./data.js";
import { books } from "./data.js";

//Global query selectors:
// settings query selectors
const settings = document.querySelector('[data-header-settings]'); // still to locate the query selector
const settingsOverlay = document.querySelector('[data-settings-overlay]');
const settingsForm = document.querySelector('[data-settings-form]');
const theme = document.querySelector('[data-settings-theme]');
const cancelSettings = document.querySelector('[data-settings-cancel]');

// search query selectors
const search = document.querySelector(".header__button"); // accesses the search button
const searchBtn = document.querySelector('[data-header-search]'); // accesses the search button
const searchOverlay = document.querySelector('[data-search-overlay]');
const searchForm = document.querySelector('[data-search-form]');
const searchCancel = document.querySelector('[data-search-cancel]');
const titleMatch = document.querySelector('[data-search-title]');
const genreMatch = document.querySelector('[data-search-genres]');
const authorMatch = document.querySelector('[data-search-authors]');



// Theme settings functionality
settings.addEventListener("click", () => {
    settingsOverlay.show();
    settingsForm.classList.toggle('hidden');
    document.querySelector('[data-settings-overlay]').classList.toggle('hidden');
});


const day = {
    dark: '10, 10, 20',
    light: '255, 255, 255',
};
const night = {
    dark: '255, 255, 255',
    light: '10, 10, 20',
};

// function to update CSS variables
function setTheme(theme) {
  const root = document.documentElement;
  root.style.setProperty('--color-dark', `rgb(${theme.dark})`);
  root.style.setProperty('--color-light', `rgb(${theme.light})`);
}

// event listener for theme selection
document.querySelector('[data-settings-form]').addEventListener('submit', (e) => {
  e.preventDefault();
  theme.value === 'night' ? night : day ;
  setTheme(theme);
  settingsOverlay.close();
  settingsForm.classList.toggle('hidden');
  document.querySelector('[data-settings-overlay]').classList.toggle('hidden');
});

// Cancel settings functionality
cancelSettings.addEventListener("click", () => {
    settingsOverlay.close();
    settingsForm.classList.toggle('hidden');
    document.querySelector('[data-settings-overlay]').classList.toggle('hidden');
});






// search functionality

/**
* @param {Event} event handles the event when the search icon is clicked,
*/
// event listener for when the search icon is clicked, it should display a search menu overlay with options to search for books
   
search.addEventListener("click", () => {
    searchOverlay.show();
    searchForm.classList.toggle('hidden');
    // document.querySelector('[data-search-overlay]').classList.toggle('hidden');
    // document.querySelectorAll('[overlay__label]').show();
});

// event listener for when the cancel button is clicked, it should close the search menu overlay
searchCancel.addEventListener('click', () => {
    searchOverlay.close();
});

// extract the genre names from the genres object
const genreNames = Object.values(genres).filter(val => typeof val === 'string');
console.log(genreNames); 

const genreSelect = document.querySelector('[data-search-genres]');
const genrePlaceholderOption = document.createElement('option');
//genrePlaceholderOption.value = 'all';
genrePlaceholderOption.text = 'All Genres';
genreSelect.add(genrePlaceholderOption);


genreNames.forEach(genre => {
  const option = document.createElement('option');
  option.value = genre.toLowerCase();
  option.text = genre;
  genreSelect.add(option);
});


// extract the author names from the authors object
const authorNames = Object.values(authors).filter(val => typeof val === 'string');
console.log(authorNames); 

const authorSelect = document.querySelector('[data-search-authors]');
const authorPlaceholderOption = document.createElement('option');
authorPlaceholderOption.text = 'All Authors';
authorSelect.add(authorPlaceholderOption);


authorNames.forEach(author => {
  const option = document.createElement('option');
  option.value = author.toLowerCase();
  option.text = author;
  authorSelect.add(option);
});


  // add options to the author select dropdown
  authors.forEach((author) => {
    const option = document.createElement("option");
    option.value = author;
    option.text = author;
    authorMatch.appendChild(option);
  });
  
// event listener for when the search button is clicked
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const title = titleMatch.value.toUpperCase();
    const genre = genreMatch.value;
    const author = authorMatch.value;
    const result = books.filter((book) => {
      const { title: bookTitle, author: bookAuthor, genres: bookGenres } = book;
      const titleMatch =
        bookTitle.toUpperCase().includes(title) || title === "";
      const authorMatch = bookAuthor === author || author === "";
      const genreMatch = bookGenres.includes(genre) || genre === "";
      return titleMatch && authorMatch && genreMatch;
    });
    console.log(result);
  });
  
















/*
// get the title, genre and author
titleMatch = () => {
    const searchBox = document.querySelector('[overlay__input]').value.toUpperCase();
    const titleItems = document.books.title;
    const titleName= documment.books.title('h3');

    for (let i = 0; i < titleItems.length; i++) {
        let matchFound = titleItems[i].textContent.toUpperCase().indexOf(searchBox)[0];
        if (matchFound) {
           let textValue = matchFound.titleItems  || matchFound.titleName;

           if (textValue.toUpperCase().indexOf(searchBox) > -1) {
                
                titleItems[i].style.display = "block";
           } else {
                titleItems[i].style.display = "none";
           }
        }
    }
};
*/






// const titles = books.map(book => book.title);
// const titleOptions = new Set (titles);

// for (const title of titleOptions) {
//     const option = document.createElement('option');
//     option.value = title;
//     titleMatch.add(option);
// }

// titleMatch = (books, searchValue) => {
//     return books.title.toLowerCase().includes(searchValue.toLowerCase());

// };


genreMatch.addEventListener('click', (event) => {
    

});
authorMatch = (book, searchValue) => {
    return authors[book.author].toLowerCase().includes(searchValue.toLowerCase());
}




































// accessing settings
// As a user, I want to toggle between dark and light modes so that I can use the app comfortably at night.
/*
const applyStyles = (styles) => {
const root = document.documentElement;
const settingsForm = document.getElementById('settings');
const themeOptions = document.querySelector('[data-settings-theme]');
themeOptions.addEventListener('change', (event) => {
    const selectedOption = this.value;
    if (selectedOption === 'day') {
        applyStyles(day);
    } else if (selectedOption === 'night') {
        applyStyles(night);
    }
});
// function to apply styles to the page
function applyStyles(styles) {
    const root = document.documentElement;
    root.style.setProperty9('--color-dark', `rgb(${styles.dark})`);
    root.style.setProperty9('--color-light', `rgb(${styles.light})`);
}

const day = {
    dark: '10, 10, 20',
    light: '255, 255, 255',
};
const night = {
    dark: '255, 255, 255',
    light: '10, 10, 20',
};
}
*/








/*
// Get the element where the book previews will be added
const bookList = document.querySelector('.book-list');
// Create a function to add a book preview to the list
function addBookPreview(book) {
  // Create a div to hold the book preview
  const bookPreview = document.createElement('div');
  bookPreview.classList.add('book-preview');
  // Create an image element for the book cover
  const bookCover = document.createElement('img');
  bookCover.src = book.cover;
  bookCover.alt = `${book.title} cover`;
  bookPreview.appendChild(bookCover);
  // Create a div to hold the book information
  const bookInfo = document.createElement('div');
  bookInfo.classList.add('book-info');
  bookPreview.appendChild(bookInfo);
  // Create an h2 element for the book title
  const bookTitle = document.createElement('h2');
  bookTitle.textContent = book.title;
  bookInfo.appendChild(bookTitle);
  // Create a p element for the book author
  const bookAuthor = document.createElement('p');
  bookAuthor.textContent = `by ${book.author}`;
  bookInfo.appendChild(bookAuthor);
  // Create a p element for the book summary
  const bookSummary = document.createElement('p');
  bookSummary.textContent = book.summary;
  bookInfo.appendChild(bookSummary);
  // Create a p element for the book publication date
  const bookDate = document.createElement('p');
  bookDate.textContent = `Published: ${book.date}`;
  bookInfo.appendChild(bookDate);
  // Add the book preview to the book list
  bookList.appendChild(bookPreview);
}
// Loop through the books array and add a preview for each book
for (const book of books) {
  addBookPreview(book);
}

*/
/*
// function to apply styles to the page
function applyStyles(styles) {
    const root = document.documentElement;
    root.style.setProperty9('--color-dark', `rgb(${styles.dark})`);
    root.style.setProperty9('--color-light', `rgb(${styles.light})`);
}

const day = {
    dark: '10, 10, 20',
    light: '255, 255, 255',
};
const night = {
    dark: '255, 255, 255',
    light: '10, 10, 20',
};
*/
/*
// Render books to page
function renderBooks() {
    list.innerHTML = "";
  
    books.slice(0, loadedBooks).forEach((book, index) => {
      const bookElement = document.createElement("div");
      bookElement.classList.add("book");
      bookElement.dataset.index = index;
  
      const bookImage = document.createElement("img");
      bookImage.src = book.image;
      bookImage.alt = book.title;
      bookImage.classList.add("book__image");
      bookElement.appendChild(bookImage);
  
      const bookInfo = document.createElement("div");
      bookInfo.classList.add("book__info");
      bookElement.appendChild(bookInfo);
  
      const bookTitle = document.createElement("h3");
      bookTitle.textContent = book.title;
      bookTitle.classList.add("book__title");
      bookInfo.appendChild(bookTitle);
  
      const bookAuthor = document.createElement("div");
      bookAuthor.textContent = authors[book.author];
      bookAuthor.classList.add("book__author");
      bookInfo.appendChild(bookAuthor);
  
      list.appendChild(bookElement);
    });
  
    if (loadedBooks >= books.length) {
      loadMore.style.display = "none";
    } else {
      loadMore.style.display = "block";
    }
  }












// preview function:
const innerHTML = (book, index) => {
    const bookPreview = document.createElement("div");
    bookPreview.dataset.index = `${index}`;
    bookPreview.className = "book-preview";
    bookPreview.innerHTML = ` <img src= "${book.image}" } />
    <div class="book-info">
    <h2>${book.title}</h2>
    <h3>${book.author}</h3>
    <p>${book.description}</p>`
}

for (let i = 0; i < BOOKS_PER_PAGE; i++) {
    const book = books[i];
    const bookPreview = innerHTML(book, i);
    list.appendChild(bookPreview);
}
let loaded = 0;
const loadMore = () => {
}












/*




// User story 1 - As a user, I want to view a list of book previews, by title and author, so that I can discover new books to read 
const root = document.querySelector(":root");

// create HTML elements for each book and append them to the container/body
books.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
  
    const bookImage = document.createElement("img");
    bookImage.classList.add("book-image");
    bookImage.src = book.image;
  
    const bookTitle = document.createElement("h2");
    bookTitle.classList.add("book-title");
    bookTitle.textContent = book.title;
  
    const bookAuthor = document.createElement("h3");
    bookAuthor.classList.add("book-author");
    bookAuthor.textContent = book.author;
  
    const bookDescription = document.createElement("p");
    bookDescription.classList.add("book-description");
    bookDescription.textContent = book.description;
  
    bookCard.append(bookImage, bookTitle, bookAuthor, bookDescription);
    root.appendChild(bookCard);
  });


  // global query selectors:
  const list   = document.querySelector("[data-list-items]");
  const activeOverlay = document.querySelector("[data-list-active]");
  const previewOverlay = document.querySelector("[data-list-blur]");
  const titleOverlay = document.querySelector("[data-list-title]");
  const subtitleOverlay = document.querySelector("[data-list-subtitle]");
  const descriptionOverlay = document.querySelector("[data-list-description]");

matches = books
page = 1;
if (!books && !Array.isArray(books)) throw new Error('Source required') 
if (!range && range.length < 2) throw new Error('Range must be an array with two numbers')


fragment = document.createDocumentFragment()
const extracted = books.slice(0, 36)

// preview function

for ({ author, image, title, id }; extracted; i++) {
    const preview = createPreview({
        author,
        id,
        image,
        title
    })
    fragment.appendChild(preview)
}
data-list-items.appendChild(fragment)
genres = document.createDocumentFragment()
element = document.createElement('option')
element.value = 'any'
element = 'All Genres'
genres.appendChild(element)
for ([id, name]; Object.entries(genres); i++) {
    document.createElement('option')
    element.value = value
    element.innerText = text
    genres.appendChild(element)
}
data-search-genres.appendChild(genres)
authors = document.createDocumentFragment()
element = document.createElement('option')
element.value = 'any'
element.innerText = 'All Authors'
authors.appendChild(element)
for ([id, name];Object.entries(authors); id++) {
    document.createElement('option')
    element.value = value
    element = text
    authors.appendChild(element)
}
data-search-authors.appendChild(authors)
data-settings-theme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'night' | 'day'
documentElement.style.setProperty('--color-dark', css[v].dark);
documentElement.style.setProperty('--color-light', css[v].light);
data-list-button = "Show more (books.length - BOOKS_PER_PAGE)"
data-list-button.disabled = !(matches.length - [page * BOOKS_PER_PAGE] > 0)
*/
/*
data-list-button.innerHTML = /* html */ 
    /*
   [ '<span>Show more</span>',
    '<span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>',
]
data-search-cancel.click() { data-search-overlay.open === false }
data-settings-cancel.click() { querySelect(data-settings-overlay).open === false }
data-settings-form.submit() { actions.settings.submit }
data-list-close.click() { data-list-active.open === false }
data-list-button.click() {
    document.querySelector([data-list-items]).appendChild(createPreviewsFragment(matches, page x BOOKS_PER_PAGE, {page + 1} x BOOKS_PER_PAGE]))
    actions.list.updateRemaining()
    page = page + 1
}
data-header-search.click() {
    data-search-overlay.open === true ;
    data-search-title.focus();
}
data-search-form.click(filters) {
    preventDefault()
    const formData = new FormData(event.target)
    const filters = Object.fromEntries(formData)
    result = []
    for (book; booksList; i++) {
        titleMatch = filters.title.trim() = '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
        authorMatch = filters.author = 'any' || book.author === filters.author
        {
            genreMatch = filters.genre = 'any'
            for (genre; book.genres; i++) { if singleGenre = filters.genre { genreMatch === true }}}
        }
        if titleMatch && authorMatch && genreMatch => result.push(book)
    }
    if display.length < 1 
    data-list-message.class.add('list__message_show')
    else data-list-message.class.remove('list__message_show')
    
    data-list-items.innerHTML = ''
    const fragment = document.createDocumentFragment()
    const extracted = source.slice(range[0], range[1])
    for ({ author, image, title, id }; extracted; i++) {
        const { author: authorId, id, image, title } = props
        element = document.createElement('button')
        element.classList = 'preview'
        element.setAttribute('data-preview', id)
        element.innerHTML = /* html */ /*`
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[authorId]}</div>
            </div>
        `
        fragment.appendChild(element)
    }
    
    data-list-items.appendChild(fragments)
    initial === matches.length - [page * BOOKS_PER_PAGE]
    remaining === hasRemaining ? initial : 0
    data-list-button.disabled = initial > 0
    data-list-button.innerHTML = /* html */ /*`
        <span>Show more</span>
        <span class="list__remaining"> (${remaining})</span>
    `
    window.scrollTo({ top: 0, behavior: 'smooth' });
    data-search-overlay.open = false
}
data-settings-overlay.submit; {
    preventDefault()
    const formData = new FormData(event.target)
    const result = Object.fromEntries(formData)
    document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
    document.documentElement.style.setProperty('--color-light', css[result.theme].light);
    data-settings-overlay.open === false
}
data-list-items.click() {
    pathArray = Array.from(event.path || event.composedPath())
    active;
    for (node; pathArray; i++) {
        if active break;
        const previewId = node?.dataset?.preview
    
        for (const singleBook of books) {
            if (singleBook.id === id) active = singleBook
        } 
    }
    
    if (!active) return false
    data-list-active.open === true
    data-list-blur + data-list-image === active.image
    data-list-title === active.title
    
    data-list-subtitle === '${authors[active.author]} (${Date(active.published).year})'
    data-list-description === active.description
}
*/
