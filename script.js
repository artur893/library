//CREATING LIBRARY

let myLibrary = []

function Book(title, author, pages, readed) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readed = readed
}

function addToLibrary(title, author, pages, readed) {
    const book = new Book(title, author, pages, readed)
    myLibrary.push(book)
}

//DISPLAY BOOKS FROM CODE

addToLibrary("Hobbit1", "Tolkien", 356, true)
displayBook()
addToLibrary("Hobbit2", "Tolkien", 356, false)
displayBook()
addToLibrary("Hobbit3", "Tolkien", 356, true)
displayBook()
addToLibrary("Hobbit4", "Tolkien", 356, false)
displayBook()

function displayBook(item) {
    for (i = myLibrary.length - 1; i < myLibrary.length; i++) {
        const main = document.querySelector("main")
        const div = document.createElement("div")
        const closeButton = document.createElement("div")
        const pTitle = document.createElement("div")
        const pAuthor = document.createElement("div")
        const pPages = document.createElement("div")
        const pReaded = document.createElement("div")
        main.appendChild(div)
        pTitle.classList.add("title")
        pTitle.textContent = myLibrary[i].title
        div.appendChild(pTitle)
        pTitle.appendChild(closeButton)
        closeButton.classList.add("close")
        closeButton.textContent = "X"
        pAuthor.textContent = myLibrary[i].author
        div.appendChild(pAuthor)
        pPages.textContent = myLibrary[i].pages + " pages"
        div.appendChild(pPages)
        if (myLibrary[i].readed === true) {
            pReaded.textContent = "Read"
            pReaded.classList.add("readed")
        }
        if (myLibrary[i].readed === false) {
            pReaded.textContent = "Not read"
            pReaded.classList.add("notreaded")
        }
        div.classList.add("card")
        div.appendChild(pReaded)
        closeButton.addEventListener("click", function () {
            myLibrary.splice(myLibrary.indexOf(item), 1)
        })
    }
}

//POPUP DISPLAY

const closePopup = document.querySelector(".x")
const openAdd = document.querySelector(".add")
const popup = document.querySelector(".popup")
const overlay = document.querySelector("#overlay")

openAdd.addEventListener("click", function () {
    popup.classList.add("active")
    overlay.classList.add("active")
})

closePopup.addEventListener("click", function () {
    popup.classList.remove("active")
    overlay.classList.remove("active")
})

//POPUP LOGIC ADDING BOOK TO LIBRARY

const title = document.getElementById("title")
const author = document.getElementById("author")
const pages = document.getElementById("pages")
const readed = document.getElementById("readed")
const submit = document.getElementById("submit")

submit.addEventListener("click", function () {
    addToLibrary(title.value, author.value, pages.value, readed.checked)
    displayBook()
    popup.classList.remove("active")
    overlay.classList.remove("active")
    title.value = ""
    author.value = ""
    pages.value = "0"
    readed.checked = 0

})

//REMOVING BOOK FROM LIBRARY

// const closeButton = document.getElementsByClassName("close")

// function removeFromLibrary(x) {
//     myLibrary.splice(x, 1)
// }

// for (i = 0; i < closeButton.length; i++) {
//     closeButton[i].addEventListener("click", function (e) {
//         e.target
//         removeFromLibrary(i)
//     })
// }
