import './styles.scss';
import { IIndicador } from "../modelos/IIndicador";

export const Indicador = (props: IIndicador) => {
    const {nombre, valorActual, valorMeta, anioMeta } = props;
    const cumplimiento = (valorActual/valorMeta)*100;
    const colorRowStyle = cumplimiento > 66 ? '#238823' : (cumplimiento > 33 ?  '#FFBF00': '#D2222D');
    const rowStyle = {
      background: `linear-gradient(90deg, ${colorRowStyle} 0%, rgba(255,255,255,1) ${cumplimiento+20}%)`,
    };
    return (
      <tr className="table-item" style={rowStyle}>
        <td>{nombre}</td>
        <td>{valorActual}</td>
        <td>{valorMeta}</td>
        <td>{anioMeta}</td>
        <td>{cumplimiento}</td>    
      </tr>
    );
  }
  
export default Indicador;
  