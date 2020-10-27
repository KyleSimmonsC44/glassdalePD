const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".criminalButton")


export const CriminalSelect = () =>{

 render()
}

const render = () =>{
    contentElement.innerHTML = `
    <button class="criminal" id="criminal">Display Criminals</button>
   ` 
}


eventHub.addEventListener("click", (event) => {
        if (event.target.id === "criminal") {

            const customEvent = new CustomEvent("criminalDOM", {
              
            })
            eventHub.dispatchEvent(customEvent)
        }
    })

