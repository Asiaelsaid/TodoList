import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,FlatList } from 'react-native';
import Box from './components/faltList/box';
import ToDo from './components/todoList/todoParent';

export default function App() {
  const users=[
    {NameUser:'Asia Magdi',hexCode:'#002b36'},
    {NameUser:'Esraa Ahmed',hexCode:'#073642'},
    {NameUser:'Mona Said',hexCode:'#586e75'},
    {NameUser:'Asia Magdi',hexCode:'#657b83'},
    {NameUser:'Salmaa Hassn',hexCode:'#839496'},
    {NameUser:'Esraa Ahmed',hexCode:'#93a1a1'},
    {NameUser:'Salmaa Hassn',hexCode:'#eee8d5'},
    {NameUser:'Asia Magdi',hexCode:'#fdf6e3'},
    {NameUser:'YSalmaa Hassn',hexCode:'#b58900'},
    {NameUser:'Mona Said',hexCode:'#cb4b16'},
    {NameUser:'Salmaa Hassn',hexCode:'#dc322f'},
    {NameUser:'Asia Magdi',hexCode:'#d33682'},
    {NameUser:'Mona Said',hexCode:'#2aa198'},
    {NameUser:'Esraa Ahmed',hexCode:'#859900'},
    ];
  return (
    <>
    <SafeAreaView style={styles.container}>
    {/* <ToDo /> */}
    <FlatList data={users}
      renderItem={({item})=><Box NameUser={item.NameUser} hexCode={item.hexCode}></Box>}
      ListHeaderComponent={
      <Text style={styles.header}>Users Data</Text>
      }
      ListEmptyComponent={<Text>No Data</Text>}
      keyExtractor={({hexCode})=>hexCode}
    ></FlatList>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor:"black", 
   flex:1,
    textAlign:"center",
    height: "100%",
    width: "100%",
    padding:30
    
  },
  header:{
    fontSize:18,
    fontWeight:"bold"
  }

  
});
