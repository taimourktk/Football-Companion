import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';

const{width,height} = Dimensions.get('screen');
const WelcomeTrackingScreen=({navigation})=> {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/logo.png")}
        esizeM ode="stretch"
      />
      <TouchableOpacity style={styles.appButtonContainer}
      onPress={()=>navigation.navigate("Step")}>
        <Text style={styles.appButtonText}>START</Text>
      </TouchableOpacity>
      <Text style={styles.baseText}>RUN, SWEAT, EAT, REPEAT</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a2928',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "lightgrey",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: width/3, 
    marginTop:250
  },
  appButtonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  baseText: 
  { fontSize: 30, 
    fontWeight: "bold",
    color: "darkgrey" ,
    paddingTop:20
  },
  logo: {
    width: width / 1.5,
    height: height / 3.4,
    position: "absolute",
    top: 150,
    alignSelf: "center"

  }
});
 export default WelcomeTrackingScreen;