const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=0a3367d531746e5c819cab88994c8feb&query=37.8267,-122.4233'
request({ url: url},(error,response)=>{
    const data = JSON.parse(response.body)
    console.log("current temp is " + data.current.temperature + " current pressure is " + data.current.pressure)
})


const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmlzYXJndHVya2UiLCJhIjoiY2s5ZTRua2FxMDF0ZTNsbXBuYXFmdW82dyJ9.s7SkV5CDHbA4BMFB12tCpw&limit=1'


request({ url: geoCodeUrl, json: true },(error,response)=>{
    const latitude = response.body.features[0].center[1]
    const langitude = response.body.features[0].center[0]
    console.log("latitude is : "+latitude," and langitude is : "+langitude)
    
})