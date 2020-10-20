let conviction = []

export const useConviction = () => {
    return conviction.slice()
}

export const getConviction = () => {
    return fetch("https://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(
            parsedConviction => {
                conviction = parsedConviction
            }
        )
}