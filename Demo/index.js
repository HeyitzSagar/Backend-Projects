const express = require('express')
const app = express()
const port = 3000




const Person = mongoose.model('Person', yourSchema);

const person = await Person.findOne({ 'name.last': 'Ghost' }, 'name occupation');
// Prints "Space Ghost is a talk show host".
console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))