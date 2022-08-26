// in sentLetters.js, buildSentLetters, thenexport SentLetters = html to create html that should render the author, recipient, date sent, email address of author/recipient, letter topic

import { getAuthors, getRecipients, getSentLetters, getTopics } from "./dataAccess.js"


const buildSentLetters = (sentLetter) => {
    const recipients = getRecipients()

    const foundRecipient = recipients.find(
        (recipient) => {
            return recipient.id === sentLetter.recipientId
        }
    )

    const authors = getAuthors()

    const foundAuthor = authors.find(
        (author) => {
            return author.id === sentLetter.authorId
        }
    )

    const topics = getTopics()

    const foundTopic = topics.find(
        (topic) => {
            return topic.id === sentLetter.topicId
        }
    )

    return `<div class="FindLetter">
                <p class="letterIntro">Dear ${foundRecipient.name} (${foundRecipient.email})</p>
                <p class="letterBody">${sentLetter.letterBody}</p>
                <p class="letterClosing"> Sincerely, ${foundAuthor.name} (${foundAuthor.email})</p>

                <p class="letterDate">Sent on ${sentLetter.dateCreated}</p>

                <p class="letterTopic">${foundTopic.name}</p>
           </div>
    `
}

export const SentLetters = () => {

    const sentLetters = getSentLetters()

    let html ="<section class='sentLetters'>"

    const listLetters = sentLetters.map(buildSentLetters)

    html += listLetters.join("")
    html += "</section>"
    
    return html
}
    