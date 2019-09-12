const express = require('express')
const Sse = require('json-sse')
const bodyParser = require('body-parser')
const cors = require('cors')
const Sequelize = require('sequelize')

const databaseUrl = process.env.DATABASE_URL || 
'postgres://postgres:advertisements@localhost:5432/postgres'

const db = new Sequelize(databaseUrl)

db.sync({force: false})
  .then(() => console.log('Database synced'))

const Message = db.define(
  'message',
  {
    text: Sequelize.STRING,
    user: Sequelize.STRING
  }
)

const Channel = db.define(
  'channel',
  {
    name: Sequelize.STRING
  }
)

const stream = new Sse()

const app = express()

const corsMiddleware = cors()
app.use(corsMiddleware)

const jsonParser = bodyParser.json()
app.use(jsonParser)

app.get('/stream', async (req,res ) => {
  const messages = await Message.findAll()
  const data = JSON.stringify(messages)
  stream.updateInit(data)
  stream.init(req,res)
})

app.post('/message', async (req, res) => {
  const { message, user } = req.body
  
  const entity = await Message.create({
    text: message,
    user
  })

  const messages = await Message.findAll()

  const data = JSON.stringify(messages)

  stream.updateInit(data)
  stream.send(data)

  res.send(entity)
})

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Listening on port ${port}`))
