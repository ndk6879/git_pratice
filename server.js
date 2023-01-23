const express = require('express');
const path = require('path');
const app = express();


app.listen(8080, function() {
    console.log('listening on 8080')
})

app.get('/pet', function(요청, 응답) { 
  응답.send('펫용품 사시오')
})

app.use(express.static(path.join(__dirname, 'react-practice/build')));
app.get('/', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/react-practice/build/index.html'));
});

app.use(express.static(path.join(__dirname, 'board_project/build')));

app.get('/', function (요청, 응답) {
    응답.sendFile(path.join(__dirname, '/board_project/build/index.html'));
  });