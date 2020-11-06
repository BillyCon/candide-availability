# candide-availability

## Local development

For testing and developing use `.env` for the base URL

### To run locally

Install packages - [`npm install`]

Run the application - [`node app.js`] 

## Building and deploying

### Build container
Replace `[name]` with the name of the application

`sudo docker build -t [name]:v1.0 .`

### Run container
Replace `[BASE_URL]` with the base URL.

`sudo docker run -d -e HEALTH_CHECK_BASE_URL=[BASE_URL] [name]:v1.0`
