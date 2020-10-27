export const Note = (noteObject) => {
    return `<div class="note>
    <h5>Author: ${noteObject.author}</h5>
    <p>Suspect: ${noteObject.suspect}</p>
    <p>Date of Interview: ${noteObject.dateOfInterview}</p>
    <p>Time Note Entered: ${new Date(criminalObj.timestamp.end).toLocaleDateString('en-US')}</p>
    <p>Note: ${noteObject.note}</p>
    </div>
    `
}