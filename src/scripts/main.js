// in main.js, import fetchAuthors etc.
    // export mainContainer=document.querySelector(#container)
    // render     html fetchAuthors .then fetchRecipients
        // mainContainer.html = PenPal()
    // event listener for stateChanged
    // render()

import { fetchAuthors, fetchRecipients } from "./dataAccess.js";
import { PenPal } from "./penPal.js"

export const mainContainer = document.querySelector("#container")

const render = () => {
    fetchAuthors()
    .then(() => fetchRecipients())
    .then(
        () => {
            mainContainer.innerHTML = PenPal()
        }
    )
}

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

render()