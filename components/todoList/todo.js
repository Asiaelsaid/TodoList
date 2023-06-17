import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Button,
  } from "react-native";
function Todos(param) {
    return (
      <>
     <View style={{flexDirection:"row" , marginVertical:10}}>
        <Text  style={{ textDecorationLine:param.todo.isDone? 'line-through':'' , fontSize:20,
      fontWeight:"bold", flex:1,marginRight:5 ,  color:"white"}} >{param.todo.text}</Text>
        <Button color={"green"} 
       onPress={()=>{param.doneTodo(param.index)}}
       
       title="Done">
       </Button>
         <Button color={"red"} 
       onPress={()=>{param.deleteTodo(param.index)}}
       title="Delete">
       </Button>
       </View>
      </>
    );
  }

 
  export default Todos;