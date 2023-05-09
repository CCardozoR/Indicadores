import { IMacroproceso } from "./IMacroproceso";

export interface IPerspectiva {
    nombre: string,
    macroProcesos: IMacroproceso[],
}