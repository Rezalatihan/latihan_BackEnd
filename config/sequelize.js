const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    database: 'eduwork_cruds_sequlize',
    host: 'localhost',
    username: 'root',
    password: '',
    dialect: 'mysql'
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('connet')
    } catch (error) {
        console.error('error', error)
    }
})();

module.exports = sequelize