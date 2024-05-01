
MySql vs MongoDb


MongoDb is basically a database Server

Basically MysQl  works on the Schema and table structure format whereas MongoDb has no Schema.

MySQl ->   Database -> Table ->  Rows

MongoDB -> Database -> Collections -> Documents


<!--  What is BSON ? -->

Binary JSon, is a binary structure encodes type and length information, which allows it to be traversed much more quickly compared to JSON.

<!-- How to create DB in mongoose ? -->

//  use latest_db  (if db is exists so it will use that one else it will create that DB)

<!-- How to create collections in DB ? -->

db.students// if it exists it will use that one else it will create that one 

<!-- How to create a Collections in DB ?  -->
db.students.insertOne({name : "Ram", age: 12}) 

<!-- Find all the documents inside the collections  ?  -->
db.students.find()

id is basically a unique identifier in each of the document.

<!-- Embedded documents in MongoDB -->

<!-- db.students.updateOne({name: "Ram"}, {$set:{idCards:{hasPanCard: false, hasAdhaarCard: true} } })

Above query is to convert nested object into a single object key value pairs
 -->

16 level of document nesting is possible in mongodb and the maximum size can be 16 mb.




