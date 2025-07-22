import express from "express";
import cors from "cors";
import 'dotenv/config'; // Carga las variables de entorno


// App 
const app = express();

// Middleware cors
app.use(cors())
// Puerto definido desde la variable de entorno
const PORT = process.env.PORT;

app.listen(PORT , () => {
  console.log(`Server running on port ${PORT}`);
})