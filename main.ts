import { TareasService } from "./tareas.service";

const servicio = new TareasService();
servicio.crear("A");
servicio.crear("B");
servicio.eliminar(1);
servicio.crear("C");
console.log(servicio.listar());