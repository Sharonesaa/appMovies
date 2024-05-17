const{app} = require("./src/server/index.js")
const{connectionDb} = require("./src/config/conDb.js")

connectionDb().then(() => {
    console.log("Conexión exitosa a la base de datos");
    app.listen(3000, () => {

        // const info = await axios.get("url")
        // movie.bulkwrite (info) 
        console.log("Servidor iniciado en el puerto 3000");
    });
}).catch(err => {
    console.error("Error al conectar a la base de datos:", err);
});