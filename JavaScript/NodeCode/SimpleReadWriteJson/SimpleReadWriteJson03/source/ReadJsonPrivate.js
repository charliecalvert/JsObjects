function addNames(data) {
    $("#firstName").val(data.firstName);
    $("#lastName").val(data.lastName);
    $("#age").val(data.age);
}

export function readJsonPrivate() {
    fetch('/read').then(function(response) {
        return response.json();
    })
    .then(addNames)
    .catch((err) => console.log(err))
}
