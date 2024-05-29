const express = require('express');
const cors = require('cors')
const {conn} = require('./db.js')
const routes = require('./routes/index')
const PORT  = 3001

const server = express();

server.use(express.json());
server.use(cors())

server.get('/', (req, res)=>{
  res.status(200).send(`<h1>Bienvenido</h1>`)
})
server.use(routes)

server.listen(PORT, async () => {
  await conn.sync({force: false})
  console.log('SERVER LISTENING IN PORT ' + PORT)
})