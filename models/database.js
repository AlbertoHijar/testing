module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Database',
        { 
            usuario: DataTypes.STRING,
            contraseña: DataTypes.INTEGER,
        });    
}