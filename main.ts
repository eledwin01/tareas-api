import { TareasService } from "./tareas.service";

const servicio = new TareasService();
servicio.crear("Aprender TypeScript");
servicio.crear("Aprender Nest.js");
servicio.completar(1);
console.log(servicio.listar());