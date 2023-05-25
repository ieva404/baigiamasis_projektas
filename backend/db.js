const mysql = require("mysql2")

const databaseConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
};

const dbConnection = mysql.createConnection({
    ...databaseConfig,
    database: "",
});

dbConnection.query(
    "CREATE DATABASE IF NOT EXISTS list_of_participants", function (err){
        if (err) throw err;
        console.log("Database list_of_participants created")

        dbConnection.query("USE list_of_participants", (err) => {
            if (err) throw err;

            const participantTableQuery = `CREATE TABLE IF NOT EXISTS participants (
                id INT NOT NULL AUTO_INCREMENT,
                name VARCHAR(45) NOT NULL,
                surname VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL,
                phone VARCHAR(45) NOT NULL,
                primary key (id)
            )`;

            dbConnection.query(participantTableQuery, (err) => {
                if (err) throw err;
                console.log("Participants Table created")
            })

        })
    }
);

module.exports = {
    dbConnection,
};