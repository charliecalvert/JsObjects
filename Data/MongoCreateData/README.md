#MongoCreateData

This program runs from the command line. It has no web or GUI interface. If you run the program with no parmaeters it behaves like this:

    $ node CreateData.js 
    Please pass in an option
    
      Usage: node CreateData.js --option=[OPTION]
        Options are: insert, show, remove 
    
      Examples: 
        node CreateData.js --option=show
        node CreateData.js --option=insert
        node CreateData.js --option=remove


The first time you run the program the output might look like this:

    $ node CreateData.js --option=show
    show
    Constructor called.
    The Mongo URL: mongodb://127.0.0.1:27017/test
    Called getData
    Get Collection Called
    Called QueryMongo.getDatabase: 
    Querying for database: mongodb://127.0.0.1:27017/test
    Leaving get data
    Leaving loadConfig
    []

Now call insert:

    $ node CreateData.js --option=insert
    insert
    Constructor called.
    The Mongo URL: mongodb://127.0.0.1:27017/test
    Called getData
    Called QueryMongo.getDatabase: 
    Querying for database: mongodb://127.0.0.1:27017/test
    Leaving get data
    Leaving loadConfig
    Leaving insert collection
    Inserted: [
        {
            "firstName": "Abe10000",
            "lastName": "Lincoln10000",
            "address": "10000 Green Street",
            "city": "Bellevue",
            "state": "WA",
            "zip": 98002,
            "_id": "537a6ba7ceccfa98291d56dc"
        },
        {
            "firstName": "Abe10001",
            "lastName": "Lincoln10001",
            "address": "10001 Green Street",
            "city": "Bellevue",
            "state": "WA",
            "zip": 98002,
            "_id": "537a6ba7ceccfa98291d56dd"
        },
        {
            "firstName": "Abe10002",
            "lastName": "Lincoln10002",
            "address": "10002 Green Street",
            "city": "Bellevue",
            "state": "WA",
            "zip": 98002,
            "_id": "537a6ba7ceccfa98291d56de"
        },
        {
            "firstName": "Abe10003",
            "lastName": "Lincoln10003",
            "address": "10003 Green Street",
            "city": "Bellevue",
            "state": "WA",
            "zip": 98002,
            "_id": "537a6ba7ceccfa98291d56df"
        },
        {
            "firstName": "Abe10004",
            "lastName": "Lincoln10004",
            "address": "10004 Green Street",
            "city": "Bellevue",
            "state": "WA",
            "zip": 98002,
            "_id": "537a6ba7ceccfa98291d56e0"
        }
    ]


Then call show again:

    $ node CreateData.js --option=show
    show
    Constructor called.
    The Mongo URL: mongodb://127.0.0.1:27017/test
    Called getData
    Get Collection Called
    Called QueryMongo.getDatabase: 
    Querying for database: mongodb://127.0.0.1:27017/test
    Leaving get data
    Leaving loadConfig
    [ { _id: 537a661344e2de3d286870b7,
        firstName: 'Abe10000',
        lastName: 'Lincoln10000',
        address: '10000 Green Street',
        city: 'Bellevue',
        state: 'WA',
        zip: 98002 },
      { _id: 537a661344e2de3d286870b8,
        firstName: 'Abe10001',
        lastName: 'Lincoln10001',
        address: '10001 Green Street',
        city: 'Bellevue',
        state: 'WA',
        zip: 98002 },
      { _id: 537a661344e2de3d286870b9,
        firstName: 'Abe10002',
        lastName: 'Lincoln10002',
        address: '10002 Green Street',
        city: 'Bellevue',
        state: 'WA',
        zip: 98002 },
      { _id: 537a661344e2de3d286870ba,
        firstName: 'Abe10003',
        lastName: 'Lincoln10003',
        address: '10003 Green Street',
        city: 'Bellevue',
        state: 'WA',
        zip: 98002 },
      { _id: 537a661344e2de3d286870bb,
        firstName: 'Abe10004',
        lastName: 'Lincoln10004',
        address: '10004 Green Street',
        city: 'Bellevue',
        state: 'WA',
        zip: 98002 } ]
