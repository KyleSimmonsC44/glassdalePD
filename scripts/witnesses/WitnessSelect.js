const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".witnessButton")


export const WitnessSelect = () =>{

 render()
}

const render = () =>{
    contentElement.innerHTML = `
    <button class="witness" id="witness">Display Witness</button>
   ` 
}


eventHub.addEventListener("click", (event) => {
        if (event.target.id === "witness") {

            const customEvent = new CustomEvent("witnessDOM", {
              
            })
            eventHub.dispatchEvent(customEvent)
            console.log("Witness Button Pushed")
        }
    })