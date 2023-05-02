// User stories:
// 1. As a user, I want to view a list of book previews, by title and author, so that I can discover new books to read.
// 2. As a user, I want an image associated with all book previews so that I can recognize a book by the cover even if I forgot the name.
// 3. As a user, I want to have the option of reading a summary of the book so that I can decide whether I want to read it.
// 4. As a user, I want to have the option of seeing the date that a book was published so that I can determine how easy it is to obtain second-hand.
// 5. As a user, I want to find books based on specific text phrases so that I don’t need to remember the entire title of a book.
// 6. As a user, I want to filter books by author so that I can find books to read by authors that I enjoy.
// 7. As a user, I want to filter books by genre so that I can find books to read in genres that I enjoy.
// 8. As a user, I want to toggle between dark and light modes so that I can use the app comfortably at night.

import { BOOKS_PER_PAGE } from "./data";
import { authors } from "./data";
import { genres } from "./data";
import { books } from "./data";


// User story 1 - As a user, I want to view a list of book previews, by title and author, so that I can discover new books to read 




matches = books
page = 1;

if (!books && !Array.isArray(books)) throw new Error('Source required') 
if (!range && range.length < 2) throw new Error('Range must be an array with two numbers')


// accessing settings
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


day = {
    dark: '10, 10, 20',
    light: '255, 255, 255',
}

night = {
    dark: '255, 255, 255',
    light: '10, 10, 20',
}

fragment = document.createDocumentFragment()
const extracted = books.slice(0, 36)

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

data-list-button.innerHTML = /* html */ [
    '<span>Show more</span>',
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

        element.innerHTML = /* html */ `
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

    data-list-button.innerHTML = /* html */ `
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
    data-settings-overlay).open === false
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
    
    if !active return
    data-list-active.open === true
    data-list-blur + data-list-image === active.image
    data-list-title === active.title
    
    data-list-subtitle === '${authors[active.author]} (${Date(active.published).year})'
    data-list-description === active.description
}