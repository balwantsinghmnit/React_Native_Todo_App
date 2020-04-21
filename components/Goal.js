import React from 'react';
import {View,Text,StyleSheet} from "react-native";

const Goal = (props)=> {
    return (
            <View style={styles.listItem}><Text>{props.itemData.item.value}</Text></View>
    );
}

const styles = StyleSheet.create({
    listItem:{
      padding:10,
      marginVertical:10,
      borderColor:'black',
      borderWidth:1,
      backgroundColor:'#ccc'
    }
  });  

export default  Goal;
