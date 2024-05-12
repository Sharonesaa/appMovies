require("dotenv").config();

const mongoose = require("mongoose");

async function connectionDb() {
    try {

        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.4fjrsvf.mongodb.net/PROJECTHENRY?retryWrites=true&w=majority&appName=Cluster`)


    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
}

module.exports = {
    connectionDb
}
