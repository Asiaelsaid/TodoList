import React from 'react';
import {View, StyleSheet,Text} from 'react-native';

const Box = (props) => {
  const {NameUser,hexCode}=props;
    return (
      <View style={[styles.txtContainer,{backgroundColor:hexCode}]}>
      <Text style={styles.txtt}>{NameUser}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    txtContainer:{
        padding:10,  
        borderRadius:5,
        marginVertical:8,
      },
      txtt:{
        textAlign:"center",
        color:"white",
        fontWeight:"bold"
      },
})

export default Box;
