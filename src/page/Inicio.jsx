import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import * as Location from "expo-location";
import { AuthContext } from "../context/auth/AuthContext";
import { PickerDespacho } from "../component/Picker";

export const Inicio = ({navigation}) => {
  const { logout, usuario } = useContext(AuthContext);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // const [selectedLanguage, setSelectedLanguage] = useState();

  const [status, setStatus] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      setStatus(status);
      if (status !== "granted") {
        setErrorMsg("Error: Acceso a la localización denegado.");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
    })();
  }, []);

  useEffect(() => {
    // const intervalId = setInterval(() => {
    //   getLocation();
    // }, 5000);

    // return () => clearInterval(intervalId);
  }, []);

  const getLocation = async () => {
    try {
      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location.coords.latitude, location.coords.longitude);
    } catch (error) {
      console.error("Error al obtener la ubicación: ", error);
    }
  };

  let text = "Esperando localización...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = `Latitud: ${location.coords.latitude}\nLongitud: ${location.coords.longitude}`;
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={getLocation}
          style={styles.button}
        >
          <Text style={styles.textButton}>Iniciar Viaje</Text>
          <View style={styles.cardubicacion}>
            <Text style={styles.cardubitext}>{text}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.bodydetviaje}>
        <TouchableOpacity activeOpacity={0.8} style={styles.buttonDetener}>
          <Text style={styles.textdetener}>Guias de Despacho</Text>
        </TouchableOpacity>
      </View>
      <View style={{...styles.cardDetalles, zIndex: 99}}>
        <View style={styles.info}>
          <Text style={styles.infodetalles}>Nombre: {usuario ?  usuario.nombre : ''} </Text>

          {/* <Text style={styles.infodetalles}>Diego</Text> */}
        </View>
        <View style={styles.info}>
          <Text style={styles.infodetalles}>Apellido: {usuario ?  usuario.apellido : ''}</Text>
          {/* <Text style={styles.infodetalles}>Maradona</Text> */}
        </View>
      </View>
      <View style={styles.bodydetviaje}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.replace('GuiaDespacho')}
          style={styles.buttonDetener}
        >
          <Text style={styles.textdetener}>Volver</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "90%",
    height: 200,
    backgroundColor: "#125098",
    borderRadius: 35,
    padding: 20,
    marginTop: "15%",
    margin: 20,
    marginBottom: 0,
    justifyContent: "center",
  },
  body: {
    width: "90%",
    height: 550,
    backgroundColor: "#125098",
    borderRadius: 15,
    padding: 20,
    marginTop: "1%",
    margin: 20,
  },
  textCard: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginTop: 40,
  },
  textInput: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 15,
    height: 50,
  },
  button: {
    margin: 10,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 15,
  },
  textButton: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "#0c4e9c",
  },
  cardubicacion: {
    marginTop: 15,
    margin: 10,
    padding: 15,
    backgroundColor: "#125098",
    borderRadius: 15,
  },
  cardubitext: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
  },
  bodydetviaje: {
    width: "90%",
    height: 120,
    backgroundColor: "#125098",
    borderRadius: 35,
    padding: 20,
    margin: 20,
    justifyContent: "center",
  },
  buttonDetener: {
    margin: 10,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  textdetener: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "#0c4e9c",
  },
  cardDetalles: {
    width: "90%",
    height: 250,
    backgroundColor: "#125098",
    borderRadius: 35,
    padding: 20,
    margin: 20,
    marginBottom: 0,
    justifyContent: "space-between",
    alignItems: "center",
  },
  info: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 15,
    height: 40,
    margin: 5,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  infodetalles: {
    margin: 5,
    // borderRadius: 15,
    // width: "110%",
    // backgroundColor: "white",
    textAlign: "center",
  },
});
