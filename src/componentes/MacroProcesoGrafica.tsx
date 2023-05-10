import "./styles.scss";
import { IMacroproceso } from "../modelos/IMacroproceso";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

interface IIndicadorGrafico {
  nombre: string;
  porcentajeCumplimiento: number;
}
export const MacroProcesoGrafica = (props: IMacroproceso) => {
  const indicadoresData: IIndicadorGrafico[] = props.indicadores.map(
    (indicador) => {
      return {
        nombre:
          indicador.nombre.length > 60
            ? indicador.nombre.substring(0, 60) + "..."
            : indicador.nombre,
        porcentajeCumplimiento:
          indicador.valorActual > indicador.valorMeta
            ? 100
            : indicador.valorActual<0?0:(indicador.valorActual / indicador.valorMeta) * 100,
      };
    }
  );

  if (indicadoresData.length < 3) {
    return <></>;
  }

  return (
    <tr>
      <td colSpan={5}>
        <div style={{ width: "100%", height: 400 }}>
          <ResponsiveContainer>
            <RadarChart
              cx={512}
              cy={200}
              outerRadius={150}
              width={1024}
              height={500}
              data={indicadoresData}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="nombre" />
              <PolarRadiusAxis domain={[0, 100]} />
              <Radar
                name="Indicadores"
                dataKey="porcentajeCumplimiento"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.4}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </td>
    </tr>
  );
};

export default MacroProcesoGrafica;
