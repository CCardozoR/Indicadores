import { createSlice } from "@reduxjs/toolkit";
import { perspectivas } from "../../data/Perspectivas";
import { IPerspectiva } from "../../modelos/IPerspectiva";
import { IIndicador } from "../../modelos/IIndicador";

function editarIndicador(
  perspectivas: IPerspectiva[],
  indicadorEditado: IIndicador
) {
  perspectivas.forEach((perspectiva) => {
    perspectiva.macroProcesos.forEach((macroProceso) => {
      macroProceso.indicadores = macroProceso.indicadores.map((indicador) => {
        if (indicador.id === indicadorEditado.id) {
          return indicadorEditado;
        } else {
          return indicador;
        }
      });
    });
  });
  return perspectivas;
}

function obtenerPerspectivas(){
  if(localStorage.getItem('perspectivas') != null){
    return JSON.parse(localStorage.getItem('perspectivas')||'{}');
  }else{
    return perspectivas;
  }
}

export const perspectivasSlice = createSlice({
  name: "perspectivas",
  initialState: {
    perspectivas: obtenerPerspectivas(),
  },
  reducers: {
    editarIndicadorAction: (state, action) => {
      state.perspectivas = editarIndicador(state.perspectivas, action.payload);
      localStorage.setItem('perspectivas', JSON.stringify(state.perspectivas));
    },
  },
});

// Action creators are generated for each case reducer function
export const { editarIndicadorAction } = perspectivasSlice.actions;

export default perspectivasSlice.reducer;
