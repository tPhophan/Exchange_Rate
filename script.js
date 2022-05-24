const fs = require('fs');

fs.readFile('d:\\Currency Exchange Rate\\user.json', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }

    // parse JSON object
    const user = JSON.parse(data.toString());

    // print JSON object
    console.log(user);
});