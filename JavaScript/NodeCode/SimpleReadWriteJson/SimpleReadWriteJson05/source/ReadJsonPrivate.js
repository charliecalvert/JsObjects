import {addNames} from "./utils";

export function readJsonPrivate() {
    fetch('/read').then(function(response) {
        return response.json();
    })
    .then(addNames)
    .catch((err) => console.log(err))
}
