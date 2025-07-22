import { Schema, model } from "mongoose"

const ContactSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true  // Elimina espacios al inicio/final
  }, 
  phone: {
    type: String,
    required: true,
    trim: true
  }

}, { timestamps: true }); // los timestamps me permiten poder definir en mi esquema dos campos 
  // nuevos uno que es createAt la cual genera la fecha y hora exacta en que se creo un elemento
  // y el updateAt: que me permite tambien generar la fecha y hora exacta en que se actualizo por ultima vez 
  // el elemento

export default model("Contacts", ContactSchema);
