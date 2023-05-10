import { IMacroproceso } from "./IMacroproceso";

export interface IPerspectiva {
    id: string,
    nombre: string,
    macroProcesos: IMacroproceso[],
}