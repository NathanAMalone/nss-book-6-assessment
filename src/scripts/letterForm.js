// in letterForm, create html for drop down box for author <option>, text box for letter body <input type="text">, radio buttons for topics <input type="radio", drop down box for recipient <option>, button <button class="button" for send letter
    // add eventlistenter that will submit form information into database SendLetter()

import { sendLetter, getAuthors, getRecipients, getTopics} from "./dataAccess.js"
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendLetter") {
        // Get what the user typed into the form fields
        const userAuthor = document.querySelector("select[id='authors']").value
        const userLetter = document.querySelector("input[name='letterBody']").value
        const userTopic = document.querySelector("input[name='letterTopics']:checked").value
        const userRecipient = document.querySelector("select[id='recipients']").value
        const timestamp = new Date().toLocaleDateString();

        // Make an object out of the user input
        const dataToSendToAPI = {
            authorId: parseInt(userAuthor),
            letterBody: userLetter,
            topicId: parseInt(userTopic),
            recipientId: parseInt(userRecipient),
            dateCreated: timestamp
        }

        // Send the data to the API for permanent storage
        sendLetter(dataToSendToAPI)
    }
})

export const LetterForm = () => {
    const authors = getAuthors()
    const recipients = getRecipients()
    const topics = getTopics()
    

    let html = `
        <div class="authorField">
        <label class="letterAuthorField" for="letterAuthor">Author</label> 
            <select class="authors" id="authors">
                <option class="author_field"  value="0">Choose author...</option>
                    ${
                        authors.map(
                            author => {
                                return `<option name="letterAuthor" value="${author.id}">${author.name}</option>`
                            }
                        ).join("")
                    }
            </select>
        </div>
        <div class="field">
            <label class="letter_field" for="letterBody">Letter</label>
            <input type="text" name="letterBody" class="letterBodyInput" />
        </div>
        <section class="radioTopicsFields">
        <label class="topics_field" for="letterTopics">Topics</label>
        <div class="radioField">
            
                        ${
                            topics.map(
                                topic => {
                                return `<input type="radio" name="letterTopics" value="${topic.id}">${topic.name}</input>`
                                }
                        ).join("")
                            }    
            
        </div>
        </section>
        <div class="field">
        <label class="letterrecip_field" for="letterRecipient">Recipient</label> 
            <select class="recipients" id="recipients">
                <option class="recipient_field"  value="0">Choose recipient...</option>
                    ${
                        recipients.map(
                            recipient => {
                                return `<option name="letterRecipient" value="${recipient.id}">${recipient.name}</option>`
                            }
                        ).join("")
                    }
            </select>
        </div>
        
        <button class="button" id="sendLetter">Send Letter</button>
    `

    return html
}