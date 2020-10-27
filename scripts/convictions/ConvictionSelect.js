
import {useConviction, getConviction} from './ConvictionDataProvider.js'

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".filters__crime")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", (event) => {

    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "crimeSelect") {
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("crimeSelected", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })
        
        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})




export const ConvictionSelect = () =>{
    getConviction().then(()=>{
            const convictions= useConviction()
            render(convictions)
    })
}

const render = convictionsCollection =>{

    contentElement.innerHTML = `
    <select class="dropdown" id="crimeSelect">
        <option value="0">Please select a crime...</option>
        ${convictionsCollection.map(
            convictionObj =>{
                return `<option value="${convictionObj.id}">${convictionObj.name}</option>`
            }
        )
    }
    </select>
   ` 
}