const Sequelize = require('sequelize');
const db={}

const sequelize = new Sequelize('heroku_21d12b47036cce6','baef4768d15273','cf133448', { // nom de la BDD, username, password
host: 'eu-cdbr-west-03.cleardb.net',
dialect: 'mysql',
operatorsAliases:false,
//logging: false,//passer a true pour voir les différentes requêtes effectuées par l'ORM

    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:1000
    }

});
//on exporte pour utiliser notre connexion depuis les autre fichiers.
db.sequelize=sequelize
db.Sequelize=Sequelize

module.exports = db;
