import express from 'express'

const app = express()

app.get('/', (request, response) => {
    response.send('você usou o método get em /')
})

app.post('/', (request, response) => {
    response.send('você usou o método post em /')
})

app.put('/', (request,response) => {
    response.send('usando o put')
})

app.delete('/', (request, response) => {
    response.send('usando o delete')
})

app.listen(4000)