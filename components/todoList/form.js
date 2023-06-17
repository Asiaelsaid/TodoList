import { StatusBar } from "expo-status-bar";
import { Text, TextInput, Pressable } from "react-native";
import styles from "../style";
import { useCallback, useState } from "react";
const FormTodo = (params) => {
  const [text, setText] = useState("");
  const [validate, setValidate] = useState(false);
  const handleChangeText = useCallback((value) => {
    setText(value);
  }, []);

  const handleSubmit = () => {
    // e.preventDefault();
    if (text) {
      setValidate(false);
      console.log(text);
      params.addTodo(text);
      setText("");
    } else {
      setValidate(true);
    }
  };

  return (
    <>
      <TextInput
        style={{
          fontSize: 25,
          marginHorizontal:30,
          color:"white"
        }}
        placeholder="Add To Do"
        value={text}
        onChangeText={(val) => handleChangeText(val)}
      ></TextInput>
      {validate && <Text style={{  color:"white"}}>todo required</Text>}
      <Pressable onPress={handleSubmit} style={styles.btnContainer}>
        <Text style={styles.txt }>Add</Text>
      </Pressable>
    </>
  );
};
export default FormTodo;
