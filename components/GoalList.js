import React from 'react';
import {View,FlatList,TouchableOpacity} from 'react-native';
import Goal from "./Goal";


const GoalList = (props)=> {
    return (
     <View>
        <FlatList keyExtractor={(item,index)=>item.id} data={props.goals} renderItem={itemData =><TouchableOpacity onPress={props.deleteItem.bind(this,itemData.item.id)}><Goal itemData={itemData} /></TouchableOpacity> } />
      </View>
   );
}



export default GoalList;
