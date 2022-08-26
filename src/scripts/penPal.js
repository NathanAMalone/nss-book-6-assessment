// need database.json with arrays of authors, recipients, sentLetters (empty to start)
// setup html and css boilerplate

// in penPal.js, import letterForm and sentLetters
    // export const PenPal and return html building body of website (includes letterForm and sentLetters)

import { LetterForm } from "./letterForm.js";
import { SentLetters } from "./sentLetters.js";

export const PenPal = () => {
    return `
        <h1>Pen Pal Society</h1>
        <section class="letterForm">
            ${ LetterForm() }
        </section>
        <section class="sentLetters">
        <h2>Letters</h2>
            ${ SentLetters() }
        </section>
    `
}