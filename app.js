require('dotenv').config();

const request = require('request');
const baseUrl = process.env.HEALTH_CHECK_BASE_URL == undefined ? 'https://candidegardening.com' : process.env.HEALTH_CHECK_BASE_URL;
const pingDelay = 10000;
const options = {
    method: 'get',
    url: baseUrl + '/health/live'
}

//Pings every 10 seconds
setInterval(() => {
    request(options, (err, res, body) => {
        console.log(Date())
        if (err) {
            console.log(err);
        } else {
            if (res.statusCode != 200){
                //not healthy
                console.log(' GET /health/live - Failed with status code ' + res.statusCode);
            } else {
                //healthy
                console.log('GET /health/live - OK ' + res.statusCode);
            }
        }
    })
}, pingDelay)
