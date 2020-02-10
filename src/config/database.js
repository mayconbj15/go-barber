module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'database', //revisar esse nome
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    },
};