const express = require('express')
const app = express()

app.use(express.static('client'))

app.get('/', (req, res) => res.send('Hello DubSpot'))
app.listen(5000, () => console.log('Catching a ride on port 5000'))
