var request = require('request');
var setServer = require('../set-server');
require('request-debug')(request);
const menu = require('./menu');


// var servers = ["http://127.0.0.1:5984/", "http://192.168.2.30:5984/"];
// var index = 0;
const server = setServer.userPassUrl('admin', 'foo') + '/';
console.log(server);
const databaseName = "bcdata";
const docName = "data_one";

function showJson(json) {
    const data = JSON.parse(json);
    console.log(JSON.stringify(data, null, 4));
}

const sayHello = function () {
    request(server, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body);
        } else {
            console.log(error);
        }
    })
};

const showDatabases = function () {
    const command = server + '_all_dbs';
    console.log("showDatabases called with: ", command);
    request(command, function (error, response, body) {
        if (error) {
            console.log(error);
        } else if (response.statusCode === 200) {
            console.log(body);
            const bodyString = JSON.parse(body);
            for (let i = 0; i < bodyString.length; i++) {
                console.log(bodyString[i]);
            }
        } else {
            console.log("Error status code: ", response.statusCode);
        }
    })
};

const createDatabase = function () {
    request.put(server + databaseName, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body);
        } else {
            console.log(error);
        }
    })
};

const data = {
    "firstName": "Sarah",
    "lastName": "Patton",
    "age": 3
};

const putData = function () {


    const postum = server + databaseName + ' -d "' + JSON.stringify(data) + '" -H "Content-Type: application/json"';
    console.log(postum);
    request.post(postum,
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                console.log('Insert Data');
                console.log(body);
            } else {
                console.log(showJson(response.body));
            }
        });
};

const bulkData = {
    "docs": [
        {
            "firstName": "Sarah",
            "lastName": "Patton",
            "age": 3
        },
        {
            "firstName": "Mike",
            "lastName": "Faster",
            "age": 4
        }
    ]
};

const putBulkData = function () {

    const req = {
        "method": "POST",
        "uri": `${server + databaseName}/_bulk_docs`,
        "headers": {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        "json": bulkData
    };
    console.log(req);
    request.post(req,
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                console.log('Insert Data');
                console.log(body);
            } else {
                //console.log(showJson(response.body));
                console.log(response.body);
            }
        });
};


function putDoc() {
    const req = {
        "method": "PUT",
        "uri": server + databaseName + "/" + docName,
        "headers": {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        "doc": "data",
        "body": JSON.stringify(data)
    };

    console.log(req);

    request(req, function (error, response, body) {
        if (response.statusCode === 201) {
            console.log('document saved');
        } else {
            console.log('error: ' + response.statusCode);
            console.log(body);
        }
    })
}


const getAllDocs = function () {
    const req = server + databaseName + '/_all_docs';
    request.get(req, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body);
        } else {
            console.log(error);
        }
    })
};

const getDoc = function () {
    const req = server + databaseName + '/' + docName;
    request.get(req, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body);
            console.log('firstName: ' + JSON.parse(body).firstName);
        } else {
            console.log(error);
        }
    })
};

const handleInput = function (option) {
//const option = 'sayHello';

    switch (option) {
        case 'say':
            sayHello();
            break;

        case 'create':
            createDatabase();
            break;

        case 'show':
            showDatabases();
            break;

        case 'put':
            putBulkData();
            break;

        case 'get':
            getDoc();
            break;

        case 'getAll':
            getAllDocs();
            break;

        default:
            return;
    }

};

/*
menu.showMenu((option) => {
    console.log(option);
});
*/

menu.showMenu(handleInput);
