import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput,ScrollView,FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';

export default function App() {
  const [goals,setGoals] = useState([]);
  const [isModal,setIsModal] = useState(false);

  const addGoal = (enteredGoal)=> {
    setGoals([...goals,{id:Math.random().toString(),value:enteredGoal}]);
    setIsModal(false);
  }

  const deleteItem = (goalId)=>{
    setGoals(goals.filter(goal=>goal.id!=goalId))
  }
  return (
    <View style={styles.root}>
      <Button title="Add New Goal" onPress={()=>setIsModal(true)}/>
      <GoalInput closeModal={()=>setIsModal(false)} visible={isModal} addGoal={addGoal}  />
      <GoalList goals={goals} deleteItem={deleteItem} />
    </View>

  );
}

const styles = StyleSheet.create({
  root : {
      padding:40
    },
});
