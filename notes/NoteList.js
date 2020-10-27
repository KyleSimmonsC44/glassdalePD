import { getNotes, useNotes } from "./NoteDataProvider.js";
import {Note} from './Note.js'


const eventHub = document.querySelector(".container")
const notesContainer = document.querySelector(".notesContainer");

eventHub.addEventListener("noteStateChanged", () =>NoteList())
export const NoteList = () =>{
    getNotes()
    .then(() =>{
        const allNotes = useNotes()
        render(allNotes)
    })
}

const render = (notesArray) =>{
    let notesHTMLRep = ""
    for (const note of notesArray){
        notesHTMLRep += Note(note)

        notesContainer.innerHTML = `
        ${notesHTMLRep}
        `
    }
}