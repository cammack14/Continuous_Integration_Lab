var express = require('express')
var app = express()

// The code below will display 'Task 2!' to the browser when you go to http://localhost:3000
app.get('/', (req, res) => {
    // the .status(200) isn't necessary since it is the default return status
    res.status(200).send('Task 2!')
})

app.listen(3001, () => {
    console.log('Example app listening on http://localhost:3001')
})

module.exports = app;
