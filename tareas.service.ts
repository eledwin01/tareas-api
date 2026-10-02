import { Tarea } from "./tarea";

export class TareasService {
  private tareas: Tarea[] = [];
  private siguienteId = 1;

  crear(titulo: string): Tarea {
    const nueva: Tarea = {
      id: this.siguienteId++,
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
    const tarea = this.buscarPorId(id);
    tarea.completada = true;
    return tarea;
  }

  eliminar(id: number): void {
    const tarea = this.buscarPorId(id);
    this.tareas = this.tareas.filter((t) => t.id !== tarea.id);
  }

  filtrarPorEstado(completada: boolean): Tarea[] {
    return this.tareas.filter((t) => t.completada === completada);
  }

  private buscarPorId(id: number): Tarea {
    const tarea = this.tareas.find((t) => t.id === id);
    if (!tarea) {
      throw new Error(`Tarea con id ${id} no existe`);
    }
    return tarea;
  }
}