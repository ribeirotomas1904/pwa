const express = require('express')
const app = express()
const port = 3000

app.use(express.static('static'))

let unreadMessages = 0;

app.post('/unreadMessages', (req, res) => {
    unreadMessages++;
    res.status(200).end()
})

app.delete('/unreadMessages', (req, res) => {
    unreadMessages = 0;
    res.status(200).end()
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
