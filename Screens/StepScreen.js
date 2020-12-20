import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";



const StepScreen=({navigation})=>{  
  return(
    
    <View><Text>STEPSCREEN</Text>
     <TouchableOpacity style={styles.appButtonContainer}
      onPress={()=>navigation.navigate("Map")}>
        <Text style={styles.appButtonText}>Map</Text>
      </TouchableOpacity></View>
  )
}
const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "lightgrey",
    borderRadius: 500,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width:100, 
    marginTop:250
  },
  appButtonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }

});
export default StepScreen;