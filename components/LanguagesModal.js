import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, SafeAreaView,  Modal , Pressable,Alert } from 'react-native';

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
});
const LanguagesModal=({data}) =>{
console.log("props data",data);
    const [countriesLanguage , setCountriesLanguage] = useState(null)
    const [modalVisible, setModalVisible] = useState(false);
    // useEffect(() => {
    //         fetch( `https://restcountries.com/v2/all`)
    //         .then(reponse => reponse.json())
    //         .then(data => setCountriesLanguage(data.languages))
    // }, []);
    console.log("state lange", countriesLanguage);
    if(countriesLanguage === null){
        return <Text>chargement ... <ActivityIndicator size="large" color="black" /></Text> 
    }
    return (
        <View>
            
            <FlatList 
                data={countriesLanguage}
                renderItem={({item}) => 
                <SafeAreaView  >
                    <Text> {item.name}</Text>
                </SafeAreaView>
                }
                keyExtractor={item => item.name}
            />
            {/* <Text>langage</Text> */}
        </View>
    )
}
export default LanguagesModal