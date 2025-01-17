import Server from "./class/server";
import router from "./routes/router";
import bodyParser from "body-parser";
import cors from "cors";

//crear server
const server = new Server();

// Body Parser
server.app.use( bodyParser.urlencoded({ extended: true }));
server.app.use( bodyParser.json() );

// CORS
server.app.use( cors({ origin: true, credentials: true }) )

// Rutas de servicios 
server.app.use('/', router);

server.start( () => {
    console.log(`Servidor corriend ene el puerto ${ server.port }`);
});