export const criminalHTML = (criminalObj) =>{
    return`
    <div class ="criminal-style">
            <h3>${criminalObj.name}</h3>
            <p class="criminal__age">${criminalObj.age}</p>
            <p class="criminal__conviction">${criminalObj.conviction}</p>
            <p class="criminal__incarceration-start">${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
            <p class="criminal__incarceration-end">${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
        </div>
            `}
