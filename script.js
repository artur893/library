let myLibrary = []

function Book(title, author, pages, readed) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readed = readed
    return { title, author, pages, readed }
}

function addToLibrary(title, author, pages, readed) {
    const book = Book(title, author, pages, readed)
    myLibrary.push(book)
}




addToLibrary("Hobbit", "Tolkien", 372, true)
addToLibrary("Inferno", "Dan Brown", 688, true)
addToLibrary("Omerta", "Mario Puzo", 384, false)





console.log(myLibrary)




function displayBook() {
    for (i = 0; i < myLibrary.length; i++) {
        const main = document.querySelector("main")
        const div = document.createElement("div")
        const pTitle = document.createElement("p")
        const pAuthor = document.createElement("p")
        const pPages = document.createElement("p")
        const pReaded = document.createElement("p")
        main.appendChild(div)
        pTitle.classList.add("title")
        pTitle.textContent = myLibrary[i].title
        div.appendChild(pTitle)
        pAuthor.textContent = myLibrary[i].author
        div.appendChild(pAuthor)
        pPages.textContent = myLibrary[i].pages + " pages"
        div.appendChild(pPages)
        pReaded.textContent = myLibrary[i].readed
        div.appendChild(pReaded)
    }
}

displayBook()


//MODAL//

const closePopup = document.querySelector(".x")
const openAdd = document.querySelector(".add")
const popup = document.querySelector(".popup")
const overlay = document.querySelector("#overlay")

openAdd.addEventListener("click", function(){
    popup.classList.add("active")
    overlay.classList.add("active")
})

closePopup.addEventListener("click", function(){
    popup.classList.remove("active")
    overlay.classList.remove("active")
})
