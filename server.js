const express = require('express');
const http = require('http')
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist/myFirstTodoAngular/')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/myFirstTodoAngular/index.html'));
});

const port = process.env.PORT || 4200;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, '0.0.0.0', () => console.log('running dev server LOCALLY on PORT ' + port +""));
// server.listen(port, () => console.log('running dev server on PORT ' + port +""));