import "./styles.scss";
import { IIndicador } from "../modelos/IIndicador";
import { editarIndicadorAction } from "../state/slices/PerspectivasSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const Indicador = (props: IIndicador) => {
  const dispatch = useDispatch();
  const { nombre, valorActual, valorMeta, anioMeta } = props;
  const cumplimiento =
      valorActual < 0
      ? 0
      : Math.trunc((valorActual / valorMeta) * 100);

  const colorRowStyle =
    cumplimiento > 66 ? "#238823" : cumplimiento > 33 ? "#FFBF00" : "#D2222D";
  const rowStyle = {
    background: `linear-gradient(90deg, ${colorRowStyle} 0%, rgba(255,255,255,1) ${
      cumplimiento + 20
    }%)`,
  };

  const [valorActualState, setValorActual] = useState(valorActual);
  const editarIndicadorValorActual = (e: any) => {
    const numericValue = Number(e.target.value);
    if (numericValue >= 0) {
      setValorActual(numericValue);
      dispatch(
        editarIndicadorAction({ ...props, valorActual: numericValue })
      );
    }
  };

  const [valorMetaState, setValorMeta] = useState(valorMeta);
  const editarIndicadorValorMeta = (e: any) => {
    const numericValue = Number(e.target.value);
    if (numericValue >= 0) {
      setValorMeta(numericValue);
      dispatch(
        editarIndicadorAction({ ...props, valorMeta: numericValue })
      );
    }
  };

  return (
    <tr className="table-item">
      <td>{nombre}</td>
      <td>
        <input
          name="valorActual"
          value={valorActualState}
          type="number"
          onChange={(e) => editarIndicadorValorActual(e)}
        />
      </td>
      <td>
      <input
          name="valorMeta"
          value={valorMetaState}
          type="number"
          onChange={(e) => editarIndicadorValorMeta(e)}
        />
      </td>
      <td>{anioMeta}</td>
      <td style={rowStyle}>{cumplimiento}</td>
    </tr>
  );
};

export default Indicador;
