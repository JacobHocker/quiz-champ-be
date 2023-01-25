module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("Users", {
        
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bio: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        totalCrown: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        
    })
    Users.associate = (models) => {
        Users.hasMany(models.Scores,{
            onDelete: 'cascade',
        })
    }

    return Users;
}