import React, { useContext, useState, useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { HistorialContext } from "../context";

export const PickerDespacho = ({obtenerId}) => {
  const { guiaDespachos } = useContext(HistorialContext);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (guiaDespachos.length === 0) return;
    const nuevoArreglo = showValuePicker(guiaDespachos);
    setItems(nuevoArreglo);
  }, [guiaDespachos]);

  useEffect(() => {
    if (!value) return;
    obtenerId(value);
  }, [value])
  

  const showValuePicker = (array) => {
    const value = array.map((guia) => {
      const fechaInicio = new Date(guia.ruta.horaInicio);
      const fechaTermino = new Date(guia.ruta.horaTermino);
      const offsetChile = -3;
      return {
        label: `${guia.ruta.nombreRuta} ${fechaInicio.getUTCHours() + offsetChile}:${fechaInicio.getUTCMinutes()} - ${fechaTermino.getUTCHours() + offsetChile}:${fechaTermino.getUTCMinutes()}`,
        value: `${guia.id}`,
      };
    });
    return value;
  };

  




  return (
    <DropDownPicker
      open={open}
      items={items}
      setOpen={setOpen}
      value={value || ""}
      setValue={setValue}
      setItems={setItems}
      autoScroll
      placeholder={"Seleciona una guía"}
      placeholderStyle={{ color: "blue" }}
    />
  );
};
