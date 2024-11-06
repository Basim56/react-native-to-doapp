import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={() => props.onDelete(props.id)} android_ripple={{ color: 'red' }}>
      <View style={styles.goalItem}>
        <Text style={styles.goalItemText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}
export default GoalItem;
const styles = StyleSheet.create({
  goalItem: {
    padding: 8,
    marginVertical: 8,
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
  },
  goalItemText: {
    textAlign: "center",
    color: "#000000",
  },
});
