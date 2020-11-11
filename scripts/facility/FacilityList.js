import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js"
import { facilityHTML } from "./Facility.js"
import {useCriminalFacilities, getCriminalFacilities} from '../facility/CriminalFacilityProvider.js'
import {useFacilities, getFacilities} from '../facility/FacilityProvider.js'

const contentElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector('.container')

const render = (facilitiesToRender, allCriminals, allRelationships) =>{
    contentElement.innerHTML = facilitiesToRender.map(
        (facilityObject) =>{
            const criminalsInThisFacility = allRelationships.filter(cf => cf.facilityId === facilityObject.id)

            const criminals = criminalsInThisFacility.map(cf => {
                const matchingCriminalObject = allCriminals.find(criminal => criminal.id === cf.criminalId)
                return matchingCriminalObject
            })

            return facilityHTML(facilityObject, criminals)
        }
    ).join("")
}

const FacilityFinalHTML = () =>{
    getCriminals()
    .then(getCriminalFacilities)
    .then(
        () => {
            // Pull in the data now that it has been fetched
            const facilities = useFacilities()
            const crimFac = useCriminalFacilities()
            const criminals = useCriminals()

            // Pass all three collections of data to render()
            render(facilities, criminals, crimFac)
        }
    )
}

export const FacilityEventListener = () =>{

    eventHub.addEventListener("facilityDOM", event => {
        FacilityFinalHTML()
    })
}