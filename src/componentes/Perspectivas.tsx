import "./styles.scss";
import { IPerspectiva } from "../modelos/IPerspectiva";
import MacroProceso from "./MacroProceso";

export const Perspectiva = (props: IPerspectiva) => {
  const { nombre, macroProcesos } = props;
  return (
    <tbody>
      <tr className="perspectiva">
        <td colSpan={5}>Perpectiva: {nombre}</td>
      </tr>
      {macroProcesos.map((macroProceso, key) => {
        return <MacroProceso {...macroProceso} key={key}></MacroProceso>;
      })}
    </tbody>
  );
};

export default Perspectiva;
