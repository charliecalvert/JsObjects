# SignInOnly

Demonstrate how to use Passport, Express and Angular to sign in and out
of a web nodejs web application.

## Updates

This section is used to report updates.

### v0.1.1

The major fix here was to make the **emptyCollection** and **insertValidCollection** immediately display the updated data. This caused changes in:

- **public/javascript/control.js**
- **public/javascript/mongo-factory.js**
- **views/main.jade**
- **routes/index.js**

In control.js we started passing in the controller when calling **emptyCollection** and **insertValidCollection.** Also added code for displaying an error. In **main.jade** added code for displaying an error. In **mongo-factory.js** we added code for updating the collection when it is emptied or newly filled with valid data. Also code for reporting errors during that process. Added code to **routes/index.js** to be sure we were properly tracking when all new records had been inserted into the collection.

Details: 

- Removed references to **comments** and **comments-factory** from layout.jade
- In **routes/index.js**, in **readDataAndInsert** moved the initialization of **numberOfScientists** from before to after JSON.parse
- In **mongoFactory.getScientists** declared **allDataNames** with **var**.
- In **mongoFactory.getScientists**  added a path for updating the display of empty collections.
- Adding a means for reporting errors when something goes wrong updating inserting or emptying collections. 
- In **control.js** started passing the controller to **mongo-factory** when emptying the collection or inserting a new valid collection.

