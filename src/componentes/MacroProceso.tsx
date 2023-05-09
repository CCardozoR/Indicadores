import "./styles.scss";
import { IMacroproceso } from "../modelos/IMacroproceso";
import Indicador from "./Indicador";
import MacroProcesoGrafica from "./MacroProcesoGrafica";

export const MacroProceso = (props: IMacroproceso) => {
  const { nombre, indicadores } = props;
  return (
    <>
      <tr className="macroproceso">
        <td colSpan={5}>Macroproceso: {nombre}</td>
      </tr>
      <MacroProcesoGrafica {...props}></MacroProcesoGrafica>
      <tr>
        <td>Nombre</td>
        <td>Valor Actual</td>
        <td>Valor Meta</td>
        <td>Año Meta</td>
        <td>% Cumplimiento</td>
      </tr>
      {indicadores.map((indicador) => {
          return <Indicador {...indicador}></Indicador>;
        })}
    </>
  );
};

export default MacroProceso;
