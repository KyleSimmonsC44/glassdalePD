import {getCriminals, useCriminals} from './CriminalDataProvider.js'
import {criminalHTML} from './Criminal.js'
import { useConviction } from '../convictions/ConvictionDataProvider.js'
import {useOfficers} from '../officers/OfficerProvider.js'


export const CriminalFinalHTML = () =>{
        // how do we get data?
    getCriminals().then(()=>{
        // where do we want to add the html?
        const contentElement = document.querySelector(".criminalsContainer")
        // we need to add the data now, to start we have to assign it to a variable
        const criminalArray = useCriminals()
        
        render(criminalArray)
    })
}
const contentElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeSelected", event => {
    // console.log("crimeSelected event happened", event.detail.crimeThatWasChosen)
    if (event.detail.crimeThatWasChosen !== "0"){

        const criminalArray = useCriminals()
        const convictionsArray = useConviction()
        const convictionThatWasChosen = convictionsArray.find(convictionObj =>{
            return convictionObj.id === parseInt(event.detail.crimeThatWasChosen)
            
        })
        const filteredCriminalsArray = criminalArray.filter( criminalObj =>{
            return criminalObj.conviction === convictionThatWasChosen.name
        })
        console.log("filteredCriminalsArray", filteredCriminalsArray)
        
        render(filteredCriminalsArray)
    } else{
        const criminalArray = useCriminals()
        render(criminalArray)
    }
})

const render = (criminalArray) =>{

    let criminalHtmlRep = ""
    // loop thru array and add objects to html string
    for (const criminal of criminalArray){
        criminalHtmlRep += criminalHTML(criminal)
        // put the string into the html
        contentElement.innerHTML =
        `${criminalHtmlRep}`
    } }

    eventHub.addEventListener("officerSelected", event => {
        // console.log("crimeSelected event happened", event.detail.crimeThatWasChosen)
        if (event.detail.officerThatWasChosen !== "0"){
    
            const criminalArray = useCriminals()
            const officersArray = useOfficers()
            const officerThatWasChosen = officersArray.find(officerObj =>{
                return officerObj.id === parseInt(event.detail.officerThatWasChosen)
                
            })
            const filteredCriminalsArray = criminalArray.filter( criminalObj =>{
                return criminalObj.arrestingOfficer === officerThatWasChosen.name
            })
            console.log("filteredCriminalsArray", filteredCriminalsArray)
            
            render(filteredCriminalsArray)
        } else{
            const criminalArray = useCriminals()
            render(criminalArray)
        }
    })