export const showUpdate = function(textToDisplay) {
    const ul = document.getElementById("debug");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(textToDisplay));
    li.setAttribute("id", textToDisplay); // added line
    ul.appendChild(li);
};

export function addNames(person) {
    console.log('addNames called');
    document.getElementById('firstName').value = person.firstName;
    document.getElementById('lastName').value = person.lastName;
    document.getElementById('age').value = person.age;
    clear();
    showUpdate(person.firstName);
    showUpdate(person.lastName);
    showUpdate(person.age);
}

export function getUserInput() {

    return {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        age: document.getElementById('age').value
    };
}

export function clear() {
    const el = document.getElementById('debug');
    el.innerHTML = '';
}