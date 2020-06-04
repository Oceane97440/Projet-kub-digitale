const Sequelize = require('sequelize');
const db={}

const sequelize = new Sequelize('','','', { // nom de la BDD, username, password
host: '',
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
