import {getCriminals, useCriminals} from './CriminalDataProvider.js'
import {criminalHTML} from './Criminal.js'
import { useConviction } from '../convictions/ConvictionDataProvider.js'
import {useOfficers} from '../officers/OfficerProvider.js'
import {useCriminalFacilities, getCriminalFacilities} from '../facility/CriminalFacilityProvider.js'
import {useFacilities, getFacilities} from '../facility/FacilityProvider.js'


export const CriminalFinalHTML = () =>{
    getFacilities()
    .then(getCriminalFacilities)
    .then(
        () => {
            // Pull in the data now that it has been fetched
            const facilities = useFacilities()
            const crimFac = useCriminalFacilities()
            const criminals = useCriminals()

            // Pass all three collections of data to render()
            render(criminals, facilities, crimFac)
        }
    )
}
const contentElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeSelected", event => {
    // console.log("crimeSelected event happened", event.detail.crimeThatWasChosen)
    if (event.detail.crimeThatWasChosen !== "0"){
        const facilities = useFacilities()
        const crimFac = useCriminalFacilities()
        const criminalArray = useCriminals()
        const convictionsArray = useConviction()
        const convictionThatWasChosen = convictionsArray.find(convictionObj =>{
            return convictionObj.id === parseInt(event.detail.crimeThatWasChosen)
            
        })
        const filteredCriminalsArray = criminalArray.filter( criminalObj =>{
            return criminalObj.conviction === convictionThatWasChosen.name
        })
        console.log("filteredCriminalsArray", filteredCriminalsArray)
        
        render(filteredCriminalsArray, facilities,crimFac)
    } else{
        const facilities = useFacilities()
        const crimFac = useCriminalFacilities()
        const criminals = useCriminals()
        render(criminals, facilities, crimFac)
    }
})

const render = (criminalsToRender, allFacilities, allRelationships) => {
    // Step 1 - Iterate all criminals
    contentElement.innerHTML = criminalsToRender.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            return criminalHTML(criminalObject, facilities)
        }
    ).join("")
}

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


        eventHub.addEventListener("criminalDOM", event => {
            CriminalFinalHTML()
        })
