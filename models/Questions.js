module.exports = (sequelize, DataTypes) => {


    const Questions = sequelize.define("Questions", {
        
        questionContent: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        questionImage: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        optionA: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        optionB: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        optionC: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        optionD: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
    

    return Questions
};