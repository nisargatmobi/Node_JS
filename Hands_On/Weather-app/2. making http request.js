const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=0a3367d531746e5c819cab88994c8feb&query=37.8267,-122.4233'
request({ url: url},(error,response)=>{
    const data = JSON.parse(response.body)
    console.log(data.current)
})