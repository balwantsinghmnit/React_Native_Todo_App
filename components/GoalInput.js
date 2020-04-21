import React,{useState} from 'react';
import {View,TextInput,Button,StyleSheet,Modal, TouchableOpacity,Text} from "react-native";


const GoalInput =(props)=> {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredGoal)=> {
        setEnteredGoal(enteredGoal);
    }
    const addGoal = ()=>{
        props.addGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Course Goal" style={styles.goalInput} onChangeText={goalInputHandler} />
                <View style={styles.btns}>
                    <TouchableOpacity onPress={addGoal} style={[styles.btn,styles.red]}>
                        <Text style={{color:'#fff',fontSize:17}}>Add Goal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={props.closeModal} style={[styles.btn,styles.green]}>
                        <Text style={{color:'#fff',fontSize:17}}>Cancel</Text>
                    </TouchableOpacity>
                </View>           
             </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      goalInput:{
        borderColor:'black',
        borderWidth:1,
        padding:10,
        width:'80%',
        marginBottom:10
      },
      btns:{
            flexDirection:'row',
            justifyContent:'space-between'
            
      },
      btn:{
          width:100,
          height:50,
          color:'white',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center',
          borderRadius:5,
          marginRight:5
      },
      red:{
          backgroundColor:'red'
      },
      green:{
          backgroundColor:'green'
      }

});

export default  GoalInput;
