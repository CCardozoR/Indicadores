import { IIndicador } from "./IIndicador";

export interface IMacroproceso {
    id: string,
    nombre: string,
    indicadores: IIndicador[],
}
