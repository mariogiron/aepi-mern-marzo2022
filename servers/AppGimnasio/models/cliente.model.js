const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from clientes', (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    getAll
}




