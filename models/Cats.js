module.exports = (sequelize, DataTypes) => {

    const Cats = sequelize.define("Cats", {
        
        catName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        catDescription: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        catImage: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
    })

    Cats.associate = (models) => {
        Cats.hasMany(models.Quizs,{
            onDelete: 'cascade',
        })
    }
    return Cats
}