import { Tarea } from "./tarea";

export class TareasService {
  private tareas: Tarea[] = [];

  crear(titulo: string): Tarea {
    const nueva: Tarea = {
      id: this.tareas.length + 1,
      titulo,
      completada: false,
    };
    this.tareas.push(nueva);
    return nueva;
  }

  listar(): Tarea[] {
    return this.tareas;
  }
}