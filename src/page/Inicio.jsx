import React from 'react'
import { View,Text,StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export const Inicio = () => {
  return (
    <View style={styles.continue}>
      <View style={styles.header}>
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}>
            <Text style={styles.textButton}>Iniciar Viaje</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  continue: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    width: "90%",
    height: 200,
    backgroundColor: "#125098",
    borderRadius: 15,
    padding: 20,
    marginTop: '20%',
    margin: 20,
  },
  body: {
    width: "90%",
    height: 500,
    backgroundColor: "#125098",
    borderRadius: 15,
    padding: 20,
    marginTop: '1%',
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
    marginTop: 50,
    margin: 10,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 15,
  },
  textButton: {
    textAlign: "center",
    fontSize: 19,
    fontWeight: "bold",
    color: "#0c4e9c",
  },
});
