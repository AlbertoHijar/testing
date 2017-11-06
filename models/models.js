var path = require('path');

var Sequelize = require ('sequelize');
var sequelize = new Sequelize(null, null, null, 
    {
        dialect: "sqlite", storage: "database.sqlite"
    });

var Database = sequelize.import(path.join(__dirname,'database'));

exports.Database = Database;

sequelize.sync().then(function(){
    Database.count().then(function (count){
        if(count === 0){
            Database.create({
                usuario: 'Yo',
                contraseña: 1
            }).then(function(){console.log("Base de datos inicializada")});
        };
    });
});
