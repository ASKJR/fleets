<h1 align="center">Fleets Managment System</h1>
<hr>

## BACKEND
### Stack

<ul>
  <li>Node.js 14</li>
  <li>Express.js</li>
  <li>Rest Api</li>
  <li>MongoDB</li>
  <li>Mongoose ODM</li>
  <li>Mocha & Chai for testing</li>
  <li> Docker </li>
  <li>Eslint - Airbnb Style</li>
</ul>


### Installation

There are two ways of running the application locally in your machine:

<ol>
  <li>
    Using Docker
    <ol>
      <li>You must have docker installed in your machine -> https://docs.docker.com/get-docker/</li>
      <li>In the root directory type the following commands</li> 
      <li>
        
```bash
$ docker build -t api -f Dockerfile-dev .
```
   </li>
         <li>
        
```bash
$ docker run -e 'MONGO_DB_URI=SECRET' -p 3000:3000 -d api
```
   </li>
    </ol>
  </li>
  <li>Installing all dependencies with npm
    <ol>
      <li>You must have Node.js 14 & npm installed in your machine</li>
      <li>Create a file called <b>.env</b> in the root directory and type the following:</li>
      <li>MONGO_DB_URI=SECRET</li>
      <li>In the root directory type the following commands</li>
      <li>
        
```bash
$ npm install
```
   </li>
             <li>
        
```bash
$ npm start
```
   </li>
   </ol>
  </li>
</ol>

### Unit tests
Run the following command in root directory after the API is UP:
```bash
$ npm test
```

### Warning :warning:
In all references to <b>MONGO_DB_URI=SECRET</b> -> The word <b>SECRET</b> must be replaced by another string that will be sent to the evaluator by e-mail.

### Live
Examples:

https://volvo-api.albertokato.com.br/api -> healthcheck

https://volvo-api.albertokato.com.br/api/v1/vehicles -> fetching all vehicles

