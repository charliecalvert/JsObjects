const getExampleLayout = () => {
    return new Promise((resolve, reject) => {
        fetch('/example-layout')
            .then(response => {
                return response.text();
            })
            .then(html => {
                console.log(html);
                resolve(html);
            })
            .catch(ex => {
                console.log(ex);
                reject(ex);
            });
    });
};

window.onload = function() {
    const exampleLayout = document.getElementById('example-layout');
    getExampleLayout()
        .then(html => {
            exampleLayout.innerHTML = html;
        })
        .catch(ex => {
            alert(ex);
        });
};
