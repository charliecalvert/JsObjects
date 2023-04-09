#JsObjects Data

Here you will find examples of how to use:

- MongoDb
- CouchDb

## MongoDb

As of March 1, 2018, I believe the following both work.

- [MongoTalk][mt]
- [MongoBootStrap][mbs]

[mbs]: https://github.com/charliecalvert/JsObjects/tree/master/Data/MongoBootstrap
[mt]: https://github.com/charliecalvert/JsObjects/tree/master/Data/MongoTalk

## CouchDb

- [CouchDb01 Hello CouchDb with Request](https://github.com/charliecalvert/JsObjects/tree/master/Data/CouchDb01)
- [CouchDb02 _alldbs and _stats with Request](https://github.com/charliecalvert/JsObjects/tree/master/Data/CouchDb02)
- [CouchDb03 insert and get document with Request](https://github.com/charliecalvert/JsObjects/tree/master/Data/CouchDb03)
- [CouchDb04 insert and get document with Nano](https://github.com/charliecalvert/JsObjects/tree/master/Data/CouchDb04)
- [CouchDb05 use express for hello CouchDb](https://github.com/charliecalvert/JsObjects/tree/master/Data/CouchDb05)
- [CouchDb06 no CouchDb, just read and write JSON](https://github.com/charliecalvert/JsObjects/tree/master/Data/CouchDb06)
- [CouchDb07 First steps toward reading records with Nano](https://github.com/charliecalvert/JsObjects/tree/master/Data/CouchDb07)
- [CouchDb08 Reading and writing records with Nano](https://github.com/charliecalvert/JsObjects/tree/master/Data/CouchDb08)
- [CouchDb09 Like CouchDb08 but with a View](https://github.com/charliecalvert/JsObjects/tree/master/Data/CouchDb09)
- [CouchDb10 Like CouchDb09 but with handlebars](https://github.com/charliecalvert/JsObjects/tree/master/Data/CouchDb10)
- [CouchDb11 Like CouchDb10 but with funky attachments. Delete this example?](https://github.com/charliecalvert/JsObjects/tree/master/Data/CouchDb11)
- [CouchDb12 Like CouchDb11 but with better attachments](https://github.com/charliecalvert/JsObjects/tree/master/Data/CouchDb12)

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

Here is how it might look on Cloud Nine:

```javascript
    {
        "urls": [
            "mongodb://0.0.0.0:27017/test",
            "mongodb://USERNAME:PASSWORD@dsXXX.mongolab.som:XXXX/DATABASE"
        ],
        "selectedUrl": 0
    }
```

You might double check the IP against the Cloud 9 environment variable $IP. It should be 0.0.0.0, but type this at the Cloud 9 bash shell to confirm:

<pre>
echo $IP
</pre>


### Details

Here are more detailed directions on how to create **MongoTalk.json**.

Create the directory:

    mkdir ~/Config

Open the file you want to create in an editor:

    geany ~/Config/MongoTalk.json

Copy in the contents of the JSON object shown above.

Open up [http://jsonlint.com/](http://jsonlint.com/) and paste in the
contents of your file. Confirm that it is valid JSON. Save the file.
