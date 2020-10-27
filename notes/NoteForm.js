import {saveNote} from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")

const eventHub = document.querySelector(".container")

const render = () =>{
    contentTarget.innerHTML=`
    <h3>Notes</h3>
    <input id ="note__dateOfInterview" type="date">
    <input id ="note__author" type="text" placeholder="Your Name Here">
    <input id ="note__suspect" type="text" placeholder="Suspect Name Here">
    <textarea id = "note__note" placeholder="Note Here"></textarea>
    <button id="saveNote">Save Note</button>
    `
}

eventHub.addEventListener("click", clickEvent =>{
    if(clickEvent.target.id === "saveNote"){
        const dateOfInterview = document.querySelector("#note__dateOfInterview").value
        const author = document.querySelector("#note__author").value
        const suspect = document.querySelector("#note__suspect").value
        const note = document.querySelector("#note__note").value
        const timestamp = Date.now()

        const newNote = {
            dateOfInterview,
            timestamp,
            author,
            suspect,
            note
        }
        saveNote(newNote)
    }
})

export const NoteForm = () =>{
    render()
}