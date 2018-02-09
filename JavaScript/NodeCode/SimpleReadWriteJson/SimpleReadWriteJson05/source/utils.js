export const showUpdate = function(textToDisplay) {
    $("#debug").append('<li>' + textToDisplay + '</li>');
};

export function addNames(person) {
    console.log('addNames called');
    $("#firstName").val(person.firstName);
    $("#lastName").val(person.lastName);
    $("#age").val(person.age);
    clear();
    showUpdate(person.firstName);
    showUpdate(person.lastName);
    showUpdate(person.age);
}

export function getUserInput()
{
    return {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        age: $('#age').val()
    };
}

export function clear() {
    $("#debug").empty();
}