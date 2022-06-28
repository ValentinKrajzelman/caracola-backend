import mongoose from "mongoose";

const tallerSchema = mongoose.Schema({
    titulo: String,
    descripcion: String,
    sede: String,
    imagenSeleccionada: String,
});

const Taller = mongoose.model('Taller', tallerSchema);

export default Taller;