
MySql vs MongoDb


MongoDb is basically a database Server.
MongoDb is highly scalabe as compared to SQL.

Basically MysQl  works on the Schema and table structure format whereas MongoDb has no Schema.

MySQl ->   Database -> Table ->  Rows

MongoDB -> Database(Documents) -> Collections -> Documents

Documents: - A collection of key value pair.
<!-- {
    "name" : "Amit",
    "age" : 27,
    "city" : "Noida",
    "identity" : {
        "adhaar" : 54678987654,
        "pan" : "TUFEU5905D"
    }
} -->

{
    "name" : "Amit",
    "age" : 27,
    "city" : "Noida",
    "identity" : {
        "adhaar" : 54678987654,
        "pan" : "TUFEU5905D"
    },
    "previous" : [
        "amazon", 
        "google"
    ]
}

MongoDb has less relations and data is stored together, mongodb is highly flexible.



<!--  What is BSON ? -->

Binary JSon, is a binary structure encodes type and length information, which allows it to be traversed much more quickly compared to JSON.

eg: {
        "name" : "Sagar",
    }
// it converts the code in the binary so that travsal gets fast.
<!-- How to create DB in mongoose ? -->

//  use latest_db  (if db is exists so it will use that one else it will create that DB)

<!-- How to create collections in DB ? -->

db.students// if it exists it will use that one else it will create that one 

<!-- How to create a Collections in DB ?  -->
db.students.insertOne({name : "Ram", age: 12}) 
<!-- 

 -->
<!-- Find all the documents inside the collections  ?  -->
db.students.find()

<!-- 
    [
  { _id: ObjectId('6646cf7a827cfcee1c46b799'), name: 'Ram', age: 12 },
  { _id: ObjectId('6646cfaa827cfcee1c46b79a'), name: 'Shyam', age: 21 }
]
 -->
id is basically a unique identifier in each of the document.

<!-- Embedded documents in MongoDB -->

<!-- db.students.updateOne({name: "Ram"}, {$set:{idCards:{hasPanCard: false, hasAdhaarCard: true} } })

Above query is to convert nested object into a single object key value pairs
 -->

16 level of document nesting is possible in mongodb and the maximum size can be 16 mb.


// CRUD OPERATIONS 
<!-- Create, Read, Update, Delete     -->


<!-- Read Operations -->
    Read Operations 
<!--  Find vs FindOne   -->

<!-- 
Find always returns the cursor whereas findone always returns the null value 
-->

<!-- Find the students whose age is less than 21 -->

<!-- 
    db.students.find({age: {$lt:12}})

    $lt is basically a reserved keyword in mongodb which means less than 
    $gte greater than
    
 -->

<!-- Find the students whose age is greater than  12 years and less than 34 year

    db.students.find({age : {$gte : 12, $lt: 34}})
 -->



<!-- Methods of Create -->

Create Operations 

<!-- Insert vs InsertOne vs InsertMany -->

<!-- Insert has now become deprecated -->

<!-- InsertOne to insert a single documentsX -->
<!-- InsertMany to insert multiple documents -->



<!-- Update in MongoDB -->

UpdateOne vs UpdateMany

<!-- db.students.updateOne({name: "Sagar"},{$set:{age: 15}}) -->

<!-- db.students.updateMany({age:{$gte:14}}, {$set:{Iseligible:true}}) -->


<!-- Delete in MongoDb -->

<!-- DeleteOne vs DeleteMany in  MongoDB

db.students.DeleteMany({age:13});
db.students.DeleteMany({name: "Sumit"});
db.students.DeleteMany({});  // will delete all records of the dbs -->


<!-- Embedded documents in MongoDBs -->

<!-- Nested Documents and Max size of a documents

    Level of nesting is possible and the size limit is 16 mb


 -->

<!-- Projections in MongoDB
    Select Column Query in MongoDB
     db.students.find({},{name:1, _id: 0})
[
  { name: 'John Doe' },
  { name: 'Jane Smith' },
  { name: 'Robert Brown' },
  { name: 'Emily Davis' },
  { name: 'Michael Johnson' },
  { name: 'Sarah Wilson' },
  { name: 'David Lee' },
  { name: 'Laura Martinez' },
  { name: 'James Anderson' },
  { name: 'Sophia Hernandez' }
]
     -->


<!-- IS mongodb really Schemaless ?

    Actually mongodb is schemaless, but on the application level we define the schema of the models, if we do not do so, it will become more complicated to manipulate the data.
 -->


 <!-- Datatypes in MongoDb
      
      Text,
      Boolean,
      Number ------
                   Integeer
                   NumberLong
                   NumberDecimal
      ObjectID,
      ISODATE,
      Timestamp,
      Emd.Document
 
 
  -->

<!-- Delete Database In MongoDB

    Dropping of the Database
    db.dropDatabase();

    db.products.drop()  // specifically dropping only a single collections 


 -->


 <!-- Difference between insertone and insertMany
 
    InsertOne(data, options)
    InsertMany(data, options)
 
    We will discuss the options here, the first options which is ordered options 
    
    ODERED OPTIONS IN INSERT COMMAND IN MONGODB

    db.books.insertMany([{_id:'C', name:'C', price: 3}, {_id:'E', name:'D', price: 4}], {ordered:false})

    // Basically insertMany runs in a sync manner and doesnt execute futher once it triggers or throws error, but the extra options parameters which is ordered: false make it possible to execute


  -->



  <!-- Schema validations in MongoDB
  
    
  
  
  
  
   -->