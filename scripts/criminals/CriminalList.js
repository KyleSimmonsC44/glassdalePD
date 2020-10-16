import {getCriminals, useCriminals} from './CriminalDataProvider.js'
import {criminalHTML} from './Criminal.js'


export const CriminalFinalHTML = () =>{

    getCriminals().then(()=>{
        const criminalArray = useCriminals()
        // where do we want to add the html??
        const contentElement = document.querySelector(".criminalsContainer")
        // we need to add the data now, to start we have to assign it to a variable
        
        // now make an empty string to store the html
        let criminalHtmlRep = ""
        
        for (const criminal of criminalArray){
            criminalHtmlRep += criminalHTML(criminal)
        }
        
        contentElement.innerHTML +=
        `${criminalHtmlRep}`
    })
}
