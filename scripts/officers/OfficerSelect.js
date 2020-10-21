import {useOfficers, getOfficers} from './OfficerProvider.js'

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".filters__officer")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", (event) => {

    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "officerSelect") {
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officerThatWasChosen: event.target.value
            }
        })
        console.log(customEvent.detail.officerThatWasChosen)
        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})




export const OfficerSelect = () =>{
    getOfficers().then(()=>{
            const officers= useOfficers()
            render(officers)
    })
}

const render = officersCollection =>{

    contentElement.innerHTML = `
    <select class="dropdown" id="officerSelect">
        <option value="0">Please select arresting officer..</option>
        ${officersCollection.map(
            officerObj =>{
                return `<option value="${officerObj.id}">${officerObj.name}</option>`
            }
        )
    }
    </select>
   ` 
}