export const criminalHTML = (criminalObj) =>{
    return`
    <div class ="criminal-style">
            <h2>${criminalObj.name}</h2>
            <p class="criminal__age"> Age: ${criminalObj.age}</p>
            <p class="criminal__conviction">Crime: ${criminalObj.conviction}</p>
            <p class="criminal__incarceration-start">Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
            <p class="criminal__incarceration-end">Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
        </div>
            `}
