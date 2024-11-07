import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ScrollView, Button, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import React, {useState} from 'react';
import { Alert } from 'react-native';

export default function App() {
    const [questionOne, setQuestionOne] = useState('');
    const [questionTwo, setQuestionTwo] = useState('');
    const [questionThree, setQuestionThree] = useState('');
    const submitFunction = () => {
        const correctAnswers = ['Elephant', 'Bee', 'Leopard'];
        let score = 0;
        if (questionOne === correctAnswers[0]) score++;
        if (questionTwo === correctAnswers[1]) score++;
        if (questionThree === correctAnswers[2]) score++;

        Alert.alert(`Your score is: ${score}/3`);
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Animal Quiz</Text>
            <View style={styles.quizContainer}>
            <Image source={require('./img/elephant.jpg')} style={styles.image}/>
            <Text style={styles.question}>What animal is this?</Text>
            <RNPickerSelect onValueChange={(value) => setQuestionOne(value)}
                            items={[
                                {label: 'Bee', value: 'Bee'},
                                {label: 'Humming Bird', value: 'HummingBird'},
                                {label: 'Leopard', value: 'Leopard'},
                                {label: 'Deer', value: 'Deer'},
                                {label: 'Elephant', value: 'Elephant'},
                            ]}/>
            </View>
            <View style={styles.quizContainer}>
            <Image source={require('./img/bee.jpg')} style={styles.image}/>
            <Text style={styles.question}>What animal is this?</Text>
            <RNPickerSelect onValueChange={(value) => setQuestionTwo(value)}
                            items={[
                                {label: 'Bee', value: 'Bee'},
                                {label: 'Humming Bird', value: 'HummingBird'},
                                {label: 'Leopard', value: 'Leopard'},
                                {label: 'Deer', value: 'Deer'},
                                {label: 'Elephant', value: 'Elephant'},
                            ]}/>
            </View>
            <View style={styles.quizContainer}>
            <Image source={require('./img/leopard.jpg')} style={styles.image}/>
            <Text style={styles.question}>What animal is this?</Text>
            <RNPickerSelect onValueChange={(value) => setQuestionThree(value)}
                            items={[
                                {label: 'Bee', value: 'Bee'},
                                {label: 'Humming Bird', value: 'HummingBird'},
                                {label: 'Leopard', value: 'Leopard'},
                                {label: 'Deer', value: 'Deer'},
                                {label: 'Elephant', value: 'Elephant'},
                            ]}/>
            </View>
            <Button title="Submit" style={{width: '100%'}} onPress={submitFunction}/>
            <StatusBar style="auto"/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        marginTop: 10,
    },
    quizContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        marginBottom: 10,
    },
    question: {
        fontSize: 29,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'blue',
        borderWidth: 1,
        alignSelf: 'stretch',
        textAlign: 'center',
    },
    image: {
        width: 400,
        height: 300,
    },
});
