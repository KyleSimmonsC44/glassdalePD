import { getWitness, useWitness } from "./WitnessDataProvider.js"
import {witnessHTML} from "./Witness.js"

const contentElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")



export const WitnessEventListener = () =>{

    eventHub.addEventListener("witnessDOM", event => {
        const render = (witnessArray) =>{
            
            let witnessHtmlRep = ""
            
            for (const witness of witnessArray){
                witnessHtmlRep += witnessHTML(witness)
                contentElement.innerHTML =
                `${witnessHtmlRep}`
            } 
        }
        getWitness().then(()=>{
            const witnessArray = useWitness()
            render(witnessArray)
        })
        
    })
}