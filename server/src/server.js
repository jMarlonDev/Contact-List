import express from "express";
import cors from "cors";
import 'dotenv/config'; // Carga las variables de entorno
import connectDB from "./config/dbContacts.js";

// App 
const app = express();

// Middleware cors
app.use(cors())

//Conexión a la base de datos de mongoDB
connectDB()


// Puerto definido desde la variable de entorno
const PORT = process.env.PORT;

app.listen(PORT , () => {
  console.log(`Server running on port ${PORT}`);
})
