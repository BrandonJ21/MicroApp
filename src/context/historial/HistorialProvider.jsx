import { useState } from 'react';

import connectionApi from '../../api/connectionApi';
import { HistorialContext } from './HistorialContext';


const HISTORIAL_INITIAL_STATE = {
  guiaDespachos: [],
  historial: {},
};

export const HistorialProvider = ({ children }) => {
  const [state, setState] = useState(HISTORIAL_INITIAL_STATE);

  const obtenerGuiaDespacho = async () => {
    try {
      const { data } = await connectionApi.get('/guiaDespacho');
      setState({
        ...state,
        guiaDespachos: data.guiaDespachos 
      });
    } catch (error) {
      console.log(error);
    }
  };

  const crearHistorial = async (guiaDespachoId) => {
    try {
      const fecha_hora = new Date()
      const { data } = await connectionApi.post('/historial', {fecha_hora, guiaDespachoId});

      setState({
        ...state,
        historial: data.historial
      });

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <HistorialContext.Provider
      value={{
        ...state,

        obtenerGuiaDespacho,
        crearHistorial,
      }}
    >
      {children}
    </HistorialContext.Provider>
  );
};
