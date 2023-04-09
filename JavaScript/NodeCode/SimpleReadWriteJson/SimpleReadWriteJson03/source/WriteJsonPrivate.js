import {clear, showUpdate, getUserInput} from "./utils";

export function writeJsonPrivate() {

    fetch('/write', {
        method: 'POST',
        body: JSON.stringify(getUserInput()),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
        .then(res => res.json())
        .then(response => {
            console.log('Success:', response);
            clear();
            showUpdate(response.person.firstName);
            showUpdate(response.person.lastName);
            showUpdate(response.person.age);
        })
        .catch(error => console.error('Error:', error));
}

