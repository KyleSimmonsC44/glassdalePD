import {saveNote} from "./NoteDataProvider.js"
import {getCriminals, useCriminals} from "../scripts/criminals/CriminalDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")

const eventHub = document.querySelector(".container")

const render = () =>{
    contentTarget.innerHTML=`
    <h3>Notes</h3>
    <input id ="note__dateOfInterview" type="date">
    <input id ="note__author" type="text" placeholder="Your Name Here">
    <div class="criminalDropdown">
    
    </div>
    <textarea id = "note__note" placeholder="Note Here"></textarea>
    <button id="saveNote">Save Note</button>
    `
    console.log(" 1st RENDER FUNCTION")
}

eventHub.addEventListener("click", clickEvent =>{
    if(clickEvent.target.id === "saveNote"){
        const dateOfInterview = document.querySelector("#note__dateOfInterview").value
        const author = document.querySelector("#note__author").value
        const suspect = parseInt(document.querySelector("#note__suspect").value)
        const note = document.querySelector("#note__note").value
        const timestamp = Date.now()

        const newNote = {
            dateOfInterview,
            timestamp,
            author,
            criminalId: suspect,
            note
        }
        
        saveNote(newNote)
    }
})
export const NoteForm = () =>{
    render()
    const criminalSelect = () =>{
        getCriminals().then(() =>{
            const criminals = useCriminals()
            renderCriminalDropdown(criminals)
        })
    }
    criminalSelect()
}

const renderCriminalDropdown = (allCriminals) =>{
    const contentElement = document.querySelector(".criminalDropdown")

    console.log("2nd RENDER FUNCTION")
    contentElement.innerHTML = `
    <select id="note__suspect">
    <option value="0">Select a Suspect</option>
    ${allCriminals.map(
        criminal =>{
            return`<option value="${criminal.id}">${criminal.name}</option>`
        }).join("")
}
</select>
`
}