const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".facilityButton")


export const FacilitySelect = () =>{

 render()
}

const render = () =>{
    contentElement.innerHTML = `
    <button class="facility" id="facility">Display Facilities</button>
   ` 
}


eventHub.addEventListener("click", (event) => {
        if (event.target.id === "facility") {

            const customEvent = new CustomEvent("facilityDOM", {
              
            })
            eventHub.dispatchEvent(customEvent)
            console.log("Facility Button Pushed")
        }
    })