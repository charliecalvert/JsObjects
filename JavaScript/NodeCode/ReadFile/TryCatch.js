function parseTry(jsonToParse) {
    console.log(jsonToParse);
    try {
        var jsonObject = JSON.parse(jsonToParse);
        console.log(jsonObject.operanda);
        console.log(jsonObject.operandb);
    } catch (e) {
        console.log(instanceof e);
        throw (JSON.stringify({
            "ElfError": "Could not parse",
            "Could_Not_Parse_JSON": "error",
            "Error": e
        }, null, 4));
    };
}

// Create a JSON object, but declare the entire object as a string.
// This is what JSON looks like when read it from disk with fs.readFile.
var jsonToParse = '{ "operanda": 1, "operandb": 2 }';

parseTry(jsonToParse);

jsonToParse = '{ "operanda": 1, "operandb": }';

parseTry(jsonToParse);
