import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { PickerDespacho } from "../component/Picker";
import { HistorialContext } from "../context";

export const GuiaDespacho = ({navigation}) => {
  const { obtenerGuiaDespacho, crearHistorial } = useContext(HistorialContext);
  const [despachoId, setDespachoId] = useState();

  useEffect(() => {
    obtenerGuiaDespacho();
  }, []);

  const obtenerId = (value) => {
    setDespachoId(value)
  }

  const insertarHistorial = () => {
    crearHistorial(despachoId);
    
    navigation.replace('Inicio');
  }

  return (
    <View style={styles.container}>
      <View style={{ ...styles.guiastyle, zIndex: 99 }}>
        <View>
          <Text style={styles.textoguia}>Guia de Despacho</Text>
        </View>
        <View style={styles.pickerStyle}>
          <PickerDespacho obtenerId={obtenerId} />
        </View>
      </View>
      <View style={styles.crearHistorial}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={insertarHistorial}
          style={styles.botonCrearHistorial}
        >
          <Text style={styles.textButtonHistorial}>Crear Historial</Text>
        </TouchableOpacity>
{/* 
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.replace('Inicio')}
          style={styles.botonCrearHistorial}
        >
          <Text style={styles.textButtonHistorial}>Continuar</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  guiastyle: {
    width: "90%",
    height: 200,
    backgroundColor: "#125098",
    borderRadius: 15,
    padding: 20,
    marginTop: "15%",
    margin: 20,
    marginBottom: 0,
    justifyContent: "flex-start",
  },
  textoguia: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: "white",
    textAlign: "center",
    fontSize: 30,
  },
  crearHistorial: {
    width: "90%",
    minHeight: 120,
    backgroundColor: "#125098",
    borderRadius: 35,
    padding: 20,
    margin: 20,
    justifyContent: "center",
  },
  botonCrearHistorial: {
    margin: 10,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonHistorial: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "#0c4e9c",
  },
  pickerStyle: {
    justifyContent: "center",
    marginTop: 10,
  },
});
