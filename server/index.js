const express = require('express');
bodyParser = require('body-parser')
ctrl = require('./controller')

const app = express();

app.use(bodyParser.json())


//Endpoints fo there
app.get(`/api/getFriends`, ctrl.friendGetter);

app.post(`/api/addFriend`, ctrl.friendAdder);

app.delete(`/api/deleteFriend/:id`, ctrl.friendDeleter)

// app.put('/api/editFriend/:id', ctrl.friendUpdater)

const port = 3500;

app.listen(port, () => console.log('Eeeehhhoooooo'))