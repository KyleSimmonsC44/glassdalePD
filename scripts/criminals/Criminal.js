export const criminalHTML = (criminalObj, facilities) =>{
    return`
    <div class ="criminal-style" id="criminal--${criminalObj.id}">
            <h2>${criminalObj.name}</h2>
            <p class="criminal__age"> Age: ${criminalObj.age}</p>
            <p class="criminal__conviction">Crime: ${criminalObj.conviction}</p>
            <p class="criminal__incarceration-start">Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
            <p class="criminal__incarceration-end">Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
            <div>
            <h2>Facilities</h2>
            <ul>
                ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
            </ul>
        </div>
            <button class="associate" id="associates--${criminalObj.id}">Associate Alibis</button>
            <button class="associate" id="resetAssociates--${criminalObj.id}">Reset Card</button>
        </div>
            `}
const eventHub = document.querySelector(".container")

            eventHub.addEventListener("click", (event) => {
                const [nameOfId, criminalId] = event.target.id.split("--")
                    if (event.target.id.startsWith("associates--")) {

                        const customEvent = new CustomEvent("associateButtonClicked", {
                            detail: {
                                criminalId: criminalId
                            }
                        })
                        eventHub.dispatchEvent(customEvent)
                    }
                })

            eventHub.addEventListener("click", (event) => {
                const [nameOfId, criminalId] = event.target.id.split("--")
                    if (event.target.id.startsWith("resetAssociates--")) {

                        const customEvent = new CustomEvent("resetAssociateButtonClicked", {
                            detail: {
                                criminalId: criminalId
                            }
                        })
                        eventHub.dispatchEvent(customEvent)
                    }
                    
                })
