var mongoose = require('mongoose');

let bd = 'magento';
let port = '27017';
let host = 'loclhost';

class Database {
    constructor() {
        this.conectar();
    }

    conectar() {
        mongoose.connect(`mongodb:// ${host}:${port}/${bd}`)
            .then(result => console.log('Se conectó a mongodb'))
            .catch(error => console.log(error));
    }
}

module.exports = new Database();