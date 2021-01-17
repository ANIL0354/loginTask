import React from 'react';
import { View,Text,FlatList,TouchableHighlight } from 'react-native';
import styles from './styles';
const data=[{"id":1,"name":"test1","age" : "11","gender":"male","email" : "test1@gmail.com","phoneNo" : "9415346313"}, {"id" : 2,"name":"test2","age" : "12","gender":"male","email" : "test2@gmail.com","phoneNo" : "9415346314"},{"id":3,"name":"test3","age" : "13","gender":"male","email" : "test3@gmail.com","phoneNo" :"9415346315"},{"id":4,"name":"test4","age" : "14","gender":"male","email" : "test4@gmail.com","phoneNo" : "9415346316"},{"id":5,"name":"test5","age" : "15","gender":"male","email" : "test5@gmail.com","phoneNo" : "9415346317"},{"id":6,"name":"test6","age" : "16","gender":"male","email" : "test6@gmail.com","phoneNo" : "9415346318"} ] 
const dashboard = () => {
    return (
        <View style={styles.container}>
        <FlatList
                data={data}
                ItemSeparatorComponent={()=><View style={styles.separatorStyle}/> }
                renderItem={({ item}) =>(
                <TouchableHighlight
                    key={item.id}
                >
            <View style={styles.container}>
                <Text>Id: {item.id}</Text>
                <Text>Name: {item.name}</Text>
                <Text>Age: {item.age}</Text>
                <Text>Gender: {item.gender}</Text>
                <Text>Email: {item.email}</Text>
                <Text>Phone: {item.phoneNo}</Text>
            </View>
                </TouchableHighlight>
            )}
            />
        </View>
    );
}

export default dashboard;