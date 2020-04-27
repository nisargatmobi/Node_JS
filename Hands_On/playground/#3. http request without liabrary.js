const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=0a3367d531746e5c819cab88994c8feb&query=37.8267,-122.4233'

const request = http.request(url, (response) => {
 // creating empty variable   
    let data = ''

//checking chunks on response we got. this will work till chunk is present on response
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

// checking for end on response we got
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

// checking for error on response we got 
request.on('error', (error) => {
    console.log('An error', error)
})

request.end()