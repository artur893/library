//CREATING LIBRARY

let myLibrary = [];

class Book {
    constructor(title, author, pages, readed) {
        this.title = title
        this.author = author
        this.pages = pages
        this.readed = readed
    }
}


function addToLibrary(title, author, pages, readed) {
    const book = new Book(title, author, pages, readed)
    myLibrary.push(book)
}

//DISPLAY BOOKS FROM CODE

addToLibrary("Hobbit1", "Tolkien", 372, true)

function displayBooks() {
    for (i = 0; i < myLibrary.length; i++) {
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
        closeButton.dataset.index = i
        if (myLibrary[i].readed === true) {
            pReaded.textContent = "Read"
            pReaded.classList.add("read")
            pReaded.classList.add("readed")
            pReaded.dataset.index = i
        }
        if (myLibrary[i].readed === false) {
            pReaded.textContent = "Not read"
            pReaded.classList.add("read")
            pReaded.classList.add("notreaded")
            pReaded.dataset.index = i
        }
        div.classList.add("card")
        div.appendChild(pReaded)
    }
}
displayBooks()


const card = document.querySelectorAll(".card")
const findXButton = function () {
    const xButton = document.querySelectorAll(".close")
    xButton.forEach((square) => {
        square.addEventListener("click", function (e) {
            const index = e.target.dataset.index
            console.log(index)
            removeFromLibrary(index)
        })
    })
}
findXButton()


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
    popup.classList.remove("active")
    overlay.classList.remove("active")
    title.value = ""
    author.value = ""
    pages.value = "0"
    readed.checked = 0
    clearDisplay()
    displayBooks()
    findXButton()
    readOrNot()


})


//REMOVING BOOK FROM LIBRARY

function clearDisplay() {
    const main = document.querySelector("main")
    const divs = document.querySelectorAll(".card")
    for (i = 0; i < divs.length; i++) {
        main.removeChild(divs[i])
    }
}



function removeFromLibrary(index) {
    myLibrary.splice(index, 1)
    clearDisplay()
    displayBooks()
    findXButton()
    readOrNot()

}

const readOrNot = function () {
    const readBtn = document.querySelectorAll(".read")
    readBtn.forEach((btn) => {
        btn.addEventListener("click", function (e) {
            const index = e.target.dataset.index
            console.log(index)
            if (myLibrary[index].readed === false) {
                myLibrary[index].readed = true
            }
            else {
                myLibrary[index].readed = false
            }

            clearDisplay()
            displayBooks()
            findXButton()
            readOrNot()
        })

    })
}
readOrNot()

