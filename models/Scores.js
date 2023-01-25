module.exports = (sequelize, DataTypes) => {

    const Scores = sequelize.define("Scores", {
        
        quizScore: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        crownAmount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        
        
    })

    return Scores
}