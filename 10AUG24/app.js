const exp = require('express');
const app = exp();
const fs = require('fs');
const path = require('path');
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(6336, () => {
    console.log('Server started on http://localhost:6336');
    // not accessible outside the container--hence the mapping
});
