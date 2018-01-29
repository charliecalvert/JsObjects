function writeJsonPrivate() {

    const userInput = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        age: $('#age').val()
    };

    fetch('/write', {
        method: 'POST',
        body: JSON.stringify(userInput),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
        .then(res => res.json())
        .then(response => console.log('Success:', response))
        .catch(error => console.error('Error:', error));
}

