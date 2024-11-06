// App.js
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function addGoalHandler(goalText) {
    if (goalText.trim().length === 0) {
      return;
    }
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), text: goalText },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="Add New Goal"
          color={"#00ab41"}
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoalHandler={addGoalHandler}
          isModalVisible={modalIsVisible}
          closeModal={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            keyExtractor={(item) => item.id} // Use the id as the key
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDelete={deleteGoalHandler}
                  id={itemData.item.id}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  goalsContainer: {
    flex: 4,
  },
});
