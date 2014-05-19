#JsObjects Data

Here you will find examples of how to use:

- MongoDb
- CouchDb

##MongoTalk.json

When using the Mongo examples, you have to specify what database
you want to use. Many of the examples use a file called **MongoTalk.json**
to help you specify that file. Here is how to up **MongoTalk.json**. 

Create a file called **MongoTalk.json** in **$HOME/Config**. That is, 
place it in a subdirectory of your home directory. The subdirectory 
should be called **Config**. Here is the contents of the file:

    {
        "urls": [
            "mongodb://127.0.0.1:27017/test",
            "mongodb://USERNAME:PASSWORD@dsXXX.mongolab.som:XXXX/DATABASE"
        ],
        "selectedUrl": 0
    }

### Details

Here are more detailed directions on how to create **MongoTalk.json**. 

Create the directory:

    mkdir ~/Config
    
Open the file you want to create in an editor:

    geany ~/Config/MongoTalk.json

Copy in the contents of the JSON object shown above.

Open up [http://jsonlint.com/](http://jsonlint.com/) and paste in the 
contents of your file. Confirm that it is valid JSON. Save the file.
