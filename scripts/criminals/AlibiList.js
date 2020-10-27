import { useCriminals } from './CriminalDataProvider.js'


const eventHub = document.querySelector(".container")

const render = (criminalObj) => {
    const contentTarget = document.querySelector(`#criminal--${criminalObj.id}`)
    
    contentTarget.innerHTML += `
    <div class="alibi__list">
        ${criminalObj.known_associates.map(alibiObj => {
            return `
                <p>Associate: ${alibiObj.name}</p>
                <p>Alibi: ${alibiObj.alibi}</p>
                
            `
        }).join("")}
    </div>
    `
}

const AlibiList = (criminalObj) =>{
    render(criminalObj)
}

export const AlibiEventListener = () =>{

    eventHub.addEventListener("associateButtonClicked", (eventObj) =>{
        
        const arrayOfCriminals = useCriminals()
        
        const foundCriminal = arrayOfCriminals.find((criminalObj) =>{
            return criminalObj.id === parseInt(eventObj.detail.criminalId)
        })
        
        AlibiList(foundCriminal)
    })
}

    eventHub.addEventListener("resetAssociateButtonClicked", (eventObj) =>{
        
        const arrayOfCriminals = useCriminals()
        
        const foundCriminal = arrayOfCriminals.find((criminalObj) =>{
            return criminalObj.id === parseInt(eventObj.detail.criminalId)
        })
        
        ResetAlibiList(foundCriminal)
    })

    const resetRender = (criminalObj) => {
        const contentTarget = document.querySelector(`#criminal--${criminalObj.id}`)
        
        contentTarget.innerHTML = `
        <h2>${criminalObj.name}</h2>
        <p class="criminal__age"> Age: ${criminalObj.age}</p>
        <p class="criminal__conviction">Crime: ${criminalObj.conviction}</p>
        <p class="criminal__incarceration-start">Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
        <p class="criminal__incarceration-end">Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
        <button class="associate" id="associates--${criminalObj.id}">Associate Alibis</button>
        <button class="associate" id="resetAssociates--${criminalObj.id}">Reset Card</button>
        `
    }
    
    const ResetAlibiList = (criminalObj) =>{
        resetRender(criminalObj)
    }
    
