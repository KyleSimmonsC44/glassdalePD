export const witnessHTML = (witnessObj) =>{
    return`
    <div class ="criminal-style" id="witness--${witnessObj.id}">
            <h2>${witnessObj.name}</h2>
            <p>--Statement--</p>
            <p>${witnessObj.statements}</p>
        </div>
            `}

