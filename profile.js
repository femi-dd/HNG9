const express = require('express');
const app = express();

app.get('/backend_track/stage_1/', (request, response) => {
    response.send({
        slackUsername: 'femi_dd',
        backend: true,
        age: 24,
        bio: 'newbie Developer',
    })
});

app.listen(3000);