import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import LanguagesModal from './LanguagesModal';

const styles =  StyleSheet.create({
    container: {
        backgroundColor: "blue",
        textAlign:"center",
    },
    text:{
        color:"white",
    },
    area:{
        backgroundColor: "pink",
        marginVertical: 20,
    },
    textarea:{
        fontWeight: 'bold',
        paddingVertical: 10,
        
    },
    card:{
        width:100,
        height:100,
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
      }

})

    

const List =() => {

    const [countries , setCountries] = useState(null)
    const [isModalVisible, setIsModalVisible] = useState(false)
    useEffect(() => {
        fetch( `https://restcountries.com/v2/all`)
            .then(reponse => reponse.json())
            .then(data => setCountries(data))
    }, []);
    console.log("state cuntri",countries);
    const press=() =>{
        setIsModalVisible(true)
        console.log("sa clik dur" ,isModalVisible);
    }
    const pressOut=() =>{
        setIsModalVisible(false)
        console.log("sa clik dur 2" ,isModalVisible);
    }

    if(countries === null){
        return <Text>chargement ... <ActivityIndicator size="large" color="black" /></Text> 
    }
    return (
        <View style={styles.container}>
            
            {isModalVisible === true ? 
            (

                <LanguagesModal data={countries} />
            )
            :(
                <View style={styles.container}>
                    <Text style={styles.text}>Les listes de pays </Text>
                    <FlatList 
                        data={countries}
                        renderItem={({item}) => 
                        <SafeAreaView  style={styles.area}>
                            <Text onPress={press} onPressOut={pressOut} ><Text style={styles.textarea}>pays:</Text> {item.name}</Text>
                            <Text><Text style={styles.textarea}>capital :</Text> {item.capital}</Text>
                            <Text><Text style={styles.textarea}>continent :</Text> {item.region}</Text>
                        </SafeAreaView>
                        }
                        keyExtractor={item => item.name}
                        
                    />
                </View>
            )}
            
            
            
        </View>
    )
}
export default List