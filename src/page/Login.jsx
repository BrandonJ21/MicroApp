import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";

export const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = form;

  const onPress = () => {
    console.log({ form });
  };

  const onChange = (value, field) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={{...styles.textCard, fontSize:40}}>Micro App
        <Image 
          style={styles.logo}
          source={require('../assets/bus.png')}/></Text>
        <View>
          <Text style={styles.textCard}>Correo:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Correo electrónico"
            placeholderTextColor={"#0e4e9c"}
            value={email}
            onChangeText={(value) => 
            onChange(value, "email")}
            keyboardType="email-address"
          />
        </View>
        <View>
          <Text style={styles.textCard}>Contraseña:</Text>
          <TextInput 
            secureTextEntry 
            style={styles.textInput}
            placeholder="Contraseña"
            placeholderTextColor={"#0e4e9c"}
            autoCorrect={false}
            value={password}
            onChangeText={(value) => onChange(value, "password")}
          />
        </View>
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={styles.button}
          >
            <Text style={styles.textButton}>Iniciar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: "90%",
    height: 550,
    backgroundColor: "#125098",
    borderRadius: 15,
    padding: 20,
    marginTop: '30%',
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
  logo:{
    height:60,
    width:60,
  },
  stylelogo:{
    
  }
});
