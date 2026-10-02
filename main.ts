import { TareasService } from "./tareas.service";

const servicio = new TareasService();
servicio.crear("Aprender TypeScript");
servicio.crear("Aprender Nest.js");
console.log(servicio.listar());