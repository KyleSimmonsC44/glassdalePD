import { getNotes, useNotes } from "./NoteDataProvider.js";
import {Note} from './Note.js'
import {useCriminals, getCriminals} from "../scripts/criminals/CriminalDataProvider.js"
import {deleteNote} from './NoteDataProvider.js'
const eventHub = document.querySelector(".container")


export const NoteList = () => {
    getNotes()
        .then(getCriminals)
        .then(() => {
            const notes = useNotes()
            const criminals = useCriminals()

            render(notes, criminals)
        })
}

// const render = (notesArray) =>{
//     const notesContainer = document.querySelector(".savedNotes");
//     let notesHTMLRep = ""
//     for (const note of notesArray){
//         notesHTMLRep += Note(note)
//     }
//         console.log(notesHTMLRep)
//         notesContainer.innerHTML = notesHTMLRep
// }
eventHub.addEventListener("noteStateChanged", () =>NoteList())
const notesContainer = document.querySelector(".savedNotes");

const render = (noteCollection, criminalCollection) => {
    
    notesContainer.innerHTML = noteCollection.map(note => {
        // Find the related criminal
        const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)

        return `
            <section class="note">
                <h4>Note about ${relatedCriminal.name}</h4>
                <p>Author: ${note.author}</p>
                <p>Date: ${new Date(note.timestamp).toLocaleDateString('en-US')}</p>
                <p>Time: ${new Date(note.timestamp).toLocaleTimeString('en-US')}</p>
                <p>Note: ${note.note}</p>
                <div class="delete">
                <button class="deleteButton" id="deleteNote--${note.id}">Delete</button>
                </div>
            </section>
        `
    })
}

eventHub.addEventListener("click", event =>{
    if (event.target.id.startsWith("deleteNote--")){
        const [prefix, id] = event.target.id.split("--")

        deleteNote(id).then(
            () =>{
                const updatedNotes = useNotes()
                const criminals = useCriminals()
                render(updatedNotes, criminals)
            }
        )
    }
})