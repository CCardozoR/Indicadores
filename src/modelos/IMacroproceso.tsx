import { IIndicador } from "./IIndicador";

export interface IMacroproceso {
    nombre: string,
    indicadores: IIndicador[],
}
