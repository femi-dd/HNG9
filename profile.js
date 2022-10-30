const express = require('express');
const app = express();

app.set('')

app.get('/backend_track/stage_1/', (request, response) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.send({
        slackUsername: 'femi_dd',
        backend: true,
        age: 24,
        bio: 'newbie Developer',
    })
});

app.listen(3000);