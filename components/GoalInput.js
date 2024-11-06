// GoalInput.js
import { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [goalText, setGoalText] = useState("");

  function goalInputHandler(changedText) {
    setGoalText(changedText);
  }

  function addGoalHandler() {
    if (goalText.trim().length === 0) {
      return; // Exit early if the input is empty or just spaces
    }
    // Pass the goalText to the parent (App component) when the user clicks the button
    props.onAddGoalHandler(goalText);
    setGoalText(""); // Optionally clear the input after adding the goal
  }

  return (
    <Modal visible={props.isModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/images/goals_image.png")} />
        <TextInput
          placeholder="Enter your goal"
          style={styles.inputContainerText}
          onChangeText={goalInputHandler}
          value={goalText} // Bind the input to goalText
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.closeModal}
              color={"#f31282"}
            />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color={'#00ab41'}/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#000000",
  },
  inputContainerText: {
    borderWidth: 1,
    borderColor: "#ffffff",
    padding: 4,
    width: "100%",
    margin: 10,
    color: "#000000",
    backgroundColor:'#e4d0ff',
    borderRadius:10
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 7,
  },
});
