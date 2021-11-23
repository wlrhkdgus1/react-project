const express = require('express');
const path = require('path');
const app = express();

const http = require('http').createServer(app);
http.listen(8080, function () {
  console.log('listening on 8080')
}); 

app.use( '/', express.static( path.join(__dirname, 'public') ) )
app.use('/react', express.static( path.join(__dirname, 'reactex/build') ) )

app.get('/', function(요청,응답){
    응답.sendFile( path.join(__dirname, 'reactex/build/index.html'))
})

app.get('*', function(요청,응답){
    응답.sendFile( path.join(__dirname, 'reactex/build/index.html'))
})