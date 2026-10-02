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

  completar(id: number): Tarea {
    const tarea = this.tareas.find((t) => t.id === id);
    if (!tarea) {
      throw new Error(`Tarea con id ${id} no existe`);
    }
    tarea.completada = true;
    return tarea;
  }
}