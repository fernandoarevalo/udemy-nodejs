const fs = require('fs');

fs.open(Buffer.from('./destructuracion.js'), 'r', (err, fd) => {
    if (err) throw err;
    fs.close(fd, (err) => {
        if (err) throw err;
    });
});