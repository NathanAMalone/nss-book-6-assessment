// in dataAccess, set up applicationState with empty arrays as objects
    // fetch API   const API = localhost
    // store data in application state to be able to convert into HTML
        // fetch authors(fetchAuthors), getauthors(getAuthors)
            // repeat for recipients and sentLetters
// in dataAccess, create SendLetter that will POST information to database.json

const mainContainer = document.querySelector("#container")


const applicationState = {
    authors: [],
    recipients: [],
    sentLetters: []
}

const API = "http://localhost:8088"

export const fetchAuthors = ()  => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then(
            (authorData) => {
                applicationState.authors = authorData
            }
        )
}

export const getAuthors = () => {
    return applicationState.authors.map(author => ({...author}))
}

export const fetchRecipients = ()  => {
    return fetch(`${API}/recipients`)
        .then(response => response.json())
        .then(
            (recipientData) => {
                applicationState.recipients = recipientData
            }
        )
}

export const getRecipients = () => {
    return applicationState.recipients.map(recipient => ({...recipient}))
}

export const fetchSentLetters = ()  => {
    return fetch(`${API}/sentLetters`)
        .then(response => response.json())
        .then(
            (sentLettersData) => {
                applicationState.sentLetters = sentLettersData
            }
        )
}

export const getSentLetters = () => {
    return applicationState.sentLetters.map(sentLetter => ({...sentLetter}))
}

export const fetchTopics = ()  => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (topicsData) => {
                applicationState.topics = topicsData
            }
        )
}

export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
}

export const sendLetter = (userSendLetter) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userSendLetter)
    }

    return fetch(`${API}/sentLetters`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}