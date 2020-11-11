export const facilityHTML = (fObj, crimFac) =>{
    return`
    <div class ="criminal-style" id="facility--${fObj.id}">
    <h2>${fObj.facilityName}</h2>
    <p>Security Level: ${fObj.securityLevel}</p>
    <p>Capacity: ${fObj.capacity}</p>
    <p>--Criminals Housed--</p>
    ${crimFac.map(crim=> `<p class="noPadding">${crim.name}</p>`).join("")}
</div>
    `
}