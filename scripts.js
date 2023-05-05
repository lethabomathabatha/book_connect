import { BOOKS_PER_PAGE } from "./data.js";
import { authors } from "./data.js";
import { genres } from "./data.js";
import { books } from "./data.js";



//Global query selectors:
// settings query selectors
const settings = document.querySelector('[data-header-settings]'); // still to locate the query selector
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
  






  // when user selects specific genre, display books under that genre
     

  /*
  genreSelect.addEventListener(('change'), (e) => {
        e.preventDefault();
         const genre = e.target.value;
         const booksGenre = genre === 'all' ? bookData : bookData.filter(book => data.books.genres.includes(genre));
         list.innerHTML = '';
         booksGenre.forEach((book, index) => {
             list.appendChild(innerHTML(book, index));
         });
         return booksGenre;
     });
     */
/////
//   // when user selects specific genre, display books under that genre
// genreSelect.addEventListener('change', (e) => {
//     const selectedGenre = e.target.value;
//     let booksByGenre = [];
  
//     if (selectedGenre === 'all') {
//       // If the user selects 'All Genres', display all the books
//       booksByGenre = bookData;
//     } else {
//       // Filter the books by the selected genre
//       bookData.forEach(book => {
//         if (book.genres.includes(selectedGenre)) {
//           booksByGenre.push(book);
//         }
//       });
//     }
  
//     // Clear the current book list and display the new list of books
//     const bookList = document.querySelector('[data-list-items]');
//     bookList.innerHTML = '';
  
//     booksByGenre.forEach(book => {
//       const bookCard = document.createElement('div');
//       bookCard.innerHTML = `
//         <h3>${book.title}</h3>
//         <p>${book.description}</p>
//         <img src="${book.image}" alt="${book.title}">
//       `;
//       bookList.appendChild(bookCard);
//     });
//   });
/////






// retrieving books under a specific genre
// use the number-letter string in genre to pull books with the corresponding genre number-letter string


// // Select DOM elements
// function renderBooks(books) {
//     const bookList = document.createElement('ul');
//     bookList.setAttribute('data-book-list', '');
  
//     books.forEach((book) => {
//       const bookItem = document.createElement('li');
//       bookItem.innerHTML = `
//         <h2>${book.title}</h2>
//         <img src="${book.image}" alt="${book.title}">
//         <p>${book.description}</p>
//         <ul>
//           ${book.genres.map((genre) => `<li>${genre}</li>`).join('')}
//         </ul>
//       `;
//       bookList.appendChild(bookItem);
//     });
  
//     const app = document.getElementById('app');
//     app.appendChild(bookList);
//   }


  







/*
const searchButton = document.querySelector('[data-search-form] button[type="submit"]');

searchBtn.addEventListener('submit', (event)=> {
  event.preventDefault(); // prevent the form from submitting

  // genre filter
  const selectedGenre = genreSelect.value;
  const filteredBooksG = books.filter(function(book) {
    return book.genres.includes(selectedGenre);
  });

  console.log(filteredBooksG); // replace with whatever you want to do with the filtered books


    // author filter
    const selectedAuthor = authorSelect.value;
    const filteredBooks = books.filter(function(book) {
        return book.author.includes(selectedAuthor);


    });
    console.log(filteredBooks); // replace with whatever you want to do with the filtered books

});
*/

























// data-search-form.click(filters)  {
//     preventDefault()
//     const formData = new FormData(e.target)
//     const filters = Object.fromEntries(formData)
//     result = []
//     for (books; booksList; i++) {
//         titleMatch = filters.title.trim() = '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
//         authorMatch = filters.author = 'any' || book.author === filters.author
//         {
//             genreMatch = filters.genre = 'any'
//             for (genre; book.genres; i++) { if (singleGenre = filters.genre) { genreMatch === true }}}
//         }
//         if (titleMatch && authorMatch && genreMatch) result.push(book)
//     }

//     if (display.length < 1)  { 
//     data-list-message.class.add('list__message_show')
//     } else data-list-message.class.remove('list__message_show')

//     data-list-items.innerHTML('');
//     const fragment = document.createDocumentFragment()
//     const extracted = source.slice(range[0], range[1])
//     for ({ author, image, title, id }; extracted; i++) {
//         const { author: authorId, id, image, title } = props
//         element = document.createElement('button')
//         element.classList = 'preview'
//         element.setAttribute('data-preview', id)
//         element.innerHTML /* html */ `
//             <img
//                 class="preview__image"
//                 src="${image}"
//             />
            
//             <div class="preview__info">
//                 <h3 class="preview__title">${title}</h3>
//                 <div class="preview__author">${authors[authorId]}</div>
//             </div>
//         `
//         fragment.appendChild(element)
//     }

    

