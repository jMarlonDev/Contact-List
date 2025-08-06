import express from "express";
import cors from "cors";
import 'dotenv/config'; // Carga las variables de entorno
import connectDB from "./config/dbContacts.js";
import router from "./routes/contactRouter.js";

// App 
const app = express();

// Middleware cors
app.use(cors())
app.use(express.json());

//Conexión a la base de datos de mongoDB
connectDB()

app.use("/contacts",router)
// Puerto definido desde la variable de entorno
const PORT = process.env.PORT;

app.listen(PORT , () => {
  console.log(`Server running on port ${PORT}`);
})
