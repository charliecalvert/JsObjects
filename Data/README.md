#JsObjects Data

Here you will find examples of how to use:

- MongoDb
- CouchDb

## CouchDb

- [Hello CouchDb with Request](https://github.com/charliecalvert/JsObjects/tree/master/Data/CouchDb01)
- [CouchDb02 _alldbs and _stats with Request](https://github.com/charliecalvert/JsObjects/tree/master/Data/CouchDb02)
- [CouchDb03 insert and get document with Request](https://github.com/charliecalvert/JsObjects/tree/master/Data/CouchDb03)
- [CouchDb04 insert and get document with Nano](https://github.com/charliecalvert/JsObjects/tree/master/Data/CouchDb04)
- [CouchDb05 use express for hello CouchDb](https://github.com/charliecalvert/JsObjects/tree/master/Data/CouchDb05)
- [CouchDb06 no CouchDb, just read and write JSON](https://github.com/charliecalvert/JsObjects/tree/master/Data/CouchDb06)
- [CouchDb07 First steps toward reading records with Nano](https://github.com/charliecalvert/JsObjects/tree/master/Data/CouchDb07)
- [CouchDb08 Reading and writing records with Nano](https://github.com/charliecalvert/JsObjects/tree/master/Data/CouchDb08)
- [CouchDb09 Like CouchDb08 but with a View](https://github.com/charliecalvert/JsObjects/tree/master/Data/CouchDb09)
- [CouchDb10](https://github.com/charliecalvert/JsObjects/tree/master/Data/CouchDb10)
- [CouchDb11](https://github.com/charliecalvert/JsObjects/tree/master/Data/CouchDb11)
- [CouchDb12](https://github.com/charliecalvert/JsObjects/tree/master/Data/CouchDb12)

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

