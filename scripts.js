import { BOOKS_PER_PAGE, authors, genres, books } from "./data.js";


//Global query selectors:
// settings query selectors
const settings = document.querySelector('[data-header-settings]'); 
const settingsOverlay = document.querySelector('[data-settings-overlay]');
const settingsForm = document.querySelector('[data-settings-form]');
const cancelSettings = document.querySelector('[data-settings-cancel]');

// search query selectors
const search = document.querySelector(".header__button"); // accesses the search button
const searchBtn = document.querySelector('[data-header-search]'); // accesses the search button
const searchOverlay = document.querySelector('[data-search-overlay]');
const searchForm = document.querySelector('[data-search-form]');
const searchInput = document.querySelector('[data-search-input]');
const searchCancel = document.querySelector('[data-search-cancel]');
const titleMatch = document.querySelector('[data-search-title]');
const genreMatch = document.querySelector('[data-search-genres]');
const authorMatch = document.querySelector('[data-search-authors]');
const searchSubmitBtn = searchForm.querySelector('button[type="submit"]'); 

// list and overlay query selectors
const list = document.querySelector("[data-list-items]");
const loadMore = document.querySelector("[data-list-button]");
const previewOverlay = document.querySelector("[data-list-active]");
const closeBtn = document.querySelector("[data-list-close]")
const titleOverlay = previewOverlay.querySelector(".overlay__title");
const dataOverlay = previewOverlay.querySelector(".overlay__data");
const overlayBlur = previewOverlay.querySelector(".overlay__blur");
const overlayImage = previewOverlay.querySelector(".overlay__image");
const infoOverlay = previewOverlay.querySelector("[data-list-description]");


// book preview functionality
const innerHTML = ( book, index ) => {
  const booksElement = document.createElement("div");
  booksElement.className = "preview";
  booksElement.dataset.index = `${index}`;
  booksElement.id = book.id;

  booksElement.innerHTML = ` <img src = ${book.image} 
  class = 'preview__image'  alt="${book.title} book image"></img>
  <div class="preview__info">
    <h3 class="preview__title">${book.title}</h3>
    <div class="preview__author">${authors[book.author]}</div>
  </div>`;

  return booksElement;
};


for (let i = 0; i < BOOKS_PER_PAGE; i++) {
  list.appendChild(innerHTML(books[i], i));
}
let loaded = 0;

loadMore.innerHTML = `<span>Show More</span>
<span class = "list__remaining">(
    ${books.length - BOOKS_PER_PAGE - loaded}
    )</span>`;

const moreBooks = (e) => {
  loaded += BOOKS_PER_PAGE;
  let booksLeft = books.length - BOOKS_PER_PAGE - loaded;
  let moreBtn = booksLeft > 0 ? booksLeft : 0;
  loadMore.innerHTML = `
  <span>Show more</span>
  <span class = "list__remaining">(${moreBtn})</span>`;

  let booksLoaded = BOOKS_PER_PAGE + loaded;

  for (let i = loaded; i < booksLoaded; i++) {
    list.appendChild(innerHTML(books[i], i));

    // Disable the "Load More" button if all books have been loaded
    if (i === books.length - 1) {
      loadMore.disabled = true;
    }
  }
};

const openOverlay = (e) => {
  const bookPreview = e.target.closest(".preview");
  const index = bookPreview.dataset.index;
  overlayBlur.src = books[index].image;
  overlayImage.src = books[index].image;
  titleOverlay.textContent = books[index].title;
  let dateOverlay = new Date(books[index].published).getFullYear();
  dataOverlay.textContent = `${authors[books[index].author]} (${dateOverlay})`;
  infoOverlay.textContent = books[index].description;
  previewOverlay.show();
};

// add event listeners to the buttons
loadMore.addEventListener("click", moreBooks);
list.addEventListener("click", openOverlay);
closeBtn.addEventListener("click", () => {
previewOverlay.close();
});



// Theme settings functionality
settings.addEventListener("click", () => {
    settingsOverlay.show();
    e.preventDefault();  

    settingsForm.classList.toggle('hidden');
    document.querySelector('[data-settings-overlay]').classList.toggle('hidden');
});

const theme = { 
    day: {
        dark: '10, 10, 20',
        light: '255, 255, 255',
    },
    
    night :{
        dark: '255, 255, 255',
        light: '10, 10, 20',
    }
    }
    
   settingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const result = Object.fromEntries(formData);
        
        document.documentElement.style.setProperty('--color-light', theme[result.theme].light);
        document.documentElement.style.setProperty('--color-dark', theme[result.theme].dark);
        settingsOverlay.close();       
    });

// Cancel settings selection functionality
cancelSettings.addEventListener("click", () => {
    e.preventDefault();
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
    e.preventDefault();  
    searchForm.classList.toggle('hidden');
          

    // document.querySelector('[data-search-overlay]').classList.toggle('hidden');
    // document.querySelectorAll('[overlay__label]').show();
});

// event listener for when the cancel button is clicked, it should close the search menu overlay
searchCancel.addEventListener('click', () => {
    searchOverlay.close();
    e.preventDefault();  

});

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchOverlay.close();

});

// extract the genre names from the genres object
const genreNames = Object.values(genres).filter(val => typeof val === 'string');
console.log(genreNames); 

const genreSelect = document.querySelector('[data-search-genres]');
const genrePlaceholderOption = document.createElement('option');
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
  authorNames.forEach((author) => {
    const option = document.createElement("option");
    option.value = author;
    option.text = author;
    authorMatch.appendChild(option);
  });
  


// Genre-author filter functionality
     
// when user selects specific genre, display books under that genre
    genreSelect.addEventListener('change', (e) => {
        const selectedGenre = e.target.value;
        let booksByGenre = [];

        // If the user selects 'All Genres', display all the books, else, filter the books by the selected genre
        if (selectedGenre === 'all') {
        booksByGenre = bookData;
        } else {
        bookData.forEach(book => {
            if (book.genres.includes(selectedGenre)) {
            booksByGenre.push(book);
            };
        });
     };
  
// Clear the current book list and display the new list of books
    const bookList = document.querySelector('[data-list-items]');
    bookList.innerHTML = '';
  
    booksByGenre.forEach(book => {
       const bookCard = document.createElement('div');
       bookCard.innerHTML = `
         <h3>${book.title}</h3>
        <p>${book.description}</p>
         <img src="${book.image}" alt="${book.title}">
       `;
       bookList.appendChild(bookCard);
     });
   });

// when user selects specific author, display books under that author 
authorSelect.addEventListener('change', (e) => {
    const selectedAuthor = e.target.value;
    let booksByAuthor = [];

    // If the user selects 'All Authors', display all the books, else, filter the books by the selected author
    if (selectedAuthor === 'all') {
    booksByAuthor = bookData;
    } else {
    bookData.forEach(book => {
        if (book.author === selectedAuthor) {
        booksByAuthor.push(book);
        };
    });
 };
}); 



